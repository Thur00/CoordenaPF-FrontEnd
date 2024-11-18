"use client"

import { useState } from "react";
import styles from "./ModalNotificacao.module.css";

const Notificacao = () => {
    const [isOpen, setIsOpen] = useState(false);

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

       
            const [data, setData] = useState([]);
          
            const getNotificacao = async () => {
              try {
                debugger;
                const resposta = await fetch(`${API_URL}/notificacoes`);
                const data1 = await resposta.json();
                console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
                setData(data1);
              } catch (error) {
                console.error("Erro na busca", error);
              }
            };
          
            useEffect(() => {
                getNotificacao();
            }, []);
    };

   
    return (
        <>
            {isOpen && (

                <div id="myModal" className={styles.modal} onClick={handleClickOutside}>
                    <div className={styles.modalContent}>
                        <div className={styles.headBox}>
                            <div className={styles.titulo}><h1>Notificação</h1></div>
                            <span className={styles.close} onClick={closeModal}>&times;</span>
                        </div>
                        <div className={styles.content}>
                            <div className={ styles.notificacao}><p>Samara te solicitou em taltaltal</p></div>
                            <div className={styles.notificacao}><p>Samara te solicitou em taltaltal</p></div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Notificacao;