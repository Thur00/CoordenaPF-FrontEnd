"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";
import { Acesso } from "@/utils/Credenciais";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const EditarAcesso = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ usuario: "", senha: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const { usuarioFixo, senhaFixa } = Acesso();


  const getAspectos = async () => {
    try {
      const resposta = await fetch(`${API_URL}/aspectos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca aspectos", error);
    }
  };

  useEffect(() => {
    getAspectos();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ id: "", Nome: "" });
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({ id: item.Aspecto_id, Nome: item.Nome });
    setEditingItem(item);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/aspectos/${editingItem.Aspecto_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ nome: formData.Nome }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getAspectos();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o aspecto:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/aspectos`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({ nome: formData.Nome }),
        });

        // Atualiza a lista de temas após a edição
        getAspectos();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ id: "", Nome: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar tema:", error);
      }
    }
    setShowForm(false);
    setFormData({ id: "", Nome: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", Nome: "" });
  };


  return (
    <div>
      <div className={styles.div1}>
        <h1 className={styles.h1}>Editar Aspecto</h1>
        <button className={styles.voltar}>
          <Link href="/Paginas/EditarDados">Voltar</Link>
        </button>
      </div>
      <h3 className={styles.titleinput}>Editar acesso ao sistema</h3>
      <div className={styles.divinput}>
        <input
          type="text"
          name="usuario"
          value={formCred.usuario}
          onChange={handleInputChange}
          placeholder="Usuario"
        />
        <input
          type="text"
          name="senha"
          value={formCred.senha}
          onChange={handleInputChange}
          placeholder="Senha"
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
  );
};

export default EditarAcesso;
