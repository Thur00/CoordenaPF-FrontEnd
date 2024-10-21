"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";
import Footer from "@/Components/Footer"
import Header from "@/Components/Header"
import styles from "@/Components/exibirocorrencia.module.css"


const API_URL = "http://localhost:3001"; // Adicione a URL da API


function exibiroco() {


const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ id: "", tema: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/temas`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
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
    setFormData({ tema: item.Nome_tema });  
    setEditingItem(item);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/ocorrencias/${editingItem.item.rm}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ item: formData.rm }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getTema();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o tema:", error);
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
          body: JSON.stringify({ Nome_tema: formData.tema }),
        });

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
        console.error("Erro ao adicionar tema:", error);
      }
    }
    setShowForm(false);
    setFormData({ rm: "", nome: "", turma: "", ano:"" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", tema: "" });
  };
}
  return (
    
    <div className={styles.main}> 
      
      <br></br>

      <Header />
                <div className={styles.tit}>
                <h1>Ocorrência</h1>
                
                </div>
      <div>
        <div className={styles.salecanbutton}>
          <button className={styles.salvarbutton} onClick={handleSave}>Mudar Status</button>
          <button  className={styles.salvarbutton} onClick={handleCancel}>Solicitar</button>

        </div>
        <br></br>
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
            placeholder="Aspecto:"
          />
          <br></br>
          <input
            type="text"
            placeholder="Iniciativa:"
          />
          <br></br>

          <input
            type="text"
            placeholder="Tema:"
          />
          <br></br>

<input
            type="text"
            placeholder="Estudante:"
          />
          <br></br>

<input
            type="text"
            placeholder="Responsável:"
          />
          <br></br>

<input
            type="text"
            placeholder="Especialista:"
          />
          <br></br>

<input
            type="text"
            placeholder="Encaminhamento:"
          />
          <br></br>

<input
            type="text"
            placeholder="Descrição:"
          />

          </div>

          <div className={styles.salecanbutton}>
          <button className={styles.cancelarbutton} onClick={handleSave}>Gerar Documento</button>
         <Link  href="/Paginas/PaginaInicial" ><button  className={styles.cancelarbutton} onClick={handleCancel}>Voltar</button></Link>
          </div>
          <br></br>
        </div>
      )}
<Footer/>
    </div>
  );
};

export default exibiroco;
