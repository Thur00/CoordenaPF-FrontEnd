"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/criaroco.module.css";
import Link from "next/link";
import BotaoVoltar from "@/Components/BotaoVoltar";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

function criaroco() {
  const [dataAsp, setDataAsp] = useState([]);
  const [dataTem, setDataTem] = useState([]);
  const [dataUrg, setDataUrg] = useState([]);
  const [dataEnc, setDataEnc] = useState([]);
  const [formData, setFormData] = useState({
    criador: "",
    dataoc: "",
    hora: "",
    iniciatica: "",
    aspecto: "",
    urgencia: "",
    tema: "",
    rm: "",
    turma: "",
    responsavel: "",
    descricao: "",
    encaminhamento: "",
    status: "",
  });

  const getAspecto = async () => {
    try {
      const resposta = await fetch(`${API_URL}/aspectos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataAsp(data1);
    } catch (error) {
      console.error("Erro na busca de aspecto", error);
    }
  };

  const getTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/temas`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataTem(data1);
    } catch (error) {
      console.error("Erro na busca de tema", error);
    }
  };

  const getUrgencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/urgencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataUrg(data1);
    } catch (error) {
      console.error("Erro na busca de urgência", error);
    }
  };

  const getEncaminhamento = async () => {
    try {
      const resposta = await fetch(`${API_URL}/encaminhamentos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataEnc(data1);
    } catch (error) {
      console.error("Erro na busca de encaminhamento", error);
    }
  };

  useEffect(() => {
    getAspecto();
    getTema();
    getUrgencia();
    getEncaminhamento();
  }, []);

  const handleSave = async () => {
    try {
      console.log("DAta2: " + formData.dataoc);
      // Faz uma requisição POST para a API de temas
      const response = await fetch(`${API_URL}/ocorrencias`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        // Envia o corpo da requisição em formato JSON
        body: JSON.stringify({
          Criador: 3,
          Data_ocorrencia: formData.dataoc,
          Hora: formData.hora,
          Iniciativa: formData.iniciatica,
          Aspecto: formData.aspecto,
          Urgencia: formData.urgencia,
          Tema: formData.tema,
          Rm_aluno: formData.rm,
          Turma: formData.turma,
          Responsavel: formData.responsavel,
          Descricao: formData.descricao,
          Encaminhamento: formData.encaminhamento,
          Status: formData.status,
        }),
      });

      // Converte a resposta para JSON
      // const data = await response.json();

      // Limpa os campos de entrada
      setFormData({
        criador: "",
        dataoc: "",
        hora: "",
        iniciatica: "",
        aspecto: "",
        urgencia: "",
        tema: "",
        rm: "",
        turma: "",
        responsavel: "",
        descricao: "",
        encaminhamento: "",
        status: "",
      });
    } catch (error) {
      // Loga erros no console
      console.error("Erro ao criar ocorrencia:", error);
    }
    setFormData({
      criador: "",
      dataoc: "",
      hora: "",
      iniciatica: "",
      aspecto: "",
      urgencia: "",
      tema: "",
      rm: "",
      turma: "",
      responsavel: "",
      descricao: "",
      encaminhamento: "",
      status: "",
    });
  };

  const handleDataChange = (e) => {
    console.log("Data changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleHorarioChange = (e) => {
    console.log("Horário changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleIniciativaChange = (e) => {
    console.log("Iniciativa changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleAspectoChange = (e) => {
    console.log("Aspecto changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleTemaChange = (e) => {
    console.log("Tema changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleUrgenciaChange = (e) => {
    console.log("Urgência changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleEstudanteChange = (e) => {
    console.log("Estudante changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleTurmaChange = (e) => {
    console.log("Turma changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleRMChange = (e) => {
    console.log("RM changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleResponsavelChange = (e) => {
    console.log("Responsável changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleEspecialistaChange = (e) => {
    console.log("Especialista changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleDescChange = (e) => {
    console.log("Descrição changed:", e.target.value);
    setFormData(e.target.value);
  };

  const handleEncaminhamentoChange = (e) => {
    console.log("Encaminhamento changed:", e.target.value);
    setFormData(e.target.value);
  };

  return (
    <main className={styles.main}>
      <h1 className={styles.tit}>Criar nova ocorrência</h1>

      <div className={styles.form}>
        <div className={styles.datatime}>
          <div className={styles.um}>
            <label>Data: </label>
            <input
              className={styles.input4}
              type="date"
              name="data"
              min="2020-01-01"
              value={formData.dataoc}
              onChange={handleDataChange}
            />
          </div>

          <div>
            <label>Horário: </label>
            <input className={styles.input} type="time" name="hora" />
          </div>
        </div>

        <div className={styles.init}>
          <div className={styles.dois}>
            <label for="iniciativa">Iniciativa: </label>
            <select className={styles.input2} id="iniciativa" name="iniciativa">
              <option value="null"></option>
              <option value="fam/resp">Família/Responsáveis</option>
              <option value="profsaude">Profissionais da saúde</option>
              <option value="DES">DES</option>
              <option value="CP">CP</option>
              <option value="OE">OE</option>
              <option value="CP">CP</option>
            </select>
          </div>

          <div>
            <label for="aspecto">Aspecto: </label>
            <select className={styles.input7} id="aspecto" name="aspecto">
              <option value="null"></option>
              {dataAsp.length > 0 ? (
                dataAsp.map((item) => (
                  <option key={item.Aspecto_id} value={item.Aspecto_id}>
                    {item.Nome}
                  </option>
                ))
              ) : (
                <option>Nenhum aspecto encontrado </option>
              )}
            </select>
          </div>
        </div>

        <div className={styles.tema}>
          <div className={styles.tres}>
            <label for="tema">Tema: </label>
            <select className={styles.input8} name="tema" id="tema">
              <option value="null"></option>
              {dataTem.length > 0 ? (
                dataTem.map((item) => (
                  <option key={item.Tema_id} value={item.Tema_id}>
                    {item.Nome_tema}
                  </option>
                ))
              ) : (
                <option>Nenhum tema encontrado </option>
              )}
            </select>
          </div>

          <div>
            <label for="urgencia">Urgência: </label>
            <select className={styles.input9} name="urgencia" id="urgencia">
              <option value="null"></option>
              {dataUrg.length > 0 ? (
                dataUrg.map((item) => (
                  <option key={item.Urgencia_id} value={item.Urgencia_id}>
                    {item.Tipo_urgencia}
                  </option>
                ))
              ) : (
                <option>Nenhuma urgencia encontrada </option>
              )}
            </select>
          </div>
        </div>

        <div className={styles.aluno}>
          <div className={styles.quat}>
            <label for="aluno">Estudante(s): </label>
            <input
              className={styles.input10}
              type="text"
              id="aluno"
              name="aluno"
            />
          </div>

          <div className={styles.cinc}>
            <label for="turma">Turma: </label>
            <input
              className={styles.input11}
              type="text"
              id="turma"
              name="turma"
              // disabled
            />
          </div>

          <div>
            <label for="rm">RM: </label>
            <input
              type="text"
              id="rm"
              name="rm"
              // disabled
            />
          </div>
        </div>

        <div className={styles.resp}>
          <div className={styles.seis}>
            <label for="resp">Responsável: </label>
            <input
              className={styles.input5}
              type="text"
              id="resp"
              name="resp"
            />
          </div>

          <div>
            <label for="esp">Especialista: </label>
            <input className={styles.input6} type="text" id="esp" name="esp" />
          </div>
        </div>

        <div className={styles.mes}>
          <textarea
            name="message"
            rows="10"
            cols="110"
            placeholder="Descrição da ocorrência"
          />
        </div>

        <div className={styles.enc}>
          <label for="enc">Encaminhamento: </label>
          <select className={styles.input3} id="enc" name="enc">
            <option value="null"></option>
            {dataEnc.length > 0 ? (
              dataEnc.map((item) => (
                <option
                  key={item.Encaminhamento_id}
                  value={item.Encaminhamento_id}
                >
                  {item.Nome_encaminhamento}
                </option>
              ))
            ) : (
              <option>Nenhuma urgencia encontrada </option>
            )}
          </select>
        </div>

        <div className={styles.divBut}>
          <BotaoVoltar link="/Paginas/PaginaInicial" />

          <Link href="https://quizizz.com/">
            <button className={styles.botaovoltar}> Gerar documento </button>
          </Link>
          <button className={styles.botaovoltar} onClick={handleSave}>
            Salvar
          </button>
        </div>
      </div>
    </main>
  );
}

export default criaroco;
