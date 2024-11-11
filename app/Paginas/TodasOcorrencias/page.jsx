"use client"

import styles from "./TodasOcorrencias.module.css"
import { IoSearch } from "react-icons/io5";
import BotaoVoltar from "@/Components/BotaoVoltar";
import { useEffect, useState } from "react";
import Ocorrencia from "@/Components/Ocorrencia";

export default function TodasOcor() {
  const [data, setData] = useState([]);

  const getOcorrencias = async () => {
    try {
      debugger
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setError(null);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  useEffect(() => {
    getOcorrencias();
  }, []);

  return (
    <main className={styles.main}>

      <div className={styles.divtitulo}>
        <h1 className={styles.titulo} > Todas as ocorrências </h1>
        <BotaoVoltar link="/Paginas/PaginaInicial" />
      </div>
      <br></br>
      <div className={styles.pesquisafiltro}>
        <div className={styles.pesquisa}>
          <input type="text" />
          <button> <IoSearch /> </button>
        </div>


        <div className={styles.filtro}>
          <button className={styles.butfiltro}> RM </button>
          <button className={styles.butfiltro}> NOME </button>
          <button className={styles.butfiltro}> TEMA </button>
          <button className={styles.butfiltro}> DATA </button>
          <button className={styles.butfiltro}> STATUS </button>
          <button className={styles.butfiltro}> URGÊNCIA </button>
        </div>

      </div>
      <div className={styles.boxTodasOcor}>
        {data.length > 0 ?(
          data.map((item) => (
            <Ocorrencia nome={item.nome} tema={item.tema} data={item.data} status={item.status} urgencia={item.urgencia} />
          ))
        ) : (<p>Nenhuma ocorrência encontrada</p>)} 

      </div>
    </main>
  )
}