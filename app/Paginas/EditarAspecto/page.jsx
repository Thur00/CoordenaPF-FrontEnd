"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ id: "", tipodeaspecto: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  useEffect(() => {
    const getAspectos = async () => {
      try {
        const resposta = await fetch(`http://localhost:3001/aspectos`);
        const data1 = await resposta.json();
        console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
        setData(data1);
        setError(null);
      } catch (error) {
        console.error("Erro na busca alunos", error);
        setError("Falha na busca alunos. Tente novamente.");
      }
    };
    getAspectos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ id: "", tipodeaspecto: "" });
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
        data.map((item) => (item.id === editingItem.id ? formData : item))
      );
    } else {
      setData([...data, { ...formData, id: Number(formData.id) }]);
    }
    setShowForm(false);
    setFormData({ id: "", tipodeaspecto: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", tipodeaspecto: "" });
  };

  return (
    <div>
      <br></br>
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Aspecto</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>{" "}
        </div>
        <br></br>
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tipo de Aspecto</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.RM}>
                    <td>{item.RM}</td>
                    <td>{item.Nome}</td>
                    <td>{item.Turma}</td>
                    <td>{item.Ano}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum aluno encontrado.</td>
                </tr>
              )}
            </tbody>
            \
          </table>

          <div className={styles.buttonContainer}>
            {data.map((item) => (
              <button
                className={styles.editarbutton}
                key={item.id}
                onClick={() => handleEdit(item)}
              >
                Editar
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className={styles.addbutton} onClick={handleAdd}>
        Adicionar
      </button>

      {showForm && (
        <div>
          <h3>{isEditing ? "" : ""}</h3>
          <br></br>
          <div className={styles.divinput}>
            <input
              type="text"
              name="tipodeaspecto"
              value={formData.tipodeaspecto}
              onChange={handleInputChange}
              placeholder="tipodeaspecto"
            />
            <br></br>
          </div>

          <div className={styles.salecanbutton}>
            <button className={styles.salvarbutton} onClick={handleSave}>
              Salvar
            </button>
            <button className={styles.cancelarbutton} onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabela;
