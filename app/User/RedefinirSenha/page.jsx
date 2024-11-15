"use client";

import { useState } from "react";
import styles from "@/Components/Login.module.css";
import { PiLockKeyFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";

const RedefinirSenha = () => {
  const [password, setPassword] = useState("");
  const [confirmaPassword, setConfirmaPassword] = useState("");
  const [isVisible1, setIsVisible1] = useState(false);
  const [isVisible2, setIsVisible2] = useState(false);
  const [error, setError] = useState("");

  const DeixarVisivel1 = () => {
    setIsVisible1(!isVisible1);
  };

  const DeixarVisivel2 = () => {
    setIsVisible2(!isVisible2);
  };

  const isTyping1 = password.length > 0;
  const isTyping2 = confirmaPassword.length > 0;

  const ValidaSenha = () => {
    if (password !== confirmaPassword) {
      setError("As senhas não coincidem.");
    } else {
      setError("");
    }
  };

  return (
    <main className={styles.main}>
      <div className={styles.box}>
        <div className={styles.titulobox}>
          <h1 className={styles.texto1}> Coordena </h1>
          <h1 className={styles.texto2}> SESI </h1>
        </div>

        <div className={styles.divPesquisa}>
          <div className={styles.pesquisa}>
            <div className={styles.cadeado}>
              <PiLockKeyFill />
            </div>

            <input
              type={isVisible1 ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Nova senha"
            />
            {isTyping1 && (
              <button className={styles.olho} onClick={DeixarVisivel1}>
                {isVisible1 ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            )}
          </div>

          <div className={styles.pesquisa}>
            <div className={styles.cadeado}>
              <PiLockKeyFill />
            </div>
            <input
              type={isVisible2 ? "text" : "password"}
              value={confirmaPassword}
              onChange={(e) => setConfirmaPassword(e.target.value)}
              placeholder="Confirmar senha"
            />
            {isTyping2 && (
              <button className={styles.olho} onClick={DeixarVisivel2}>
                {isVisible2 ? <FaRegEye /> : <FaRegEyeSlash />}
              </button>
            )}
          </div>
        </div>

        {error && <p className={styles.error}>{error}</p>}

        <button className={styles.botao} onClick={ValidaSenha}>
          {" "}
          Salvar{" "}
        </button>

        <a
          className={styles.referencia}
          href="https://pt.vecteezy.com/vetor-gratis/vermelho"
        >
          Vermelho Vetores por Vecteezy
        </a>
      </div>
    </main>
  );
};

export default RedefinirSenha;
