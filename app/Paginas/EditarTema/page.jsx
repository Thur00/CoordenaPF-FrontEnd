"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ id: "", tema: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [mensagemErro, setMensagemErro] = useState("");


  const getTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/temas`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca alunos", error);
    }
  };

  useEffect(() => {
    getTema();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ id: "", tema: "" });
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({ id: item.Tema_id, tema: item.Nome_tema });  
    setEditingItem(item);
  };

  const handleSave = async () => {
    if ( !formData.Nome_tema) {
      setMensagemErro("As informações não podem estar vazias.");
      setTimeout(() => setMensagemErro(""), 3000); // Limpa a mensagem de erro após 3 segundos
      return; // Retorna para não prosseguir com a requisição
    }

    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/temas/${editingItem.Tema_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome_tema: formData.tema }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getTema();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        setMensagemErro("Erro ao atualizar  tema: " + error);
        setTimeout(() => setMensagemErro(""), 3000);
      }


    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/temas`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({ nome_tema: formData.tema }),
        });



        if (!response.ok) {
          const errorMessage = `Erro ao buscar Tema: ${response.status}`;
          setMensagemErro(errorMessage);
          setTimeout(() => setMensagemErro(""), 3000); // Limpa a mensagem de erro após 3 segundos
        }

        // Atualiza a lista de temas após a edição
        getTema();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ id: "", tema: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        setMensagemErro("Erro ao atualizar  aluno: " + error);
        setTimeout(() => setMensagemErro(""), 3000);
      }
    }
    setShowForm(false);
    setFormData({ id: "", tema: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", tema: "" });
  };

  return (
    <div>
    {mensagemErro && (
        <div className={styles.notificacaoErro}>{mensagemErro}</div>
      )}
      <br />
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Tema</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>
        </div>
        <br />
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Tema</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.Tema_id}>
                    <td>{item.Tema_id}</td>
                    <td>{item.Nome_tema}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Nenhum tema encontrado.</td>
                </tr>
              )}
            </tbody>
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
          <h3 className={styles.titleinput}>
            {isEditing ? "Editar" : "Adicionar"}
          </h3>
          <div className={styles.divinput}>
            <input
              type="text"
              name="tema"
              value={formData.tema}
              onChange={handleInputChange}
              placeholder="tema"
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
