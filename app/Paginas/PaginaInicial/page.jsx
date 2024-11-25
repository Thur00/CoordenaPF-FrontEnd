"use client";

import styles from "@/Components/InicialComponentes.module.css";
import React from "react";
import Ocorrencia from "@/Components/Ocorrencias";
import BotaoInicial from "@/Components/BotaoInicial";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const API_URL = "http://localhost:3001";

const inicial = () => {
  const [data, setData] = useState([]);
  const [sts, setSts] = useState([]);
  const router = useRouter();
  const [id, setId] = useState("");

  const getOcorrencias = async () => {
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getStatus = async () => {
    try {
      const resposta = await fetch(`${API_URL}/status`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data); // Adicione esta linha para verificar os dados
      setSts(data1);
    } catch (error) {
      console.error("Erro na busca", error);
    }
  };

  useEffect(() => {
    getOcorrencias();
    getStatus();
  }, [id]);

  return (
    <div>
      <br></br>

      <div className={styles.bt}>
        <BotaoInicial></BotaoInicial>
      </div>

      <br></br>
      <br></br>

      <div className={styles.tudo}>
        <h2 className={styles.h4}>Bem-Vindo(a)</h2>
        <h1 className={styles.titulo}>Criado recentemente:</h1>

        <div className={styles.boxTodasOcor}>
          {data.length > 0 ? (
            [...data]
              .reverse()
              .slice(0, 3)
              .map((item) => (
                <Ocorrencia
                  key={item.Ocorrencia_id}
                  id={item.Ocorrencia_id}
                  nome={item.Criador}
                  turma={item.Turma}
                  tema={item.Tema}
                  data={item.Data}
                  status={item.Icone}
                  urgencia={item.Urgencia}
                  cor={item.Cor}
                />
              ))
          ) : (
            <p>Nenhuma ocorrência encontrada</p>
          )}
        </div>
        <h2 className={styles.titulo}>Andamento:</h2>

        <div className={styles.boxTodasOcor}>
          {data.length > 0 ? (
            [...data]
              .filter((item) => item.Status == sts[1]?.Categoria)
              .map((item) => (
                <Ocorrencia
                  key={item.Ocorrencia_id}
                  id={item.Ocorrencia_id}
                  nome={item.Criador}
                  turma={item.Turma}
                  tema={item.Tema}
                  data={item.Data}
                  status={item.Icone}
                  urgencia={item.Urgencia}
                  cor={item.Cor}
                />
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
