"use client"

import { useState } from "react";
import styles from "./Modal.module.css";

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
    };

    return (
        <>
            <h2>Modal Example</h2>
            <button onClick={openModal}>Open Modal</button>

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