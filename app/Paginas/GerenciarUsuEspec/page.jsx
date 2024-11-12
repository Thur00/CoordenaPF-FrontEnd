"use client"

import { useEffect, useState } from "react";
import styles from "@/Components/Perfil.module.css"
import Link from "next/link"

const API_URL = "http://localhost:3001"; // Adicione a URL da API


const GerenciarUsuEsp = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ Login_id: "", Nome: "", Cargo: "", Email: "", Senha: "", CPF: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getAll = async () => {
    debugger
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca usuário", error);
    }
  };

  useEffect(() => {
    getAll();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({ Login_id: item.Login_id, Nome: item.Nome, Cargo: item.Cargo, Email: item.Email, Senha: item.Senha, CPF: item.CPF });
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
          body: JSON.stringify(
            { Login_id: formData.Login_id, Nome: formData.Nome, Cargo: formData.Cargo, Email: formData.Email, Senha: formData.Senha, CPF: formData.CPF }
          ), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getAll();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o usuário:", error);
      }
    }
    
    setShowForm(false);
    setFormData({ Login_id: "", Nome: "", Cargo: "", Email: "", Senha: "", CPF: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ Login_id: "", Nome: "", Cargo: "", Email: "", Senha: "", CPF: "" });
  };

  return (
    <>

      <div className={styles.body}>
        
        <h1 className={styles.tit2}>{data[0]?.Nome}</h1>
        <p className={styles.p}>{data[0]?.Cargo}</p>

        <div className={styles.input}>
          {data.map((item) => (
            <div key={item.Login_id}>
              <input
                className={styles.um}
                type="text"
                value={item.Nome}
                readOnly
              />
              <input
                className={styles.um}
                type="text"
                value={item.Cargo}
                readOnly
              />
              <input
                className={styles.um}
                type="text"
                value={item.Email}
                readOnly
              />
              <input
                className={styles.um}
                type="text"
                value={item.Senha}
                readOnly
              />
              <input
                className={styles.um}
                type="text"
                value={item.CPF}
                readOnly
              />

            </div>
          ))}
        </div>

        <div >
        <div className={styles.botoes}>
          {data.map((item) => (
            <button
              className={styles.botao}
              key={item.Login_id}
              onClick={() => handleEdit(item)}
            >Editar</button>
          ))}


          {showForm && (
            <div>
              <h3>
                {isEditing ? "Editar" : "Adicionar"}
              </h3>
              <div >
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
                  name="Senha"
                  value={formData.Senha}
                  onChange={handleInputChange}
                  placeholder="Senha"
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

              <div >
                <button className={styles.botao} onClick={handleSave}>
                  Salvar
                </button>
                <button className={styles.botao} onClick={handleCancel}>
                  Cancelar
                </button>
              </div>
            </div>
            
          )}
          <Link href="/Paginas/PaginaInicial"><button className={styles.botao}> Voltar </button></Link>
          <Link href="/Paginas/Usuarios"><button className={styles.botao2}> Gerenciar Usuários </button></Link>
</div>
          
        </div></div >

    </>
  )
}

export default GerenciarUsuEsp;

