"use client";

import jwt from 'jsonwebtoken';
import { useState, useEffect } from "react";
import style from "../Components/Login.module.css";
const API_URL = "http://localhost:3001"; // Adicione a URL da API

const API_SECRET = 'FazoELE'; 

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

  const login = async () => {
    if (!formData.usuario || !formData.senha) {
      setMsgError("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await fetch(`${API_URL}/usuarios/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          cpf: formData.usuario,
          senha: formData.senha,
        }),
      });

      const data = await response.json();

      console.log(data.usuario);
      console.log(data.status);


      if (data.status == "VALIDO") {
        // Criar o token
        // const token = jwt.sign({ id: user.id, email: user.email }, API_SECRET);
        
        // Armazenar o token
        // localStorage.setItem("token", token);

        // Redirecionar para a página inicial

        localStorage.setItem("userLogado", JSON.stringify(data.usuario) );


        window.location.href = "../Paginas/PaginaInicial"; // Redirecionar após login
      } else {
        setMsgError("Usuário ou senha incorretos");
      }
    } catch (error) {
      console.error("Erro ao realizar login:", error);
      setMsgError("Usuário ou senha incorretos");
    }
  };

  return (
    <main className={style.main}>
      <div className={style.box}>
        <div className={style.titulobox}>
          <h1 className={style.texto1}>Sistema</h1>
          <h1 className={style.texto2}>GO</h1>
        </div>
        {msgError && (
          <div className={style.erro} id="msgError">
            {msgError}
          </div>
        )}
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
};

export default SignIn;
