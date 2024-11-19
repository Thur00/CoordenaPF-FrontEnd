"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/AddUsuario.module.css"; // Importando o CSS
import Link from "next/link";
import BotaoVoltar from "@/Components/BotaoVoltar";

const Usuarios1 = [{ cargo: "", nome: "", email: "", senha: "", cpf: "" }];

const Input1 = () => {
  const [data, setData] = useState(Usuarios1);
  const [focargoData, setFocargoData] = useState({
    cargo: "",
    nome: "",
    email: "",
    ano: "",
    senha: "",
    cpf: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showFocargo, setShowFocargo] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFocargoData({ ...focargoData, [name]: value });
  };

  const handleAdd = () => {
    setShowFocargo(true);
    setIsEditing(false);
    setFocargoData({
      cargo: "",
      nome: "",
      email: "",
      ano: "",
      senha: "",
      cpf: "",
    });
  };

  const handleEdit = (item) => {
    setShowFocargo(true);
    setIsEditing(true);
    setFocargoData(item);
  };

  const handleSave = () => {
    if (isEditing) {
      setData(
        data.map((item) =>
          item.cargo === focargoData.cargo ? focargoData : item
        )
      );
    } else {
      setData([...data, { ...focargoData, cargo: data.length + 1 }]);
    }
    setShowFocargo(false);
  };

  const handleCancel = () => {
    setShowFocargo(false);
    setFocargoData({ cargo: "", nome: "", email: "", senha: "", cpf: "" });
  };

  return (
    <div>
      <br></br>

      <div className={styles.div1}>
        <h1 className={styles.h1}>Adicionar Usuário</h1>
        <BotaoVoltar link="/Paginas/usuarios" />
      </div>

      <br></br>
      <div className={styles.divinput}>
        <h3>{isEditing ? "" : ""}</h3>
        <br></br>

        <input
          type="text"
          name="cargo"
          value={focargoData.cargo}
          onChange={handleInputChange}
          placeholder="Cargo:"
        />
        <br></br>

        <input
          type="text"
          name="nome"
          value={focargoData.nome}
          onChange={handleInputChange}
          placeholder="Nome:"
        />
        <br></br>

        <input
          type="text"
          name="email"
          value={focargoData.email}
          onChange={handleInputChange}
          placeholder="E-mail:"
        />
        <br></br>

        <input
          type="text"
          name="senha"
          value={focargoData.senha}
          onChange={handleInputChange}
          placeholder="Senha:"
        />
        <br></br>
        <input
          type="number"
          name="cpf"
          value={focargoData.cpf}
          onChange={handleInputChange}
          placeholder="CPF:"
        />
        <div className={styles.salecanbutton}>
          <button className={styles.cancelarbutton} onClick={handleAdd}>
            Salvar
          </button>
          <button className={styles.cancelarbutton} onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>

      <br></br>
      <br></br>
    </div>
  );
};

// const Usuarios = [{ cargo: "", nome: "", email: "", senha: "", cpf: "" }];

// const Input = () => {
//   const [data, setData] = useState(Usuarios);
//   const [focargoData, setFocargoData] = useState({
//     cargo: "",
//     nome: "",
//     email: "",
//     ano: "",
//     senha: "",
//     cpf: "",
//   });
//   const [isEditing, setIsEditing] = useState(false);
//   const [showFocargo, setShowFocargo] = useState(false);

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFocargoData({ ...focargoData, [name]: value });
//   };

//   const handleAdd = () => {
//     setShowFocargo(true);
//     setIsEditing(false);
//     setFocargoData({
//       cargo: "",
//       nome: "",
//       email: "",
//       ano: "",
//       senha: "",
//       cpf: "",
//     });
//   };

//   const handleEdit = (item) => {
//     setShowFocargo(true);
//     setIsEditing(true);
//     setFocargoData(item);
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
//     setShowFocargo(false);
//   };

//   const handleCancel = () => {
//     setShowFocargo(false);
//     setFocargoData({ cargo: "", nome: "", email: "", senha: "", cpf: "" });
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

// -----------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------

// const API_URL = "http://localhost:3001"; // Adicione a URL da API

// const Input = () => {
//   const [formData, setFormData] = useState({
//     login_id: "",
//     cargo: "",
//     nome: "",
//     email: "",
//     ano: "",
//     senha: "",
//     cpf: "",
//   });

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSave = async () => {
//     try {
//       // Faz uma requisição POST para a API de temas
//       const response = await fetch(`${API_URL}/usuarios`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         // Envia o corpo da requisição em formato JSON
//         body: JSON.stringify({ id: formData.login_id, cargo: formData.cargo, nome: formData.nome, email: formData.email, senha: formData.senha, cpf: formData.cpf }),
//       });

//       // Limpa os campos de entrada
//       setFormData({ login_id: "", cargo: "", nome: "", email: "", senha: "", cpf: "" });

//     } catch (error) {
//       // Loga erros no console
//       console.error("Erro ao adicionar usuário:", error);
//     }
//   };

//   const handleCancel = () => {
//     setFormData({ login_id: "", cargo: "", nome: "", email: "", senha: "", cpf: "" });
//   };

//   return (
//     <div>
//       <br></br>
//       <div className={styles.body}>
//         <h1 className={styles.tit}>Adicionar Usuário</h1>
//       </div>
//       <div className={styles.input}>

//         <input className={styles.um}
//           type="text"
//           name="nome"
//           value={formData.nome}
//           onChange={handleInputChange}
//           placeholder="Nome"
//         />

//         <input className={styles.um}
//           type="text"
//           name="cargo"
//           value={formData.cargo}
//           onChange={handleInputChange}
//           placeholder="Cargo"
//         />

//         <input className={styles.um}
//           type="text"
//           name="email"
//           value={formData.email}
//           onChange={handleInputChange}
//           placeholder="E-mail"
//         />

//         <input className={styles.um}
//           type="text"
//           name="senha"
//           value={formData.senha}
//           onChange={handleInputChange}
//           placeholder="Senha"
//         />

//         <input className={styles.um}
//           type="number"
//           name="cpf"
//           value={formData.cpf}
//           onChange={handleInputChange}
//           placeholder="CPF"
//         />
//         <div className={styles.botoes}>
//           <button className={styles.botao}>
//             <Link href="/Paginas/Usuarios">Voltar</Link>
//           </button>
//           <button className={styles.botao} onClick={handleSave}>
//             Salvar
//           </button>
//           <button className={styles.botao} onClick={handleCancel}>
//             Cancelar
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

export default Input;
