"use client"

import styles from "@/Components/InicialComponentes.module.css"
import React from "react";
import InicialOcorrencia from "@/Components/InicialOcorrencias";
import AndamentoOcorrencias from "@/Components/AndamentoOcorrencias";
import BotaoInicial from "@/Components/BotaoInicial";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001";



const inicial = () => {

    const [data, setData] = useState([]);
  
  
    const getInicial = async () => {
      try {
        const resposta = await fetch(`${API_URL}/alunos`);
        const data1 = await resposta.json();
        console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
        setData(data1);
        setError(null);
      } catch (error) {
        console.error("Erro na busca alunos", error);
      }
    };
  
    useEffect(() => {
      getInicial();
    }, []);
  

  
    return (
        <div>
           

            <br></br>

            <div className={styles.bt}>

   <BotaoInicial></BotaoInicial>
          
</div>

<br></br>
<br></br>

<div className={styles.tudo}>
<h2 className={styles.h4}>Notificações</h2>
<h1 className={styles.titulo}>Você foi mencionado recentemente:</h1>

<div className={styles.boxTodasOcor}>
<InicialOcorrencia></InicialOcorrencia>
<h2 className={styles.h4}>Andamento:</h2>
<AndamentoOcorrencias></AndamentoOcorrencias>

</div>
</div>





           
        </div>



    )
}

export default inicial;    