"use client";
import Link from "next/link";
import { FaHouseChimney } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import styles from "@/Components/ModalNotificacao.module.css";

const API_URL = "http://localhost:3001";

function Header(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState([]);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const getNotificacao = async () => {
    try {
      debugger;
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
  }, []);

  return (
    <main>
      <div className="Header">
        <Link className="icon" href="/Paginas/PaginaInicial">
          <FaHouseChimney />
        </Link>

        <h1 className="tit">Coordena SESI</h1>
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
        <div id="myModal" className={styles.modal}>
          <div className={styles.modalContent}>
            <div className={styles.headBox}>
              <div className={styles.titulo}>
                <h1>Notificação</h1>
              </div>
              <span className={styles.close} onClick={closeModal}>
                &times;
              </span>
            </div>
            <div className={styles.content}>
              {data.length > 0 ? (
                data.map((item) => (
                  <div className={styles.notificacao}>
                    <p>
                      {item.Criador_Nome} convidou {item.Solicitado_Nome} para
                      esta notificação
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
