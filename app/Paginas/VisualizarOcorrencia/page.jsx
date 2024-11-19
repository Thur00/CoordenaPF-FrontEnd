"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import styles from "@/Components/VisualizarOcorrencia.module.css";
import SegundoBotaoVisualizar from "@/Components/SegundoBotaoVisualizar";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const VisualizarOcorrencia = () => {
  const [data, setData] = useState({});
  const [dataStt, setDataStt] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [formData, setFormData] = useState({
    dataoc: "",
    hora: "",
    iniciativa: "",
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
  const [usuarios, setUsuarios] = useState([]); // Estado para usuários
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

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

  useEffect(() => {
    getUsuarios();
    getStatus();
    if (id) {
      getOcorrencia();
    }
  }, [id]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleEdit = (item) => {
    setIsEditing(true);
    setFormData({
      Data_ocorrencia: formData.dataoc,
      Hora: formData.hora,
      Iniciativa: formData.iniciativa,
      Aspecto: formData.aspecto,
      Urgencia: formData.urgencia,
      Tema: formData.tema,
      Rm_aluno: formData.rm,
      Turma: formData.turma,
      Responsavel: formData.responsavel,
      Descricao: formData.descricao,
      Encaminhamento: formData.encaminhamento,
    });
    setEditingItem(item);
  };

  const handleSave = async () => {
    debugger;
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/ocorrencias/${editingItem.Aspecto_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Data_ocorrencia: formData.dataoc,
            Hora: formData.hora,
            Iniciativa: formData.iniciativa,
            Aspecto: formData.aspecto,
            Urgencia: formData.urgencia,
            Tema: formData.tema,
            Rm_aluno: formData.rm,
            Turma: formData.turma,
            Responsavel: formData.responsavel,
            Descricao: formData.descricao,
            Encaminhamento: formData.encaminhamento,
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
        await fetch(`${API_URL}/ocorencias/status/${id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            Status: formData.status,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getOcorrencia();
      } catch (error) {
        console.error("Erro ao atualizar o aspecto:", error);
      }
    }

    setFormData({ id: "", Nome: "" });
  };

  const formattedDate = new Date(data?.Data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = new Date(data?.Data).toLocaleTimeString("pt-BR", {
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

  // function enviarNotificacao() {
  //   closeModal();
  // }

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
          {formattedDate || "Data não encontrada"}
        </p>
        <p className={styles.urgencia1}>
          {data?.Urgencia ? data.Urgencia : "Urgência não encontrada"}
        </p>
      </div>

      <div className={styles.botoes}>
        <label className={styles.b1}>
          Alterar Status
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
              <option>Nenhum aspecto encontrado </option>
            )}
          </select>
        </label>

        <button onClick={handleSave}>Confirmar</button>

        <button onClick={openModal} className={styles.b1}>
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
                type="text"
                name="date"
                value={formattedDate || "Data não encontrada"}
                disabled
              />
            ) : (
              <input
                className={styles.input4}
                type="text"
                name="date"
                value={formattedDate || "Data não encontrada"}
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
                value={formattedTime || "Horário não encontrado"}
                disabled
              />
            ) : (
              <input
                className={styles.input}
                type="text"
                name="hora"
                value={formattedTime || "Horário não encontrado"}
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
            <label for="aspecto">Aspecto:</label>
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
          <div className={styles.tres}>
            <label for="tema">Tema:</label>
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
            <label for="urgencia">Urgência:</label>
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
            <label for="aluno">Estudante(s):</label>
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
            <label for="turma">Turma:</label>
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
            <label for="rm">RM:</label>
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
            <label for="resp">Responsável: </label>
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
            <label for="resp">Especialista: </label>
            {data.length > 0 ? (
              <input
                className={styles.input5}
                id="esp"
                name="esp"
                value={data?.Especialista || "Especialista não encontrado"}
                disabled
              />
            ) : (
              <input
                className={styles.input5}
                id="esp"
                name="esp"
                value={data?.Especialista || "Especialista não encontrado"}
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
          <label for="enc">Encaminhamento:</label>
          {data.length > 0 ? (
            <input
              className={styles.input3}
              id="esp"
              name="esp"
              value={data?.Encaminhamento || "Encaminhamento não encontrado"}
              disabled
            />
          ) : (
            <input
              className={styles.input3}
              id="esp"
              name="esp"
              value={data?.Encaminhamento || "Encaminhamento não encontrado"}
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
              <div className={styles.titulo}>
                <h2>Solicitar participação nesta ocorrência</h2>
              </div>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
            </div>

            <div>
              <h1 className={styles.subtitulo}>Selecione o usuário:</h1>
            </div>

            <div className={styles.email}>
              {usuarios.length > 0 ? (
                usuarios.map((user, index) => (
                  <div key={index}>
                    <p>{user.Nome} </p>
                    <p> {user.Email}</p>
                  </div>
                ))
              ) : (
                <p>Nenhum usuário encontrado</p>
              )}
            </div>
          </div>
          <button className={styles.confirmar} onClick={closeModal}>
            Confirmar
          </button>
        </div>
      )}
    </div>
  );
};

export default VisualizarOcorrencia;
