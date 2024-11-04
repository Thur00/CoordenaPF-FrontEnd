"use client"

import styles from "@/Components/UsuariosComponentes.module.css";
import React from "react";
import Usuario from "@/Components/UsuariosSamaraComponentes";
import UsuarioAle from "@/Components/UsuarioAlessandraComponents";
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
      console.error("Erro na busca usuario", error);
    }
  };

  useEffect(() => {
    getUsuarios();
  }, []);

  return (
    <div >

      <br></br>
      <div className={styles.bt}>

        <BotaoAdicionarUsuario></BotaoAdicionarUsuario>
        <BotaoVoltar link="/Paginas/MeuPerfilCleide" />

      </div>

      <div className={styles.caixas}>

        <Usuario></Usuario>

        <UsuarioAle></UsuarioAle>

      </div>
    </div>

  );
}
