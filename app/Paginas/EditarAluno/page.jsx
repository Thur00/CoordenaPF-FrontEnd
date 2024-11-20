"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    rm: "",
    nome: "",
    turma: "",
    ano: ""
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getAlunos = async () => {
    try {
      const resposta = await fetch(`${API_URL}/alunos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro ao buscar alunos", error);
    }
  };

  useEffect(() => {
    getAlunos();
  }, []);

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
    setFormData({ RM: item.rm, Nome: item.nome, Turma: item.turma, Ano: item.ano });
    setEditingItem(item);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/alunos/${editingItem.RM}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ rm: formData.rm, turma: formData.turma, nome: formData.nome, ano: formData.ano }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getAlunos();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o aluno:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/alunos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({ rm: formData.rm, turma: formData.turma, nome: formData.nome, ano: formData.ano }),
        });

        // Atualiza a lista de temas após a edição
        getAlunos();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ rm: "", nome: "", turma: "", ano: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar aluno:", error);
      }
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
      <br></br>
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Aluno</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>
        </div>
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
                  <td colSpan="4">Nenhum aluno encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className={styles.buttonContainer}>
            {data.map((item) => (
              <button
                className={styles.editarbutton}
                key={item.rm}
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
          <h3 className={styles.titleinput}>
            {isEditing ? "Editar" : "Adicionar"}
          </h3>
          <div className={styles.divinput}>
            <input
              type="text"
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
              type="text"
              name="ano"
              value={formData.ano}
              onChange={handleInputChange}
              placeholder="Ano"
            />
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