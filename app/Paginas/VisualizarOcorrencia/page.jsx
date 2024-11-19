"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/VisualizarOcorrencia.module.css";
import SegundoBotaoVisualizar from "@/Components/SegundoBotaoVisualizar";


const API_URL = "http://localhost:3001"; // Adicione a URL da API

const VisualizarOcorrencia = () => {
  const [data, setData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [ocorrencias, setOcorrencias] = useState([]); // Estado para ocorrências
  const [usuarios, setUsuarios] = useState([]); // Estado para usuários

  const getOcorrencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data = await resposta.json();
      console.log("Ocorrências recebidas:", data);
      setOcorrencias(data);
    } catch (error) {
      console.error("Erro ao buscar ocorrências:", error);
    }
  };

  const getUsuarios = async () => {
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data = await resposta.json();
      console.log("Usuários recebidos:", data);
      setUsuarios(data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
    }
  };
  useEffect(() => {
    getOcorrencia();
    getUsuarios();
  }, []);



  const formattedDate = new Date(data[0]?.Data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = new Date(data[0]?.Data).toLocaleTimeString("pt-BR", {
    hour: "2-digit",
    minute: "2-digit",
  });


  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };


  const handleClickOutside = (event) => {
    const modal = document.getElementById("myModal");
    if (modal && event.target === modal) {
      closeModal();
    }
  };

  function enviarNotificacao() {
    closeModal()
  }

  // const enviarNotificacao = async () => {
  //   if (!selectedUser) {
  //     alert("Por favor, selecione um usuário para notificar.");
  //     return;
  //   }

  //   try {
  //     const resposta = await fetch(`${API_URL}/notificacoes`, {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify({
  //         userId: selectedUser.id, // ID do usuário selecionado
  //         ocorrenciaId: ocorrencias[0]?.id, // ID da ocorrência (ajuste conforme necessário)
  //         mensagem: `Você foi solicitado para a ocorrência: ${ocorrencias[0]?.Tema}`,
  //       }),
  //     });
  //  if (resposta.ok) {
  //       alert("Notificação enviada com sucesso!");
  //       closeModal();
  //     } else {
  //       alert("Erro ao enviar notificação.");
  //     }
  //   } catch (error) {
  //     console.error("Erro ao enviar notificação:", error);
  //   }
  // };


  return (
    <div>
      <div className={styles.tudo}>
        <h1>Ocorrência</h1>
        <p className={styles.data}>
          Data:
          {data.length > 0 ? formattedDate : <span>Data não encontrada</span>}
        </p>
        <p className={styles.urgencia1}>
          {data.length > 0 ? (
            data[0]?.Urgencia
          ) : (
            <span>Urgencia não encontrada</span>
          )}
        </p>
      </div>

      <div className={styles.botoes}>
        <button className={styles.b1}>Mudar Status</button>
        <button onClick={openModal} className={styles.b1}>Solicitar</button>
      </div>

      <form className={styles.form}>
        <div className={styles.datatime}>
          <div className={styles.um}>
            <label>Data:</label>
            {data.length > 0 ? (
              <input
                className={styles.input4}
                type="text"
                name="date"
                value={formattedDate}
                disabled
              />
            ) : (
              <input
                className={styles.input4}
                type="text"
                name="date"
                value={"Data não encontrada"}
                disabled
              />
            )}
          </div>

          <div>
            <label>Horário: </label>
            {data.length > 0 ? (
              <input
                className={styles.input}
                type="text"
                name="hora"
                value={formattedTime}
                disabled
              />
            ) : (
              <input
                className={styles.input}
                type="text"
                name="hora"
                value={"Hora não encontrado"}
                disabled
              />
            )}
          </div>
        </div>

        <div className={styles.init}>
          <div className={styles.dois}>
            <label for="iniciativa">Iniciativa:</label>
            {data.length > 0 ? (
              <input
                className={styles.input2}
                type="text"
                name="iniciativa"
                value={data[0]?.Iniciativa}
                disabled
              />
            ) : (
              <input
                className={styles.input2}
                type="text"
                name="iniciativa"
                value={"Iniciativa não encontrada"}
                disabled
              />
            )}
          </div>

          <div>
            <label for="aspecto">Aspecto:</label>
            {data.length > 0 ? (
              <input
                className={styles.input7}
                id="aspecto"
                name="aspecto"
                value={data[0]?.Aspecto}
                disabled
              />
            ) : (
              <input
                className={styles.input7}
                id="aspecto"
                name="aspecto"
                value={"Aspecto não encontrado"}
                disabled
              />
            )}
          </div>
        </div>

        <div className={styles.tema}>
          <div className={styles.tres}>
            <label for="tema">Tema:</label>
            {data.length > 0 ? (
              <input
                className={styles.input8}
                name="tema"
                id="tema"
                value={data[0]?.Tema}
                disabled
              />
            ) : (
              <input
                className={styles.input8}
                name="tema"
                id="tema"
                value={"Tema não encontrado"}
                disabled
              />
            )}
          </div>

          <div>
            <label for="urgencia">Urgência:</label>
            {data.length > 0 ? (
              <input
                className={styles.input9}
                ame="urgencia"
                id="urgencia"
                value={data[0]?.Urgencia}
                disabled
              />
            ) : (
              <input
                className={styles.input9}
                ame="urgencia"
                id="urgencia"
                value={"Urgência não encontrada"}
                disabled
              />
            )}
          </div>
        </div>

        <div className={styles.aluno}>
          <div className={styles.quat}>
            <label for="aluno">Estudante(s):</label>
            {data.length > 0 ? (
              <input
                className={styles.input10}
                id="aluno"
                name="aluno"
                value={data[0]?.Aluno}
                disabled
              />
            ) : (
              <input
                className={styles.input10}
                id="aluno"
                name="aluno"
                value={"Aluno(a) não encontrada"}
                disabled
              />
            )}
          </div>

          <div className={styles.cinc}>
            <label for="turma">Turma:</label>
            {data.length > 0 ? (
              <input
                className={styles.input11}
                id="turma"
                name="turma"
                value={data[0]?.Turma}
                disabled
              />
            ) : (
              <input
                className={styles.input11}
                id="turma"
                name="turma"
                value={"Turma não encontrada"}
                disabled
              />
            )}
          </div>

          <div>
            <label for="rm">RM:</label>
            {data.length > 0 ? (
              <input
                className={styles.input11}
                id="rm"
                name="rm"
                value={data[0]?.RM}
                disabled
              />
            ) : (
              <input
                className={styles.input11}
                id="rm"
                name="rm"
                value={"RM não encontrado"}
                disabled
              />
            )}
          </div>
        </div>

        <div className={styles.resp}>
          <div className={styles.seis}>
            <label for="resp">Responsável: </label>
            {data.length > 0 ? (
              <input
                className={styles.input5}
                id="turma"
                name="turma"
                value={data[0]?.Responsavel}
                disabled
              />
            ) : (
              <input
                className={styles.input5}
                id="turma"
                name="turma"
                value={"Responsavel não encontrado(a)"}
                disabled
              />
            )}
          </div>

          <div className={styles.seis}>
            <label for="resp">Especialista: </label>
            {data.length > 0 ? (
              <input
                className={styles.input5}
                id="esp"
                name="esp"
                value={data[0]?.Especialista}
                disabled
              />
            ) : (
              <input
                className={styles.input5}
                id="esp"
                name="esp"
                value={"Especialista não encontrado(a)"}
                disabled
              />
            )}
          </div>
        </div>
        <div className={styles.mes}>
          {data.length > 0 ? (
            <textarea
              id="message"
              name="message"
              value={data[0]?.Descricao}
              rows="10"
              cols="110"
              disabled
            ></textarea>
          ) : (
            <textarea
              id="message"
              name="message"
              value={"Descrição não encontrada"}
              rows="10"
              cols="110"
              disabled
            ></textarea>
          )}
        </div>

        <div className={styles.enc}>
          <label for="enc">Encaminhamento:</label>
          {data.length > 0 ? (
            <input
              className={styles.input3}
              id="esp"
              name="esp"
              value={data[0]?.Encaminhamento}
              disabled
            />
          ) : (
            <input
              className={styles.input3}
              id="esp"
              name="esp"
              value={"Encaminhamento não encontrado"}
              disabled
            />
          )}
        </div>
      </form>

      <div className={styles.botoes2}>
        <SegundoBotaoVisualizar></SegundoBotaoVisualizar>
      </div>
      <br></br>

      {isOpen && (
        <div id="myModal" className={styles.modal} onClick={handleClickOutside}>
          <div className={styles.modalContent}>
            <div className={styles.headBox}>
              <div className={styles.titulo}><h2>Solicitar participação nesta ocorrência</h2></div>
              <span className={styles.close} onClick={closeModal}>&times;</span>
            </div>

            <div>
              <h1 className={styles.subtitulo}>Selecione o usuário:</h1>
            </div>

            <div className={styles.email}>
              {usuarios.length > 0 ? (
                usuarios.map((user, index) => (
                  <div key={index} >
                    <p>{user.Nome} </p>
                    <p> {user.Email}</p>
                  </div>
                ))
              ) : (
                <p>Nenhum usuário encontrado</p>
              )}
            </div>

          </div>
          <button className={styles.confirmar} onClick={closeModal}>Confirmar</button>
        </div>

      )}

    </div>
  );
};

export default VisualizarOcorrencia;