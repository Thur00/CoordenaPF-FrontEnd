"use client";

import { useEffect } from "react";
import styles from "./page.module.css";
import Image from "next/image";

const Impressao = () => {
  const limparPagina = () => {
    // Remove o header e o footer da página
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    if (header) header.style.display = "none";
    if (footer) footer.style.display = "none";

    return () => {
      // Restaura o header e o footer quando o componente desmontar
      if (header) header.style.display = "block";
      if (footer) footer.style.display = "block";
    };
  };

  useEffect(() => {
    limparPagina();
  }, []);

  const gerarPDF = () => {
    window.print();
  };

  return (
    <div className={styles.container}>
      <div className={styles.cabecalho}>
      <Image
        className={styles.logo}
        src="/LogoSESI.jpg"
        alt="Logo"
        width={250}
        height={80}
      />
      <h1 className={styles.h1}>Escola SESI de Vinhedo - CE 242</h1>
      <h1 className={styles.h1}>ATA DE ATENDIMENTO AOS PAIS - 2024</h1>
      </div>
      <div className={styles.formulario}>
        <div className={styles.linha}>
          <label>Iniciativa:</label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.linha}>
          <label>Aspecto:</label>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.boxPrint}>
          <div className={styles.linha}>
            <label>Professor(a):</label>
            <input className={styles.input3} type="text" />
          </div>
          <div className={styles.linha}>
            <label>Turma:</label>
            <input className={styles.input} type="text" />
            <label>Horário:</label>
            <input className={styles.input} type="text" />
          </div>
          <div className={styles.linha}>
            <label>Estudante(s):</label>
            <input className={styles.input2} type="text" />
          </div>
          <div className={styles.linha}>
            <label>Responsável:</label>
            <input className={styles.input4} type="text" />
          </div>
          <div className={styles.linha}>
            <label>Especialista:</label>
            <input className={styles.input4} type="text" />
          </div>
          <div className={styles.descricao}>
            <label>Descrição:</label>
            <textarea
              className={`${styles.input5} ${styles.textarea}`}
            ></textarea>
          </div>
        </div>
        <div className={styles.linha}>
          <label>Vinhedo, ___ / ___ / 2024</label>
        </div>
        <div className={styles.assinaturas}>
          <div>
            <label>________________________</label>
            <p>De acordo</p>
          </div>
          <div>
            <label>________________________</label>
            <p>Profissional ou Responsável</p>
          </div>
        </div>
        <button className={styles.button} onClick={gerarPDF}>
          Imprimir
        </button>
      </div>
    </div>
  );
};

export default Impressao;
