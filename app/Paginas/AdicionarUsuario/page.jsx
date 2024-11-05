"use client";

import { useState, useEffect } from "react";
import styles from "@/Components/AddUsuario.module.css";
import Link from "next/link";


const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Usuarios1 = [{ login_id:"", cargo: "", nome: "", email: "", senha: "", cpf: "" }];

const Input = () => {
  const [data, setData] = useState(Usuarios1);
  const [formData, setFormData] = useState({
    login_id:"",
    cargo: "",
    nome: "",
    email: "",
    ano: "",
    senha: "",
    cpf: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);

  const getAddUser = async () => {
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
    } catch (error) {
      console.error("Erro na busca usuários", error);
    }
  };

  useEffect(() => {
    getAddUser();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
          body: JSON.stringify({ Cargo: formData.cargo, Nome: formData.nome, Email: formData.email, Senha: formData.senha, CPF: formData.cpf  }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getAddUser();

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
          body: JSON.stringify({ Login_id: formData.login_id }),
        });

        // Atualiza a lista de temas após a edição
        getAddUser();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);

        // Limpa os campos de entrada
        setFormData({ login_id:"",
          cargo: "",
          nome: "",
          email: "",
          ano: "",
          senha: "",
          cpf: "",});
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar usuário:", error);
      }
    }
    setShowForm(false);
    setFormData({login_id:"",
      cargo: "",
      nome: "",
      email: "",
      ano: "",
      senha: "",
      cpf: "",});
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ login_id: "", cargo: "", nome: "", email: "", senha: "", cpf: "" });
  };


  return (
    <div>
      <br></br>
      <div className={styles.body}>
        <h1 className={styles.tit}>Adicionar Usuário</h1>
       
      </div>


      <div className={styles.input}>
        <h3>{isEditing ? "" : ""}</h3>
        <br></br>

        <input className={styles.um}
          type="text"
          name="cargo"
          value={formData.cargo}
          onChange={handleInputChange}
          placeholder="Cargo:"
        />
        <br></br>

        <input className={styles.um}
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="Nome:"
        />
        <br></br>

        <input className={styles.um}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-mail:"
        />
        <br></br>

        <input className={styles.um}
          type="text"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          placeholder="Senha:"
        />
        <br></br>
        <input className={styles.um}
          type="number"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          placeholder="CPF:"
        />
        <div className={styles.botoes}>
        <button className={styles.botao}>
          <Link href="/Paginas/Usuarios">Voltar</Link>
        </button>
          <button className={styles.botao} onClick={handleSave}>
            Salvar
          </button>
          <button className={styles.botao} onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

export default Input;

// const Usuarios = [{ cargo: "", nome: "", email: "", senha: "", cpf: "" }];

// const Input = () => {
//   const [data, setData] = useState(Usuarios);
//   const [focargoData, setFormData] = useState({
//     cargo: "",
//     nome: "",
//     email: "",
//     ano: "",
//     senha: "",
//     cpf: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showForm, setShowForm] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...focargoData, [name]: value });
//   };

//   const handleAdd = () => {
//     setShowForm(true);
//     setIsEditing(false);
//     setFormData({
//       cargo: "",
//       nome: "",
//       email: "",
//       ano: "",
//       senha: "",
//       cpf: "",
//     });
//   };

//   const handleEdit = (item) => {
//     setShowForm(true);
//     setIsEditing(true);
//     setFormData(item);
//   };

//   const handleSave = () => {
//     if (isEditing) {
//       setData(
//         data.map((item) =>
//           item.cargo === focargoData.cargo ? focargoData : item
//         )
//       );
//     } else {
//       setData([...data, { ...focargoData, cargo: data.length + 1 }]);
//     }
//     setShowForm(false);
//   };

//   const handleCancel = () => {
//     setShowForm(false);
//     setFormData({ cargo: "", nome: "", email: "", senha: "", cpf: "" });
//   };

//   return (
//     <div>
//       <br></br>
//       <div className={styles.div1}>
//         <h1 className={styles.h1}>Adicionar Usuário</h1>
//         <button className={styles.voltar}>
//           <Link href="/Paginas/Usuarios">Voltar</Link>
//         </button>
//       </div>
//       <br></br>

//       <div className={styles.divinput}>
//         <h3>{isEditing ? "" : ""}</h3>
//         <br></br>

//         <input
//           type="text"
//           name="cargo"
//           value={focargoData.cargo}
//           onChange={handleInputChange}
//           placeholder="Cargo:"
//         />
//         <br></br>

//         <input
//           type="text"
//           name="nome"
//           value={focargoData.nome}
//           onChange={handleInputChange}
//           placeholder="Nome:"
//         />
//         <br></br>

//         <input
//           type="text"
//           name="email"
//           value={focargoData.email}
//           onChange={handleInputChange}
//           placeholder="E-mail:"
//         />
//         <br></br>

//         <input
//           type="text"
//           name="senha"
//           value={focargoData.senha}
//           onChange={handleInputChange}
//           placeholder="Senha:"
//         />
//         <br></br>
//         <input
//           type="number"
//           name="cpf"
//           value={focargoData.cpf}
//           onChange={handleInputChange}
//           placeholder="CPF:"
//         />
//         <div className={styles.salecanbutton}>
//           <button className={styles.cancelarbutton} onClick={handleAdd}>
//             Salvar
//           </button>
//           <button className={styles.cancelarbutton} onClick={handleCancel}>
//             Cancelar
//           </button>
//         </div>
//       </div>

//       <br></br>
//       <br></br>

//     </div>
//   );
// };

// export default Input;
