"use client";

import styles from "./TodasOcorrencias.module.css";
import { IoSearch } from "react-icons/io5";
import BotaoVoltar from "@/Components/BotaoVoltar";
import { useEffect, useState } from "react";
import Ocorrencia from "@/Components/Ocorrencias";

const API_URL = "http://localhost:3001";

export default function TodasOcor() {
  const [data, setData] = useState([]);
  const [id, setId] = useState("");
  const [RM, setRM] = useState("");
  const [nome, setNome] = useState("");
  const [tema, setTema] = useState("");
  const [data_inicial, setData_inicial] = useState("");
  const [data_final, setData_final] = useState("");
  const [status, setStatus] = useState("");
  const [urgencia, setUrgencia] = useState("");
  const [error, setError] = useState(null);

  const handleClick = () => {
    router.push(`/Paginas/VisualizarOcorrencia?id=${id}`);
  };

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

  const getOcorrenciasByRM = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/rm/${RM}`);
      const data1 = await resposta.json();
      console.log("Dados recebidosX:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getOcorrenciasByNome = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/nome/${nome}`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getOcorrenciasByTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/nome/${tema}`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getOcorrenciasByData = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/di/:data_inicial/df/:data_final`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getOcorrenciasByStatus = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/status/:status`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  const getOcorrenciasByUrgencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/pesquisa/urgencia/:urgencia`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  function EscondePesquisa(param) {
    switch (param) {
      case "rm":
        setRM(true);
        setNome(false);
        setTema(false);
        setData_inicial(false);
        setData_final (false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "nome":
        setRM(false);
        setNome(true);
        setTema(false);
        setData_inicial(false);
        setData_final (false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "tema":
        setRM(false);
        setNome(false);
        setTema(true);
        setData_inicial(false);
        setData_final (false);
        setStatus(false);
        setUrgencia(false);
        break;
      case "date":
        setRM(false);
        setNome(false);
        setTema(false);
        setData_inicial(true);
        setData_final (true);
        setStatus(false);
        setUrgencia(false);
        break;
      case "status":
        setRM(false);
        setNome(false);
        setTema(false);
        setData_inicial(false);
        setData_final (false);
        setStatus(true);
        setUrgencia(false);
        break;
      case "urgencia":
        setRM(false);
        setNome(false);
        setTema(false);
        setData_inicial(false);
        setData_final (false);
        setStatus(false);
        setUrgencia(true);
        break;
    }
  }

  return (
    <main className={styles.main}>
      <div  onClick={handleClick} className={styles.divtitulo}>
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
            <input
              type="number"
              placeholder="Busque por RM"
              value={RM}
              onChange={event => setRM(event.target.value)}
            />
            <button onClick={getOcorrenciasByRM}>
              <IoSearch />
            </button>
          </div>
        )}

        {nome && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              placeholder="Busque por nome de aluno"
              value={nome}
              onChange={event => setNome(event.target.value)}
            />
            <button onClick={getOcorrenciasByNome}>
              <IoSearch />
            </button>
          </div>
        )}

        {tema && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              placeholder="Busque por tema"
              value={tema}
              onChange={event => setTema(event.target.value)}
            />
            <button onClick={getOcorrenciasByTema}>
              <IoSearch />
            </button>
          </div>
        )}

        {data_inicial && (
          <div className={styles.pesquisadata}>
            <p className={styles.textodata}> Início: </p>
            <input 
            type="date" 
            value={data_inicial}
            onChange={event => setData_inicial(event.target.value)}
            />
            <button onClick={getOcorrenciasByData}>
              <IoSearch />
            </button>
          </div>
        )}

        <br></br>

        {data_final && (
          <div className={styles.pesquisadata}>
            <p className={styles.textodata}> Conclusão: </p>
            <input 
            type="date" 
            value={data_final}
            onChange={event => setData_final(event.target.value)}
            />
            <button onClick={getOcorrenciasByData}>
              <IoSearch />
            </button>
          </div>
        )}

        {status && (
          <div className={styles.pesquisa}>
            <input 
            type="text" 
            placeholder="Busque por status" 
            value={status}
            onChange={event => setStatus(event.target.value)}
            />
            <button onClick={getOcorrenciasByStatus}>
              <IoSearch />
            </button>
          </div>
        )}

        {urgencia && (
          <div className={styles.pesquisa}>
            <input 
            type="text" 
            placeholder="Busque por urgência" 
            value={urgencia}
            onChange={event => setUrgencia(event.target.value)}
            />
            <button onClick={getOcorrenciasByUrgencia}>
              <IoSearch />
            </button>
          </div>
        )}

      </div>
      <div className={styles.boxTodasOcor}>
        {data.length > 0 ? (
          data.map((item) => (
            <Ocorrencia
              key={item.Ocorrencia_id}
              id={item.Ocorrencia_id} // Adicionando o ID para navegação
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
