"use client";

import styles from "@/Components/UsuariosComponentes.module.css";
import React from "react";
import Usuario from "@/Components/UsuariosComponentes";
import BotaoAdicionarUsuario from "@/Components/BotaoAdicionarUsuario";
import { useEffect, useState } from "react";
import BotaoVoltar from "@/Components/BotaoVoltar";

const API_URL = "http://localhost:3001";

export default function Usu() {
  const [data, setData] = useState([]);

  const getUsuarios = async () => {
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
    getUsuarios();
  }, []);

  return (
    <div>
      <br></br>

      <div className={styles.bt}>
        <h1 className={styles.h1}>Usuário</h1>
        <div className={styles.buts}>
          <BotaoAdicionarUsuario></BotaoAdicionarUsuario>
          <BotaoVoltar link="/Paginas/MeuPerfilCleide" />
        </div>
      </div>

      {data.length > 0 ? (
        data.map((item) => (
          <Usuario
            cargo={item.cargo}
            nome={item.nome}
            email={item.email}
            senha={item.senha}
            cpf={item.cpf}
          />
        ))
      ) : (
        <p className={styles.p}>Nenhum usuário encontrado</p>
      )}
    </div>
  );
}
