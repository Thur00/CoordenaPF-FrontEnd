"user Client"

import styles from "@/Components/VisualizarOcorrencia.module.css"
import Link from "next/link";
import { useState } from "react";


function BotaoVisualizar() {
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
    };

    function enviarNotificacao() {
        closeModal()
    }

    return (
        <>
            <button className={styles.b1}>Mudar Status</button>
            <button onClick={openModal} className={styles.b1}>Solicitar</button>

            {isOpen && (
                <div id="myModal" className={styles.modal} onClick={handleClickOutside}>
                    <div className={styles.modalContent}>
                        <div className={styles.headBox}>
                            <div className={styles.titulo}><h2>Solicitar participação nesta ocorrência</h2></div>
                            <span className={styles.close} onClick={closeModal}>&times;</span>
                        </div>


                        
                        <div className={styles.email}>
                            <div>

                                <h3>Samara</h3>
                                <p>samara@gmail.com</p>
                            </div>
                            <br />
                            <div>
                                <h3>Alessandra</h3>
                                <p>alessandra@gmail.com</p>
                            </div>
                        </div>
                        <button className={styles.confirmar} onClick={enviarNotificacao}>Confirmar</button>
                    </div>
                </div>
            )}
        </>
    )
}

export default BotaoVisualizar