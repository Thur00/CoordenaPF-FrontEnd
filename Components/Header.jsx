"use client";
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import styles from "@/Components/ModalNotificacao.module.css";
import { useRouter } from "next/navigation";
import emitter from "@/utils/eventMitter";

const API_URL = "http://localhost:3001";

const getUserInfo = () => {
  const userLogado = JSON.parse(localStorage.getItem("userLogado"));
  if (userLogado) {
    return userLogado;
  } else {
    return null;
  }
};

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const [usuario, setUsuario] = useState([]);

  const user = getUserInfo();
  const [filteredData, setFilteredData] = useState([]); // Dados filtrados
  const [filterValue, setFilterValue] = useState({ id: user.Login_id });

  const router = useRouter();

  const openModal = () => {
    setIsOpen(true);
    applyFilter();
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

  const getNotificacao = async () => {
    try {
      const resposta = await fetch(`${API_URL}/notificacoes`);
      const data1 = await resposta.json();
      console.log("Dados recebidos Noticacao:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setFilteredData(data1);
    } catch (error) {
      console.error("Erro na busca de notificações", error);
    }
  };

  const getUsuarios = async () => {
    try {
      const resposta = await fetch(`${API_URL}/usuarios`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setUsuario(data1);
    } catch (error) {
      console.error("Erro na busca status", error);
    }
  };

  useEffect(() => {
    getNotificacao();
    getUsuarios();

    emitter.on("novaNotificacao", getNotificacao);

    // Limpeza do evento ao desmontar o componente
    return () => {
      emitter.off("novaNotificacao", getNotificacao);
    };
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValue((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const handleClick = (id) => {
    router.push(`/Paginas/VisualizarOcorrencia?id=${id}`);
    closeModal();
  };

  const formattedDate = (data) => {
    if (data) {
      return new Date(data).toISOString().split("T")[0];
    } else return "";
  };

  const viewDate = (data) => {
    if (data) {
      const dateStr = formattedDate(data); // Retorna uma string no formato aaaa-mm-dd
      const [year, month, day] = dateStr.split("-"); // Desestrutura a string
      return `${day}/${month}/${year}`; // Retorna no formato dd/mm/aaaa
    } else {
      return "Data não encontrada";
    }
  };

  const applyFilter = () => {
    let filtered = data;

    console.log("filterValue", filterValue);
    console.log("filtered", filtered);

    if (filterValue.id) {
      filtered = filtered.filter((item) =>
        item.Solicitado_Id.toString().includes(filterValue.id)
      );
    }

    setFilteredData(filtered);
  };

  const admin = user.Autoridade === "Administrador";

  return (
    <>
      <header className="Header">
        <Link className="icon" href="/Paginas/PaginaInicial">
          <FaHouseChimney />
        </Link>

        <Link href="/Paginas/PaginaInicial">
          <h1 className="tit">Sistema GO</h1>
        </Link>

        <div>
          <button className="icon2" onClick={openModal}>
            <FaBell />
          </button>

          <Link className="icon2" href="/Paginas/MeuPerfil">
            <IoPersonSharp />
          </Link>
        </div>
      </header>

      {isOpen && (
        <div id="myModal" className={styles.modal} onClick={handleClickOutside}>
          <div className={styles.modalContent}>
            <div className={styles.headBox}>
              <div className={styles.titulo}>
                <h1>Notificações</h1>
              </div>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className={styles.content}>
              {admin && (
                <label className={styles.filter}>
                  Notificações enviadas para:
                  <div>
                    <select
                      value={filterValue.id}
                      onChange={handleFilterChange}
                      id="usuarios"
                      name="id"
                    >
                      <option value="">Todos</option>
                      {usuario.length > 0 ? (
                        usuario.map((item) => (
                          <option key={item.Login_id} value={item.Login_id}>
                            {item.Nome}
                          </option>
                        ))
                      ) : (
                        <option>Nenhum usuário encontrado</option>
                      )}
                    </select>
                    <button onClick={applyFilter}>Filtrar</button>
                  </div>
                </label>
              )}
              {filteredData.length > 0 ? (
                [...filteredData].reverse().map((item) => (
                  <div
                    key={item.Notificacao_id}
                    className={styles.notificacao}
                    onClick={() => handleClick(item.Cod_ocorrencia)}
                  >
                    <p>
                      {item.Criador_Nome} convidou {item.Solicitado_Nome} para a
                      ocorrência {item.Cod_ocorrencia}, do dia{" "}
                      {viewDate(item.Data_envio)}. "{item.Mensagem}".
                      <span
                        style={{ borderBottom: "5px solid " + item.Cor + "7f" }}
                      >
                        {item.Urgencia_Tipo}
                      </span>
                      . Clique para visualizar.
                    </p>
                  </div>
                ))
              ) : (
                <p>Nenhuma notificação encontrada</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
export default Header;
