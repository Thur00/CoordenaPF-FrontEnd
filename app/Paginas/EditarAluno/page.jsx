"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Header from "@/Components/Header";
import Link from "next/link"
import Footer from "@/Components/Footer";

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ rm: "", nome: "", turma: "", ano: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [aluno, setAluno] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getAlunos = async () => {

      try {
        const resposta = await fetch(
          `http://localhost:3001/alunos`
        )
        const data1 = await resposta.json()
        setData(data1);
        setError(null)
      } catch (error) {
        console.error("Erro na busca alunos", error)
        setError("Falha na busca alunos. Tente novamente.")
      }
    };
    getAlunos();
  }, [])


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ rm: "", nome: "", turma: "", ano: "" });
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData(item);
    setEditingItem(item);
  };

  const handleSave = () => {
    if (isEditing) {
      setData(
        data.map((item) => (item.rm === editingItem.rm ? formData : item))
      );
    } else {
      setData([...data, { ...formData, rm: Number(formData.rm) }]);
    }
    setShowForm(false);
    setFormData({ rm: "", nome: "", turma: "", ano: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ rm: "", nome: "", turma: "", ano: "" });
  };

  return (
    <div>
      <Header></Header>
      <br></br>
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Aluno</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>         </div>
        <br></br>
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>RM</th>
                <th>NOME</th>
                <th>TURMA</th>
                <th>ANO</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item) => (
                <tr key={item.rm}>
                  <td>{item.rm}</td>
                  <td>{item.nome}</td>
                  <td>{item.turma}</td>
                  <td>{item.ano}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className={styles.buttonContainer}>
            {data.map((item) => (
              <button className={styles.editarbutton} key={item.rm} onClick={() => handleEdit(item)}>
                Editar
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className={styles.addbutton} onClick={handleAdd}>Adicionar</button>

      {showForm && (
        <div>
          <h3>{isEditing ? "" : ""}</h3>
          <br></br>
          <div className={styles.divinput}>
            <input
              type="number"
              name="rm"
              value={formData.rm}
              onChange={handleInputChange}
              placeholder="RM"
            />
            <br></br>
            <input
              type="text"
              name="nome"
              value={formData.nome}
              onChange={handleInputChange}
              placeholder="Nome"
            />
            <br></br>

            <input
              type="text"
              name="turma"
              value={formData.turma}
              onChange={handleInputChange}
              placeholder="Turma"
            />
            <br></br>

            <input
              type="number"
              name="ano"
              value={formData.ano}
              onChange={handleInputChange}
              placeholder="Ano"
            />

          </div>

          <div className={styles.salecanbutton}>
            <button className={styles.salvarbutton} onClick={handleSave}>Salvar</button>
            <button className={styles.cancelarbutton} onClick={handleCancel}>Cancelar</button>
          </div>
        </div>
      )}
      <Footer></Footer>
    </div>
  );
};

export default Tabela;