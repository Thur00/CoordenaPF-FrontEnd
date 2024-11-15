"use client";

import styles from "./TodasOcorrencias.module.css";
import { IoSearch } from "react-icons/io5";
import BotaoVoltar from "@/Components/BotaoVoltar";
import { useEffect, useState } from "react";
import Ocorrencia from "@/Components/Ocorrencias";

const API_URL = "http://localhost:3001";

export default function TodasOcor() {
  const [data, setData] = useState([]);
  const [RM, setRM] = useState(false);
  const [nome, setNome] = useState(false);
  const [tema, setTema] = useState(false);
  const [date, setDate] = useState(false);
  const [status, setStatus] = useState(false);
  const [urgencia, setUrgencia] = useState(false);

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

  useEffect(() => {
    getOcorrencias();
  }, []);

  function EscondePesquisa(param) {
    switch (param) {
      case "rm":
        setRM(true);
        setNome(false);
        setTema(false);
        setDate(false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "nome":
        setRM(false);
        setNome(true);
        setTema(false);
        setDate(false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "tema":
        setRM(false);
        setNome(false);
        setTema(true);
        setDate(false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "date":
        setRM(false);
        setNome(false);
        setTema(false);
        setDate(true);
        setStatus(false);
        setUrgencia(false);
        break;
      case "status":
        setRM(false);
        setNome(false);
        setTema(false);
        setDate(false);
        setStatus(true);
        setUrgencia(false);
        break;
      case "urgencia":
        setRM(false);
        setNome(false);
        setTema(false);
        setDate(false);
        setStatus(false);
        setUrgencia(true);
        break;
    }
  }

  return (
    <main className={styles.main}>
      <div className={styles.divtitulo}>
        <h1 className={styles.titulo}> Todas as ocorrências </h1>
        <BotaoVoltar link="/Paginas/PaginaInicial" />
      </div>

      <br></br>

      <div className={styles.pesquisafiltro}>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("rm")}
        >
          RM
        </button>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("nome")}
        >
          NOME
        </button>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("tema")}
        >
          TEMA
        </button>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("date")}
        >
          DATA
        </button>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("status")}
        >
          STATUS
        </button>
        <button
          className={styles.butfiltro}
          onClick={() => EscondePesquisa("urgencia")}
        >
          URGÊNCIA
        </button>

        {RM && (
          <div className={styles.pesquisa}>
            <input type="number" placeholder="Busque por RM" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        {nome && (
          <div className={styles.pesquisa}>
            <input type="text" placeholder="Busque por nome de aluno" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        {tema && (
          <div className={styles.pesquisa}>
            <input type="text" placeholder="Busque por tema" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        {date && (
          <div className={styles.pesquisadata}>
            <p className={styles.textodata}> Início: </p>
            <input type="date" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        <br></br>

        {date && (
          <div className={styles.pesquisadata}>
            <p className={styles.textodata}> Concusão: </p>
            <input type="date" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        {status && (
          <div className={styles.pesquisa}>
            <input type="text" placeholder="Busque por status" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}

        {urgencia && (
          <div className={styles.pesquisa}>
            <input type="text" placeholder="Busque por urgência" />
            <button>
              <IoSearch />
            </button>
          </div>
        )}
      </div>
      <div className={styles.boxTodasOcor}>
        {data.length > 0 ? (
          data.map((item) => (
            <Ocorrencia
              nome={item.Criador}
              tema={item.Tema}
              data={item.Data}
              status={item.Status}
              urgencia={item.Urgencia}
              cor={item.Cor}
            />
          ))
        ) : (
          <p>Nenhuma ocorrência encontrada</p>
        )}
      </div>
    </main>
  );
}
