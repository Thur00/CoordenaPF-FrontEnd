
"use client";

import { useState } from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "@/Components/AddUsuario.module.css";
import Link from "next/link";

const Usuarios = [
    { cargo: "", nome: "", email: "", senha: "", cpf: ""},
  ];
  
  const Input = () => {
    const [data, setData] = useState(Usuarios);
    const [focargoData, setFocargoData] = useState({ cargo: "", nome: "", email: "", ano: "", senha: "", cpf: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [showFocargo, setShowFocargo] = useState(false);
  
    const handleInputChange = (e) => {
      const { name, value } = e.target;
      setFocargoData({ ...focargoData, [name]: value });
    };
  
    const handleAdd = () => {
      setShowFocargo(true);
      setIsEditing(false);
      setFocargoData({ cargo: "", nome: "", email: "", ano: "", senha: "", cpf: ""});
    };
  
    const handleEdit = (item) => {
      setShowFocargo(true);
      setIsEditing(true);
      setFocargoData(item);
    };
  
    const handleSave = () => {
      if (isEditing) {
        setData(data.map((item) => (item.cargo === focargoData.cargo ? focargoData : item)));
      } else {
        setData([...data, { ...focargoData, cargo: data.length + 1 }]);
      }
      setShowFocargo(false);
    };
  
    const handleCancel = () => {
      setShowFocargo(false);
      setFocargoData({ cargo: "", nome: "", email: "", senha: "", cpf: ""});
    };
  
    return (
      <div>
          <Header></Header>
          <br></br>
          <div className={styles.div1}>
          <h1 className={styles.h1}>Adicionar Usuário</h1>
          <button className={styles.voltar}>
          <Link href="/Paginas/usuarios">Voltar</Link>
          </button>
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
            <button className={styles.cancelarbutton} onClick={handleSave}>Salvar</button>
            <button className={styles.cancelarbutton} onClick={handleCancel}>Cancelar</button>
          
            </div>
  
  
          </div>
        
        <br></br>
        <br></br>
       
        <Footer></Footer>
      </div>
      
  
    );
  };
  
  export default Input;


