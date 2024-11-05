"use client";

import { useState } from "react";
import styles from "@/Components/AddUsuario.module.css";
import Link from "next/link";

const Input = () => {
  const [data, setData] = useState([]);
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
      <div className={styles.body}>
        <h1 className={styles.tit}>Adicionar Usuário</h1>
      </div>
      

      <div className={styles.input}>
        <h3>{isEditing ? "" : ""}</h3>
        

        <input className={styles.um}
          type="text"
          name="cargo"
          value={focargoData.cargo}
          onChange={handleInputChange}
          placeholder="Cargo:"
        />
     

        <input className={styles.um}
          type="text"
          name="nome"
          value={focargoData.nome}
          onChange={handleInputChange}
          placeholder="Nome:"
        />
       

        <input className={styles.um}
          type="text"
          name="email"
          value={focargoData.email}
          onChange={handleInputChange}
          placeholder="E-mail:"
        />
       

        <input className={styles.um}
          type="text"
          name="senha"
          value={focargoData.senha}
          onChange={handleInputChange}
          placeholder="Senha:"
        />
       
        <input className={styles.um}
          type="number"
          name="cpf"
          value={focargoData.cpf}
          onChange={handleInputChange}
          placeholder="CPF:"
        />
        <div className={styles.botoes}>
        <button className={styles.botao}>
          <Link href="/Paginas/Usuarios">Voltar</Link>
        </button>
          <button className={styles.botao} onClick={handleAdd}>
            Salvar
          </button>
          <button className={styles.botao} onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>

     

    </div>
  );
};

export default Input;