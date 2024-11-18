"use client";

import styles from "@/Components/InicialComponentes.module.css";
import React from "react";
import Ocorrencia from "@/Components/Ocorrencias";
import BotaoInicial from "@/Components/BotaoInicial";
import { useEffect, useState } from "react";

const API_URL = "http://localhost:3001";

const inicial = () => {
  const [data, setData] = useState([]);

  const getOcorrencias = async () => {
    try {
      debugger;
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  useEffect(() => {
    getOcorrencias();
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

        <div  onClick={`Paginas/VisualizarOcorrencia`} className={styles.boxTodasOcor}>
          {data.length > 0 ? (
            data.map((item) => (
              <>
                <Ocorrencia
                  nome={item.Criador}
                  turma={item.Turma}
                  tema={item.Tema}
                  data={item.Data}
                  status={item.Status}
                  urgencia={item.Urgencia}
                  cor={item.Cor}
                />
              </>
            ))
          ) : (
            <p>Nenhuma ocorrência encontrada</p>
          )}
        </div>
        <h2 className={styles.h4}>Andamento:</h2>

        <div className={styles.boxTodasOcor}>
          {data.length > 0 ? (
            data.map((item) => (
              <>
                <Ocorrencia
                  nome={item.Criador}
                  turma={item.Turma}
                  tema={item.Tema}
                  data={item.Data}
                  status={item.Status}
                  urgencia={item.Urgencia}
                  cor={item.Cor}
                />
              </>
            ))
          ) : (
            <p>Nenhuma ocorrência encontrada</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default inicial;
