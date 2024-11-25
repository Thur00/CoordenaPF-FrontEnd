"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/AdicionarUsu.module.css"; // Importando o CSS
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    Login_id: "",
    Nome: "",
    Cargo: "",
    Email: "",
    CPF: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getUsuario = async () => {
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca alunos", error);
    }
  };

  useEffect(() => {
    getUsuario();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({
      Login_id: "",
      Nome: "",
      Cargo: "",
      Email: "",
      CPF: "",
    });
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({
      Login_id: item.Login_id,
      Nome: item.Nome,
      Cargo: item.Cargo,
      Email: item.Email,
      CPF: item.CPF,
    });
    setEditingItem(item);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/usuarios/${editingItem.Login_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            nome: formData.Nome,
            cargo: formData.Cargo,
            email: formData.Email,
            cpf: formData.CPF,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getUsuario();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o usuário:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/usuarios`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({
            nome: formData.Nome,
            cargo: formData.Cargo,
            email: formData.Email,
            cpf: formData.CPF,
          }),
        });

        // Atualiza a lista de temas após a edição
        getUsuario();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({
          Login_id: "",
          Nome: "",
          Cargo: "",
          Email: "",
          CPF: "",
        });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar usuario:", error);
      }
    }
    setShowForm(false);
    setFormData({
      Login_id: "",
      Nome: "",
      Cargo: "",
      Email: "",
      CPF: "",
    });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({
      Login_id: "",
      Nome: "",
      Cargo: "",
      Email: "",
      CPF: "",
    });
  };

  return (
    <div>
      <br></br>
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Usuários</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>
        </div>
        <br></br>
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>Login_Id</th>
                <th>NOME</th>
                <th>CARGO</th>
                <th>EMAIL</th>
                <th>CPF</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.Login_id}>
                    <td>{item.Login_id}</td>
                    <td>{item.Nome}</td>
                    <td>{item.Cargo}</td>
                    <td>{item.Email}</td>
                    <td>{item.CPF}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum usuário encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className={styles.buttonContainer}>
            {data.map((item) => (
              <button
                className={styles.editarbutton}
                key={item.Login_id}
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
              name="Nome"
              value={formData.Nome}
              onChange={handleInputChange}
              placeholder="Nome"
            />

            <br></br>

            <input
              type="text"
              name="Cargo"
              value={formData.Cargo}
              onChange={handleInputChange}
              placeholder="Cargo"
            />

            <br></br>

            <input
              type="text"
              name="Email"
              value={formData.Email}
              onChange={handleInputChange}
              placeholder="Email"
            />
            <br></br>
            <input
              type="text"
              name="CPF"
              value={formData.CPF}
              onChange={handleInputChange}
              placeholder="CPF"
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
