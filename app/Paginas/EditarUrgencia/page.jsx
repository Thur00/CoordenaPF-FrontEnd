"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ id: "", urgencia: "", cor: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getUrgencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/urgencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
    } catch (error) {
      console.error("Erro na busca aspectos", error);
    }
  };

  useEffect(() => {
    getUrgencia();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ id: "", urgencia: "", cor: "" });
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({
      Urgencia_id: item.urgencia,
      Tipo_urgencia: item.urgencia,
      Cor: item.cor,
    });
    setEditingItem(item);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/urgencias/${editingItem.Urgencia_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            tipo_urgencia: formData.urgencia,
            cor: formData.cor,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getUrgencia();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o urgência:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/urgencias`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({
            tipo_urgencia: formData.urgencia,
            cor: formData.cor,
          }),
        });

        // Atualiza a lista de temas após a edição
        getUrgencia();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ id: "", urgencia: "", cor: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar urgencia:", error);
      }
    }
    setShowForm(false);
    setFormData({ id: "", urgencia: "", cor: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", urgencia: "", cor: "" });
  };

  return (
    <div>
      <br></br>
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Urgência</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>
        </div>
        <br></br>
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Urgência</th>
                <th>Cor</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.Urgencia_id}>
                    <td>{item.Urgencia_id}</td>
                    <td>{item.Tipo_urgencia}</td>
                    <td><div className={styles.divColor} style={{ backgroundColor: item.Cor }}>{item.Cor}</div></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="2">Nenhuma urgência encontrado.</td>
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
              name="urgencia"
              value={formData.urgencia}
              onChange={handleInputChange}
              placeholder="Urgencia"
            />

            <br />

            <input
              className={styles.color}
              type="color"
              name="cor"
              value={formData.cor}
              onChange={handleInputChange}
              placeholder="Cor"
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
