"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import style from "@/Components/Login.module.css";
import Acesso from "@/utils/Credenciais";
const SignIn = () => {
  const [usuario, setUsuario] = useState("");
  const [senha, setSenha] = useState("");
  const [msgError, setMsgError] = useState("");
  const [senhaVisivel, setSenhaVisivel] = useState(false);

  const entrar = () => {
    // Definindo credenciais fixas
    const { usuarioFixo, senhaFixa } = Acesso();

    // Verificar se os campos estão preenchidos
    if (!usuario || !senha) {
      setMsgError("Por favor, preencha todos os campos.");
      return;
    }

    // Comparar as credenciais inseridas com as fixas
    if (usuario === usuarioFixo && senha === senhaFixa) {
      const token =
        Math.random().toString(16).substr(2) +
        Math.random().toString(16).substr(2) +
        "Amamos_DS_;-)";
      localStorage.setItem("token", token);
      localStorage.setItem(
        "userLogado",
        JSON.stringify({ userCad: usuarioFixo, senhaCad: senhaFixa })
      );
      window.location.href = "../Paginas/PaginaInicial"; // Redirecionar após login
    } else {
      setMsgError("Usuário ou senha incorretos");
      setUsuario("");
      setSenha("");
    }
  };
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
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                required
                placeholder="Login"
              />
            </div>
          </div>
          <div className={style.pesquisa}>
            <input
              type={senhaVisivel ? "text" : "password"}
              id="senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
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

          <button className={style.botao} onClick={entrar}>
            Entrar
          </button>
        </div>
        <hr />
      </div>
    </main>
  );
};

export default SignIn;
