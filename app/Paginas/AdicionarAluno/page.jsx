
"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "@/Components/Adicionar.module.css";
import Link from "next/link";


const initialData = [
  { rm: 1, nome: "Gabrielly Vitória", turma: "3° ANO EM", ano: 2024},
  { rm: 2, nome: "Pyetra Quinquio", turma: "3° ANO EM", ano: 2024 },
  { rm: 3, nome: "Gabrielly Vitória", turma: "3° ANO EM", ano: 2024},
  { rm: 4, nome: "Pyetra Quinquio", turma: "3° ANO EM", ano: 2024 },
];

const Tabela = () => {
  const [data, setData] = useState(initialData);
  const [formData, setFormData] = useState({ rm: "", nome: "", turma: "", ano: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ rm: "", nome: "", turma: "", ano: ""});
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData(item);
  };

  const handleSave = () => {
    if (isEditing) {
      setData(data.map((item) => (item.rm === formData.rm ? formData : item)));
    } else {
      setData([...data, { ...formData, rm: data.length + 1 }]);
    }
    setShowForm(false);
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ rm: "", nome: "", turma: "", ano: ""});
  };

  return (
    <div>
        <Header></Header>
        <br></br>
        <div className={styles.div1}>
        <h1 className={styles.h1}>Adicionar Aluno</h1>
        <button className={styles.voltar}>
        <Link href="/Paginas/EditarDados">Voltar</Link>
        </button>
        </div>
        <br></br>
       

      <div className={styles.flex}>
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

      <button className={styles.addbutton} onClick={handleAdd}>Adicionar</button>

      {showForm && (
        <div className={styles.divinput}>
          <h3>{isEditing ? "" : ""}</h3>
          <br></br>

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
          <div className={styles.salecanbutton}>
          <button className={styles.salvarbutton} onClick={handleSave}>Salvar</button>
          <button className={styles.cancelarbutton} onClick={handleCancel}>Cancelar</button>
        
          </div>


        </div>
      )}
      <br></br>
      <br></br>
     
      <Footer></Footer>
    </div>
    

  );
};

export default Tabela;