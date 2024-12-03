"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/Components/VisualizarOcorrencia.module.css";
import stylEdit from "@/Components/criaroco.module.css";
import emitter from "@/utils/eventMitter";
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const getUserInfo = () => {
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado) {
    return userLogado;
  } else {
    return null;
  }
};

const VisualizarOcorrencia = () => {
  const [data, setData] = useState({});
  const [dataStt, setDataStt] = useState([]);
  const [dataAsp, setDataAsp] = useState([]);
  const [dataTem, setDataTem] = useState([]);
  const [dataUrg, setDataUrg] = useState([]);
  const [dataEnc, setDataEnc] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    criador: "",
    dataoc: "",
    hora: "",
    iniciativa: "",
    nome_iniciativa: "",
    aspecto: "",
    urgencia: "",
    tema: "",
    aluno: "",
    rm: "",
    turma: "",
    responsavel: "",
    especialista: "",
    descricao: "",
    encaminhamento: "",
    status: "",
  });
  const [formMen, setFormMen] = useState({
    mensagem: "",
  });
  const [usuarios, setUsuarios] = useState([]); // Estado para usuários
  const [criador, setCriador] = useState(null); // Estado para criado da notificação
  const [solicitado, setSolicitado] = useState(null); // Estado para soliiicitad da notificação
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const user = getUserInfo();

  const getOcorrencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias/${id}`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
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

  const getStatus = async () => {
    try {
      const resposta = await fetch(`${API_URL}/status`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataStt(data1);
    } catch (error) {
      console.error("Erro na busca status", error);
    }
  };

  const getAspecto = async () => {
    try {
      const resposta = await fetch(`${API_URL}/aspectos`);
      const data1 = await resposta.json();
      console.log("Aspectos recebidos :", data1); // Adicione esta linha para verificar os dados
      setDataAsp(data1);
    } catch (error) {
      console.error("Erro na busca de aspecto", error);
    }
  };

  const getTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/temas`);
      const data1 = await resposta.json();
      console.log("Temas recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataTem(data1);
    } catch (error) {
      console.error("Erro na busca de tema", error);
    }
  };

  const getUrgencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/urgencias`);
      const data1 = await resposta.json();
      console.log("Urgencias recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataUrg(data1);
    } catch (error) {
      console.error("Erro na busca de urgência", error);
    }
  };

  const getEncaminhamento = async () => {
    try {
      const resposta = await fetch(`${API_URL}/encaminhamentos`);
      const data1 = await resposta.json();
      console.log("Encaminhamento recebidos:", data1); // Adicione esta linha para verificar os dados
      setDataEnc(data1);
    } catch (error) {
      console.error("Erro na busca de encaminhamento", error);
    }
  };

  useEffect(() => {
    if (id) {
      getOcorrencia();
    }
    getUsuarios();
    getStatus();
    getAspecto();
    getTema();
    getUrgencia();
    getEncaminhamento();
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleMessageChange = (e) => {
    const { name, value } = e.target;
    setFormMen({ ...formMen, [name]: value });
  };

  const handleEdit = () => {
    console.log("Iniciando edição para o item:", id);

    setIsEditing(true);

    console.log("teste horaaa", data.Hora);
    console.log("teste data", data.Data);

    const formatDate = (isoString) => {
      return new Date(isoString).toISOString().split("T")[0];
    };

    const formatTime = (isoString) => {
      return new Date(isoString).toISOString().split("T")[1].slice(0, 5);
    };

    setFormData({
      criador: data.Login_id,
      dataoc: formatDate(data.Data), // Define a data formatada
      hora: formatTime(data.Hora), // Hora formatada para o input
      iniciativa: data.Iniciativa,
      nome_iniciativa: data.Nome_iniciativa,
      aspecto: data.Aspecto_id,
      urgencia: data.Urgencia_id,
      tema: data.Tema_id,
      aluno: data.Aluno,
      rm: data.RM,
      turma: data.Turma,
      responsavel: data.Responsavel,
      especialista: data.Especialista
        ? data.Especialista
        : "Nenhum especialista presente",
      descricao: data.Descricao,
      encaminhamento: data.Encaminhamento_id,
      status: data.Status_id,
    });
    setEditingItem(data);
  };

  const handleCancelEdit = (item) => {
    console.log("Parando edição para o item:", item);
    setIsEditing(false);
    setFormData({
      criador: "",
      dataoc: "",
      hora: "",
      iniciativa: "",
      nome_iniciativa: "",
      aspecto: "",
      urgencia: "",
      tema: "",
      aluno: "",
      rm: "",
      turma: "",
      responsavel: "",
      especialista: "",
      descricao: "",
      encaminhamento: "",
      status: "",
    });
    setEditingItem(null);
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/ocorrencias/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Criador: formData.criador,
            Data_ocorrencia: formData.dataoc,
            Hora: formData.hora,
            Iniciativa: formData.iniciativa,
            Nome_iniciativa: formData.nome_iniciativa,
            Aspecto: formData.aspecto,
            Urgencia: formData.urgencia,
            Tema: formData.tema,
            Rm_aluno: formData.rm,
            Turma: formData.turma,
            Responsavel: formData.responsavel,
            Especialista: formData.especialista,
            Descricao: formData.descricao,
            Encaminhamento: formData.encaminhamento,
            status: formData.status,
            Status: formData.status,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getOcorrencia();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o aspecto:", error);
      }
    } else {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/ocorrencias/status/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            status: formData.status,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getOcorrencia();
        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);
      } catch (error) {
        console.error("Erro ao atualizar o aspecto:", error);
      }
    }

    setFormData({ id: "", Nome: "" });
  };

  const currentDate = new Date().toLocaleDateString("en-US");

  const formattedDate = () => {
    if (data?.Data) {
      return new Date(data.Data).toISOString().split("T")[0];
    } else return "";
  };

  const viewDate = () => {
    if (data?.Data) {
      const dateStr = formattedDate(); // Retorna uma string no formato aaaa-mm-dd
      const [year, month, day] = dateStr.split("-"); // Desestrutura a string
      return `${day}/${month}/${year}`; // Retorna no formato dd/mm/aaaa
    } else {
      return "Data não encontrada";
    }
  };

  const formattedTime = () => {
    if (data?.Data) {
      return new Date(data.Hora).toISOString().split("T")[1].slice(0, 5);
    } else return "";
  };

  const openModal = () => {
    setIsOpen(true);
    setCriador(user);
  };

  const closeModal = () => {
    setIsOpen(false);
    setIsOpen2(false);
    setCriador(null);
    setSolicitado(null);
  };

  const nextModal = () => {
    if (solicitado) {
      if (criador.Login_id !== solicitado.Login_id) {
        setIsOpen(false);
        setIsOpen2(true);
      } else {
        alert("Você não pode notificar o próprio criador da ocorrência.");
        return;
      }
    } else {
      alert("Por favor, selecione um usuário para continuar.");
      return;
    }
  };

  const handleClickOutside = (event) => {
    const modal = document.getElementById("myModal");
    if (modal && event.target === modal) {
      closeModal();
    }
  };

  const gerarPDF = () => {
    const tabela = document.getElementById("tabelas");
    const novaJanela = window.open("", "", "width=800,height=600");

    novaJanela.document.write(
      `<html><head><title>Ocorrência ${id} PDF</title>`
    );
    novaJanela.document.write(`<style>
        @page {
          size: landscape; 
        }
          
        .tudo,
        .botoes,
        .botoes2 {
          display: none;
        }

        .input,
        .input2,
        .input3,
        .input4,
        .input5,
        .input6,
        .input7,
        .imput8,
        .input9 {
          border: none;
          borderbottom: 2px solid #000      
        }
      </style>`);
    novaJanela.document.write("</head><body>");
    novaJanela.document.write(tabela.outerHTML);
    novaJanela.document.write("</body></html>");
    novaJanela.document.close();
    novaJanela.print();
  };

  const enviarNotificacao = async () => {
    // Verifica se o usuário foi selecionado
    if (!solicitado) {
      alert("Por favor, selecione um usuário para notificar.");
      return;
    }

    // Verifica se a mensagem foi preenchida
    if (!formMen.mensagem) {
      alert("Por favor, preencha a mensagem.");
      return;
    }

    // Se chegou aqui, significa que a validação passou. Vamos processar a notificação.
    if (criador !== solicitado) {
      try {
        // Envio da notificação
        const resposta = await fetch(`${API_URL}/notificacoes`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Cod_ocorrencia: data.Ocorrencia_id,
            Criador: criador.Login_id,
            Solicitado: solicitado.Login_id,
            Data_envio: currentDate,
            Mensagem: formMen.mensagem, // Mensagem preenchida
          }),
        });

        // Verifica se a resposta foi bem-sucedida
        if (resposta.ok) {
          alert("Notificação enviada com sucesso!");
          emitter.emit("novaNotificacao"); // Emitindo evento de nova notificação
          closeModal();
        } else {
          alert("Erro ao enviar notificação.");
        }
      } catch (error) {
        console.error("Erro ao enviar notificação:", error);
        alert("Erro ao tentar enviar a notificação.");
      }
      // Limpa o campo de mensagem após o envio bem-sucedido
      setFormMen({ mensagem: "" });
    } else {
      alert("Você não pode notificar o próprio criador da ocorrência.");
      return;
    }
  };

  return (
    <div>
      {!isEditing && !editingItem && (
        <div>
          <div className={styles.tudo}>
            <h1>Ocorrência</h1>
            <p className={styles.data}>
              Data:
              {viewDate() || "Data não encontrada"}
            </p>
            <p className={styles.urgencia1}>
              {data?.Urgencia ? data.Urgencia : "Urgência não encontrada"}
            </p>
          </div>

          <div className={styles.botoes}>
            <label className={styles.b3}>
              Alterar Status
              <div>
                <select
                  value={formData.status}
                  onChange={handleInputChange}
                  id="status"
                  name="status"
                >
                  <option value={data.Status_id}>{data.Status}</option>
                  {dataStt.length > 0 ? (
                    dataStt.map((item) => (
                      <option key={item.Status_id} value={item.Status_id}>
                        {item.Categoria}
                      </option>
                    ))
                  ) : (
                    <option>Nenhum status encontrado</option>
                  )}
                </select>
                <button onClick={handleSave}>Confirmar</button>
              </div>
            </label>
            <button onClick={openModal} className={styles.b3}>
              Solicitar
            </button>
          </div>

          <form className={styles.form}>
            <div className={styles.datatime}>
              <div className={styles.um}>
                <label>Data:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input4}
                    type="date"
                    name="date"
                    value={formattedDate() || "Data não encontrada"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input4}
                    type="date"
                    name="date"
                    value={formattedDate() || "Data não encontrada"}
                    disabled
                  />
                )}
              </div>

              <div>
                <label>Horário: </label>
                {data.length > 0 ? (
                  <input
                    className={styles.input}
                    type="time"
                    name="hora"
                    value={formattedTime() || "Horário não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input}
                    type="time"
                    name="hora"
                    value={formattedTime() || "Horário não encontrado"}
                    disabled
                  />
                )}
              </div>
            </div>

            <div className={styles.init}>
              <div className={styles.dois}>
                <label htmlFor="iniciativa">Iniciativa:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input2}
                    type="text"
                    name="iniciativa"
                    value={data?.Iniciativa || "Iniciativa não encontrada"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input2}
                    type="text"
                    name="iniciativa"
                    value={data?.Iniciativa || "Iniciativa não encontrada"}
                    disabled
                  />
                )}
              </div>
              <div>
                <label htmlFor="aspecto">Aspecto:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input7}
                    id="aspecto"
                    name="aspecto"
                    value={data?.Aspecto || "Aspecto não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input7}
                    id="aspecto"
                    name="aspecto"
                    value={data?.Aspecto || "Aspecto não encontrado"}
                    disabled
                  />
                )}
              </div>
            </div>

            <div className={styles.tema}>
              <div className={styles.seis}>
                <label htmlFor="resp">Nome (iniciativa): </label>
                {data.length > 0 ? (
                  <input
                    className={styles.input8}
                    name="tema"
                    id="tema"
                    value={data?.Nome_iniciativa || "Nome do iniciador não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input8}
                    name="tema"
                    id="tema"
                    value={data?.Nome_iniciativa || "Nome do iniciador não encontrado"}
                    disabled
                  />
                )}
              </div>
              <div className={styles.tres}>
                <label htmlFor="tema">Tema:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input8}
                    name="tema"
                    id="tema"
                    value={data?.Tema || "Tema não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input8}
                    name="tema"
                    id="tema"
                    value={data?.Tema || "Tema não encontrado"}
                    disabled
                  />
                )}
              </div>

              <div>
                <label htmlFor="urgencia">Urgência:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input9}
                    ame="urgencia"
                    id="urgencia"
                    value={data?.Urgencia || "Urgência não encontrada"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input9}
                    ame="urgencia"
                    id="urgencia"
                    value={data?.Urgencia || "Urgência não encontrada"}
                    disabled
                  />
                )}
              </div>
            </div>

            <div className={styles.aluno}>
              <div className={styles.quat}>
                <label htmlFor="aluno">Estudante(s):</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input10}
                    id="aluno"
                    name="aluno"
                    value={data?.Aluno || "Aluno(a) não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input10}
                    id="aluno"
                    name="aluno"
                    value={data?.Aluno || "Aluno(a) não encontrado"}
                    disabled
                  />
                )}
              </div>

              <div className={styles.cinc}>
                <label htmlFor="turma">Turma:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input11}
                    id="turma"
                    name="turma"
                    value={data?.Turma || "Turma não encontrada"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input11}
                    id="turma"
                    name="turma"
                    value={data?.Turma || "Turma não encontrada"}
                    disabled
                  />
                )}
              </div>

              <div>
                <label htmlFor="rm">RM:</label>
                {data.length > 0 ? (
                  <input
                    className={styles.input11}
                    id="rm"
                    name="rm"
                    value={data?.RM || "RM não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input11}
                    id="rm"
                    name="rm"
                    value={data?.RM || "RM não encontrado"}
                    disabled
                  />
                )}
              </div>
            </div>

            <div className={styles.resp}>
              <div className={styles.seis}>
                <label htmlFor="resp">Responsável: </label>
                {data.length > 0 ? (
                  <input
                    className={styles.input5}
                    id="turma"
                    name="turma"
                    value={data?.Responsavel || "Responsável não encontrado"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input5}
                    id="turma"
                    name="turma"
                    value={data?.Responsavel || "Responsável não encontrado"}
                    disabled
                  />
                )}
              </div>
              <div className={styles.seis}>
                <label htmlFor="resp">Especialista: </label>
                {data.length > 0 ? (
                  <input
                    className={styles.input5}
                    id="esp"
                    name="esp"
                    value={data?.Especialista || "Especialista não presente"}
                    disabled
                  />
                ) : (
                  <input
                    className={styles.input5}
                    id="esp"
                    name="esp"
                    value={data?.Especialista || "Especialista não presente"}
                    disabled
                  />
                )}
              </div>
            </div>
            <div className={styles.mes}>
              {data.length > 0 ? (
                <textarea
                  value={data?.Descricao || "Descrição não encontrada"}
                  disabled
                  rows="10"
                  cols="110"
                ></textarea>
              ) : (
                <textarea
                  value={data?.Descricao || "Descrição não encontrada"}
                  disabled
                  rows="10"
                  cols="110"
                ></textarea>
              )}
            </div>

            <div className={styles.enc}>
              <label htmlFor="enc">Encaminhamento:</label>
              {data.length > 0 ? (
                <input
                  className={styles.input3}
                  id="esp"
                  name="esp"
                  value={
                    data?.Encaminhamento || "Encaminhamento não encontrado"
                  }
                  disabled
                />
              ) : (
                <input
                  className={styles.input3}
                  id="esp"
                  name="esp"
                  value={
                    data?.Encaminhamento || "Encaminhamento não encontrado"
                  }
                  disabled
                />
              )}
            </div>
          </form>

          <div className={styles.botoes2}>
            <Link href="/Paginas/PaginaInicial">
              <button className={styles.b2}>Voltar</button>
            </Link>
            <button className={styles.b2} onClick={handleEdit}>
              Editar
            </button>
            <button className={styles.b2} onClick={gerarPDF}>
              Gerar Documento
            </button>
          </div>
          <br />

          {isOpen && (
            <div
              id="myModal"
              className={styles.modal}
              onClick={handleClickOutside}
            >
              <div className={styles.modalContent}>
                <div className={styles.headBox}>
                  <div className={styles.titulo}>
                    <h2>Solicitar participação nesta ocorrência</h2>
                  </div>
                  <span className={styles.close} onClick={closeModal}>
                    &times;
                  </span>
                </div>
                <div>
                  <h1 className={styles.subtitulo}>
                    Para quem deseja enviar a solitação?
                  </h1>
                </div>
                <div className={styles.content}>
                  {usuarios.length > 0 ? (
                    usuarios.map((user) => (
                      <div
                        className={styles.email}
                        onClick={() => setSolicitado(user)}
                        key={user.Login_id}
                      >
                        <p>{user.Nome}</p>
                        <p>{user.Email}</p>
                      </div>
                    ))
                  ) : (
                    <p>Nenhum usuário encontrado</p>
                  )}
                </div>
                <div className={styles.notiButton}>
                  <button className={styles.confirmar} onClick={nextModal}>
                    Continuar
                  </button>
                </div>
              </div>
            </div>
          )}

          {isOpen2 && (
            <div
              id="myModal"
              className={styles.modal}
              onClick={handleClickOutside}
            >
              <div className={styles.modalContent}>
                <div className={styles.headBox}>
                  <div className={styles.titulo}>
                    <h2>Digite uma mensagem</h2>
                  </div>
                  <span className={styles.close} onClick={closeModal}>
                    &times;
                  </span>
                </div>
                <div>
                  <h1 className={styles.subtitulo}>Escreva uma mensagem</h1>
                </div>

                <div className={styles.mes}>
                  <textarea
                    className={styles.mensagem}
                    value={formMen.mensagem}
                    onChange={handleMessageChange}
                    name="mensagem"
                    rows="10"
                    cols="110"
                    placeholder="Digite aqui"
                    required
                  />
                </div>
                <div className={styles.notiButton}>
                  <button
                    className={styles.confirmar}
                    onClick={enviarNotificacao}
                  >
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {isEditing && editingItem && (
        <main className={stylEdit.main}>
          <h1 className={stylEdit.tit}>Editar ocorrência</h1>

          <div className={stylEdit.form}>
            <div className={stylEdit.datatime}>
              <div className={stylEdit.um}>
                <label>Data: </label>
                <input
                  className={stylEdit.input4}
                  type="date"
                  name="dataoc"
                  min="2020-01-01"
                  value={formData.dataoc}
                  onChange={handleInputChange}
                />
              </div>

              <div>
                <label>Horário: </label>
                <input
                  className={stylEdit.input}
                  value={formData.hora}
                  onChange={handleInputChange}
                  type="time"
                  name="hora"
                />
              </div>
            </div>

            <div className={stylEdit.init}>
              <div className={stylEdit.dois}>
                <label htmlFor="iniciativa">Iniciativa: </label>
                <select
                  className={stylEdit.input2}
                  value={formData.iniciativa}
                  onChange={handleInputChange}
                  id="iniciativa"
                  name="iniciativa"
                >
                  <option value="null"></option>
                  <option value="Família/Responsáveis">
                    Família/Responsáveis
                  </option>
                  <option value="Profissionais da saúde">
                    Profissionais da saúde
                  </option>
                  <option value="DES">DES</option>
                  <option value="CP">CP</option>
                  <option value="OE">OE</option>
                </select>
              </div>

              <div>
                <label htmlFor="aspecto">Aspecto: </label>
                <select
                  className={stylEdit.input7}
                  value={formData.aspecto}
                  onChange={handleInputChange}
                  id="aspecto"
                  name="aspecto"
                >
                  <option value={data.Aspecto_id}>{data.Aspecto}</option>
                  {dataAsp.length > 0 ? (
                    dataAsp.map((item) => (
                      <option
                        key={item.Aspecto_id}
                        value={item.Aspecto_id}
                        onChange={handleInputChange}
                      >
                        {item.Nome}
                      </option>
                    ))
                  ) : (
                    <option>Nenhum aspecto encontrado </option>
                  )}
                </select>
              </div>
            </div>

            <div className={stylEdit.tema}>
              <div className={styles.seis}>
                <label htmlFor="resp">Nome (iniciativa): </label>
                <input
                  type="text"
                  value={formData.nome_iniciativa}
                  onChange={handleInputChange}
                  id="resp"
                  name="nome_iniciativa"
                />
              </div>
              <div className={stylEdit.tres}>
                <label htmlFor="tema">Tema: </label>
                <select
                  className={stylEdit.input8}
                  value={formData.tema}
                  onChange={handleInputChange}
                  name="tema"
                  id="tema"
                >
                  <option value={data.Tema_id}>{data.Tema}</option>
                  {dataTem.length > 0 ? (
                    dataTem.map((item) => (
                      <option
                        key={item.Tema_id}
                        value={item.Tema_id}
                        onChange={handleInputChange}
                      >
                        {item.Nome_tema}
                      </option>
                    ))
                  ) : (
                    <option>Nenhum tema encontrado </option>
                  )}
                </select>
              </div>

              <div>
                <label htmlFor="urgencia">Urgência: </label>
                <select
                  className={stylEdit.input9}
                  value={formData.urgencia}
                  onChange={handleInputChange}
                  name="urgencia"
                  id="urgencia"
                >
                  <option value={data.Urgencia_id}>{data.Urgencia}</option>
                  {dataUrg.length > 0 ? (
                    dataUrg.map((item) => (
                      <option
                        key={item.Urgencia_id}
                        value={item.Urgencia_id}
                        onChange={handleInputChange}
                      >
                        {item.Tipo_urgencia}
                      </option>
                    ))
                  ) : (
                    <option>Nenhuma urgencia encontrada </option>
                  )}
                </select>
              </div>
            </div>

            <div className={stylEdit.aluno}>
              <div className={stylEdit.quat}>
                <label htmlFor="aluno">Estudante(s): </label>
                <input
                  className={stylEdit.input10}
                  value={formData.aluno}
                  type="text"
                  id="aluno"
                  name="aluno"
                  disabled
                />
              </div>

              <div className={stylEdit.cinc}>
                <label htmlFor="turma">Turma: </label>
                <input
                  className={stylEdit.input11}
                  type="text"
                  value={formData.turma}
                  onChange={handleInputChange}
                  id="turma"
                  name="turma"
                  // disabled
                />
              </div>

              <div>
                <label htmlFor="rm">RM: </label>
                <input
                  type="text"
                  value={formData.rm}
                  onChange={handleInputChange}
                  id="rm"
                  name="rm"
                  // disabled
                />
              </div>
            </div>

            <div className={stylEdit.resp}>
              <div className={stylEdit.seis}>
                <label htmlFor="resp">Responsável: </label>
                <input
                  className={stylEdit.input5}
                  type="text"
                  value={formData.responsavel}
                  onChange={handleInputChange}
                  id="resp"
                  name="responsavel"
                />
              </div>

              <div>
                <label htmlFor="esp">Especialista: </label>
                <input
                  className={stylEdit.input6}
                  type="text"
                  value={formData.especialista}
                  onChange={handleInputChange}
                  id="esp"
                  name="especialista"
                />
              </div>
            </div>

            <div className={stylEdit.mes}>
              <textarea
                value={formData.descricao}
                onChange={handleInputChange}
                name="descricao"
                rows="10"
                cols="110"
                placeholder="Descrição da ocorrência"
              />
            </div>

            <div className={stylEdit.enc}>
              <label htmlFor="enc">Encaminhamento: </label>
              <select
                className={stylEdit.input3}
                value={formData.encaminhamento}
                onChange={handleInputChange}
                id="enc"
                name="encaminhamento"
              >
                <option value={data.Encaminhamento_id}>
                  {data.Encaminhamento}
                </option>
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
                  <option>Nenhum encaminhamento encontrada </option>
                )}
              </select>
            </div>

            <div className={stylEdit.divBut}>
              <button className={stylEdit.botaovoltar} onClick={handleSave}>
                Salvar
              </button>
              <button
                className={stylEdit.botaovoltar}
                onClick={handleCancelEdit}
              >
                Cancelar
              </button>
            </div>
          </div>
        </main>
      )}
    </div>
  );
};

export default VisualizarOcorrencia;
