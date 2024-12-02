"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "@/Components/Login.module.css";
const API_URL = "http://localhost:3001"; // Adicione a URL da API

const SignIn = () => {
  const [msgError, setMsgError] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);
  const [formData, setFormData] = useState({
    usuario: "",
    senha: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const entrar = (resposta) => {
    // Verificar se os campos estão preenchidos
    if (!formData.usuario || !formData.senha) {
      setMsgError("Por favor, preencha todos os campos.");
      return;
    }

    // Comparar as credenciais inseridas com as fixas
    if (resposta === "VALIDO") {
      localStorage.setItem(
        "userLogado",
        JSON.stringify({ userCad: formData.usuario, senhaCad: formData.senha })
      );
      window.location.href = "../Paginas/PaginaInicial"; // Redirecionar após login
    } else {
      setMsgError("Usuário ou senha incorretos");
     
    }
  };

  const login = async () => {
    if (!usuario || !senha) {
      setMsgError("Por favor, preencha todos os campos.");
      return;
    }

   try{
      // Faz uma requisição PUT para a API de temas para atualizar o item
      const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf: formData.usuario,
          senha: formData.senha,
        }), // Ajuste aqui o objeto para corresponder ao que a API espera
      });

      const data = await response.json()

      entrar(data.message)

    } catch (error) {
      console.error("Erro ao realizar login:", error);
        setMsgError("Usuário ou senha incorretos");
      
      }
    }

  return (
    <main className={style.main}>
      <div className={style.box}>
        <div className={style.titulobox}>
          <h1 className={style.texto1}>Coordena</h1>
          <h1 className={style.texto2}>SESI</h1>
        </div>
        {msgError && (
          <div className={style.erro} id="msgError" style={{ color: "red" }}>
            {msgError}
          </div>
        )}{" "}
        <div className={style.divPesquisa}>
          <div>
            <div className={style.pesquisa}>
              <input
                type="text"
                id="usuario"
                name="usuario"
                value={formData.usuario}
                onChange={handleInputChange}
                required
                placeholder="Login"
              />
            </div>
          </div>
          <div className={style.pesquisa}>
            <input
              type={senhaVisivel ? "text" : "password"}
              id="senha"
              name="senha"
              value={formData.senha}
              onChange={handleInputChange}
              required
              placeholder="Senha"
            />
            <i
              className={`fa fa-eye${senhaVisivel ? "" : "-slash"}`}
              aria-hidden="true"
              onClick={() => setSenhaVisivel(!senhaVisivel)} // Alternar visibilidade da senha
              style={{ cursor: "pointer" }}
            ></i>
          </div>

          <button className={style.botao} onClick={login}>
            Entrar
          </button>
        </div>
        <hr />
      </div>
    </main>
  );
}

export default SignIn;
