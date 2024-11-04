"use client"

import InicialOcorrencia from "@/Components/InicialOcorrencias"
import styles from "./TodasOcorrencias.module.css"
import { IoSearch } from "react-icons/io5";
import BotaoVoltar from "@/Components/BotaoVoltar";
import { useEffect, useState } from "react";

export default function TodasOcor() {
    const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
     rm: "",
    nome: "",
    tema: "",
    data: "", 
    status: "", 
    urgencia: "", 
     });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getOcorrencias = async () => {
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  useEffect(() => {
    getOcorrenciass();
  }, []);

  

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/ocorrencias/${editingItem.RM}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ Nome: formData.nome, Tema: formData.tema, Data: formData.data, Status: formData.status, Urgência: formData.urgencia }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getOcorrencias();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar ocorrencia:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/ocorrencias`, {
          method: "UPDATE",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({ RM: formData.rm }),
        });

        // Atualiza a lista de temas após a edição
        getOcorrencias();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ rm: "", nome: "", tema: "", data: "", status: "", urgencia: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar ocorrencia:", error);
      }
    }
    setShowForm(false);
    setFormData({ rm: "", nome: "", tema: "", data: "", status: "", urgencia: "" });
  };

 
    return (
        <main className={styles.main}>

            <div className={styles.divtitulo}>
                <h1 className={styles.titulo} > Todas as ocorrências </h1>
                <BotaoVoltar link= "/Paginas/PaginaInicial" />
            </div>
            <br></br>
            <div className={styles.pesquisafiltro}>
                <div className={styles.pesquisa}>
                    <input type="text" />
                    <button> <IoSearch /> </button>
                </div>

                {showForm && (
                <div className={styles.filtro}>
                    <button className={styles.butfiltro}> RM </button>
                    <button className={styles.butfiltro}> NOME </button>
                    <button className={styles.butfiltro}> TEMA </button>
                    <button className={styles.butfiltro}> DATA </button>
                    <button className={styles.butfiltro}> STATUS </button>
                    <button className={styles.butfiltro}> URGÊNCIA </button>
                </div>
                )}
            </div>
            <div className={styles.boxTodasOcor}>
                <InicialOcorrencia/>
                <InicialOcorrencia/>
                <InicialOcorrencia/>
                <InicialOcorrencia/>
                <InicialOcorrencia/>
                <InicialOcorrencia/>

            </div>
        </main>
    )
}