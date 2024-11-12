"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/VisualizarOcorrencia.module.css";
import BotaoVisualizar from "@/Components/BotaoVisuOcorrencia";
import SegundoBotaoVisualizar from "@/Components/SegundoBotaoVisualizar";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const VisualizarOcorrencia = () => {
  const [data, setData] = useState([]);

  const getOcorrencia = async () => {
    debugger
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na vizualização da ocorrência", error);
    }
  };

  useEffect(() => {
    getOcorrencia();
  }, []);

  const formattedDate = new Date(data[0]?.Data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric"
  });

    const formattedTime = new Date(data[0]?.Data).toLocaleTimeString("pt-BR", {
      hour: "2-digit",
      minute: "2-digit"
    });

  return (
    <div>
      <div className={styles.tudo}>
        <h1>Ocorrência</h1>
        <p className={styles.data}>Data:
          {data.length > 0 ? (
            formattedDate)
            : (
              <span>Data não encontrada</span>)
          }
        </p>
        <p className={styles.urgencia1}>
          {data.length > 0 ? (
            data[0]?.Urgencia
          )
            : (
              <span>Urgencia não encontrada</span>)
          }
        </p>
      </div>

      <div className={styles.botoes}>
        <BotaoVisualizar></BotaoVisualizar>
      </div>

      <form className={styles.form}>
        <div className={styles.datatime}>

          <div className={styles.um}>
            <label>Data:
            </label>
            {data.length > 0 ? (
              <input className={styles.input4} type="text" name="date" value={formattedDate} disabled />
            )
              : (
                <input className={styles.input4} type="text" name="date" value={"Data não encontrada"} disabled />)
            }
          </div>

          <div>
            <label>Horário: </label>
            {data.length > 0 ? (
              <input className={styles.input} type="text" name="hora" value={formattedTime} disabled />
            )
              : (
                <input className={styles.input} type="text" name="hora" value={"Hora não encontrado"} disabled />)
            }
          </div>
        </div>

        <div className={styles.init}>

          <div className={styles.dois}>
            <label for="iniciativa">Iniciativa:</label>
            {data.length > 0 ? (
              <input className={styles.input2} type="text" name="iniciativa" value={data[0]?.Iniciativa} disabled />
            )
              : (
                <input className={styles.input2} type="text" name="iniciativa" value={"Iniciativa não encontrada"} disabled />
              )
            }

          </div>

          <div>
            <label for="aspecto">Aspecto:</label>
            {data.length > 0 ? (
              <input className={styles.input7} id="aspecto" name="aspecto" value={data[0]?.Aspecto} disabled />
            )
              : (
                <input className={styles.input7} id="aspecto" name="aspecto" value={"Aspecto não encontrado"} disabled />
              )
            }
          </div></div>

        <div className={styles.tema}>

          <div className={styles.tres}>
            <label for="tema">Tema:</label>
            {data.length > 0 ? (
              <input className={styles.input8} name="tema" id="tema" value={data[0]?.Tema} disabled />
            )
              : (
                <input className={styles.input8} name="tema" id="tema" value={"Tema não encontrado"} disabled />
              )
            }
          </div>

          <div>
            <label for="urgencia">Urgência:</label>
            {data.length > 0 ? (
              <input className={styles.input9} ame="urgencia" id="urgencia" value={data[0]?.Urgencia} disabled />
            )
              : (
                <input className={styles.input9} ame="urgencia" id="urgencia" value={"Urgência não encontrada"} disabled />
              )
            }
          </div></div>

        <div className={styles.aluno}>

          <div className={styles.quat}>
            <label for="aluno">Estudante(s):</label>
            {data.length > 0 ? (
              <input className={styles.input10} id="aluno" name="aluno" value={data[0]?.Aluno} disabled />
            )
              : (
                <input className={styles.input10} id="aluno" name="aluno" value={"Aluno(a) não encontrada"} disabled />
              )
            }
          </div>


          <div className={styles.cinc}>
            <label for="turma">Turma:</label>
            {data.length > 0 ? (
              <input className={styles.input11} id="turma" name="turma" value={data[0]?.Turma} disabled />
            )
              : (
                <input className={styles.input11} id="turma" name="turma" value={"Turma não encontrada"} disabled />
              )
            }
          </div>


          <div>
            <label for="rm">RM:</label>
            {data.length > 0 ? (
              <input className={styles.input11} id="rm" name="rm" value={data[0]?.RM} disabled />
            )
              : (
                <input className={styles.input11} id="rm" name="rm" value={"RM não encontrado"} disabled />
              )
            }
          </div></div>


        <div className={styles.resp}>

          <div className={styles.seis}>
            <label for="resp">Responsável: </label>
            {data.length > 0 ? (
              <input className={styles.input5} id="turma" name="turma" value={data[0]?.Responsavel} disabled />
            )
              : (
                <input className={styles.input5} id="turma" name="turma" value={"Responsavel não encontrado(a)"} disabled />
              )
            }
          </div>



          <div className={styles.seis}>
            <label for="resp">Especialista: </label>
            {data.length > 0 ? (
              <input className={styles.input5} id="esp" name="esp" value={data[0]?.Especialista} disabled />
            )
              : (
                <input className={styles.input5} id="esp" name="esp" value={"Especialista não encontrado(a)"} disabled />
              )
            }
          </div></div>

        <div className={styles.mes}>
          {data.length > 0 ? (
            <textarea id="message" name="message" value={data[0]?.Descricao} rows="10" cols="110" disabled></textarea>
          )
            : (
              <textarea id="message" name="message" value={"Descrição não encontrada"} rows="10" cols="110" disabled></textarea>
            )
          }

        </div>


        <div className={styles.enc}>
          <label for="enc">Encaminhamento:</label>
          {data.length > 0 ? (
            <input className={styles.input3} id="esp" name="esp" value={data[0]?.Encaminhamento} disabled />
          )
            : (
              <input className={styles.input3} id="esp" name="esp" value={"Encaminhamento não encontrado"} disabled />
            )
          }
        </div>

      </form>

      <div className={styles.botoes2}>
        <SegundoBotaoVisualizar></SegundoBotaoVisualizar>
      </div>
      <br></br>

    </div>

  )
}

export default VisualizarOcorrencia;

