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

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);
  const router = useRouter();

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

  const getNotificacao = async () => {
    try {
      const resposta = await fetch(`${API_URL}/notificacoes`);
      const data1 = await resposta.json();
      console.log("Dados recebidos Noticacao:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca de notificações", error);
    }
  };

  useEffect(() => {
    getNotificacao();

    emitter.on("novaNotificacao", getNotificacao);

    // Limpeza do evento ao desmontar o componente
    return () => {
      emitter.off("novaNotificacao", getNotificacao);
    };
  }, []);

  const handleClick = (id) => {
    router.push(`/Paginas/VisualizarOcorrencia?id=${id}`);
    closeModal();
  };

  const formattedDate = (date) => {
    return new Date(date).toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    });
  };

  return (
    <main>
      <div className="Header">
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
      </div>

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
              {data.length > 0 ? (
                data.map((item) => (
                  <div
                    className={styles.notificacao}
                    onClick={() => handleClick(item.Cod_ocorrencia)}
                  >
                    <p>
                      {item.Criador_Nome} convidou {item.Solicitado_Nome} para a
                      ocorrência {item.Cod_ocorrencia}, do dia{" "}
                      {formattedDate(item.Data_envio)}, classificada como {item.Urgencia_Tipo}. Clique para visualizar.
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
    </main>
  );
}
export default Header;
