"use client"

import { useEffect, useState } from "react";
import styles from "@/Components/Perfil.module.css"
import Link from "next/link"

const API_URL = "http://localhost:3001"; // Adicione a URL da API


const MeuPerfil = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({ Login_id: "", Nome: "", Cargo: "", Email: "", Senha: "", CPF: "" });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getAll = async () => {
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
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
    // } else {
    //   try {
    //     // Faz uma requisição POST para a API de temas
    //     const response = await fetch(`${API_URL}/usuarios`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       // Envia o corpo da requisição em formato JSON
    //       body: JSON.stringify(
    //         {Login_id: formData.Login_id, Nome: formData.Nome, Cargo: formData.Cargo, Email: formData.Email, Senha: formData.Senha, CPF: formData.CPF}
    //       ),
    //     });

    //     // Atualiza a lista de temas após a edição
    //     getAll();

    //     // Converte a resposta para JSON
    //     const data = await response.json();

    //     // Atualiza o estado de 'data' com o novo tema adicionado
    //     setData((prevData) => [...prevData, data]);

    //     // Limpa os campos de entrada
    //     setFormData({ Login_id: "", Nome: "", Cargo: "", Email: "", Senha: "", CPF: "" });
    //     setShowForm(false);
    //   } catch (error) {
    //     // Loga erros no console
    //     console.error("Erro ao adicionar usuário:", error);
    //   }
    // }
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
        <h1 className={styles.tit}> Meu perfil </h1>
        <h1>{formData.Nome}</h1>

        <div className={styles.input}>

          {/* {data.length > 0 ? (
    data.map((item) => (
      <div key={item.Login_id} className="form-row">
        <div >
          <input className={styles.um}
            type="text"
            id={`Nome-${item.Login_id}`}
            name="Nome"
            value={item.Nome}
            readOnly
          />
        </div>
        <div >
          <input className={styles.um}
            type="text"
            id={`Cargo-${item.Login_id}`}
            name="Cargo"
            value={item.Cargo}
            readOnly
          />
        </div>
        <div >
          <input className={styles.um}
            type="email"
            id={`Email-${item.Login_id}`}
            name="Email"
            value={item.Email}
            readOnly
          />
        </div>
        <div >
          <input className={styles.um}
            type="password"
            id={`Senha-${item.Login_id}`}
            name="Senha"
            value={item.Senha}
            readOnly
          />
        </div>
        <div >
          <input className={styles.um}
            type="text"
            id={`CPF-${item.Login_id}`}
            name="CPF"
            value={item.CPF}
            readOnly
          />
        </div>
      </div>
    ))
  ) : (
    <div className="form-row">
      <p>Nenhum usuário encontrado.</p>
    </div>
  )} */}


          {data.map((item) => (
            <input className={styles.um} key={item.Login_id} type="text" value={item.Nome} onChange={handleInputChange} />
          ))}

          {data.map((item) => (
            <input className={styles.um} key={item.Login_id} type="text" value={item.Cargo} onChange={handleInputChange} />

          ))}

          {data.map((item) => (
            <input className={styles.um} key={item.Login_id} type="text" value={item.Email} onChange={handleInputChange} />
          ))}

          {data.map((item) => (
            <input className={styles.um} key={item.Login_id} type="text" value={item.Senha} onChange={handleInputChange} />
          ))}

          {data.map((item) => (
            <input className={styles.um} key={item.Login_id} type="text" value={item.CPF} onChange={handleInputChange} />
          ))}


          {/* <input className={styles.um} type="text" value={formData.Nome} onChange={handleInputChange}  placeholder="Nome:" />
        <input className={styles.um} type="text" value={formData.Cargo} onChange={handleInputChange}  placeholder="Cargo:" />
        <input className={styles.um} type="text" value={formData.Email} onChange={handleInputChange}  placeholder="E-mail:" />
        <input className={styles.um} type="text" value={formData.Senha} onChange={handleInputChange}  placeholder="Senha:" />
        <input className={styles.um} type="text" value={formData.CPF} onChange={handleInputChange}  placeholder="CPF:" /> */}

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

export default MeuPerfil;

