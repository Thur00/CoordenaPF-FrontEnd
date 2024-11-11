"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/AddUsuario.module.css"; // Importando o CSS
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Input = () => {
  const [formData, setFormData] = useState({
    login_id: "",
    cargo: "",
    nome: "",
    email: "",
    ano: "",
    senha: "",
    cpf: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async () => {
    try {
      // Faz uma requisição POST para a API de temas
      const response = await fetch(`${API_URL}/usuarios`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Envia o corpo da requisição em formato JSON
        body: JSON.stringify({ id: formData.login_id, cargo: formData.cargo, nome: formData.nome, email: formData.email, senha: formData.senha, cpf: formData.cpf }),
      });

      // Limpa os campos de entrada
      setFormData({ login_id: "", cargo: "", nome: "", email: "", senha: "", cpf: "" });

    } catch (error) {
      // Loga erros no console
      console.error("Erro ao adicionar usuário:", error);
    }
  };

  const handleCancel = () => {
    setFormData({ login_id: "", cargo: "", nome: "", email: "", senha: "", cpf: "" });
  };

  return (
    <div>
      <br></br>
      <div className={styles.body}>
        <h1 className={styles.tit}>Adicionar Usuário</h1>
      </div>
      <div className={styles.input}>

        <input className={styles.um}
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleInputChange}
          placeholder="Nome"
        />

        <input className={styles.um}
          type="text"
          name="cargo"
          value={formData.cargo}
          onChange={handleInputChange}
          placeholder="Cargo"
        />

        <input className={styles.um}
          type="text"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="E-mail"
        />

        <input className={styles.um}
          type="text"
          name="senha"
          value={formData.senha}
          onChange={handleInputChange}
          placeholder="Senha"
        />

        <input className={styles.um}
          type="number"
          name="cpf"
          value={formData.cpf}
          onChange={handleInputChange}
          placeholder="CPF"
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
    </div>
  );
};

export default Input;