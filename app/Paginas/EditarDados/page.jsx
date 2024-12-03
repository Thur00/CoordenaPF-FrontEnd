"use client";

import React from "react";
import Link from "next/link";
import styles from "@/Components/EditarDados.module.css";

function EditarDados() {
  return (
    <div>
      <br />
      <br />
      <h1 className={styles.title}>Editar Dados</h1>
      <div className={styles.divbutton}>
        <Link className={styles.button} href="/Paginas/EditarAluno">
          Editar Aluno
        </Link>

        <Link className={styles.button} href="/Paginas/EditarAspecto">
          Editar Aspecto
        </Link>

        <Link className={styles.button} href="/Paginas/EditarTema">
          Editar Tema
        </Link>

        <Link className={styles.button} href="/Paginas/EditarStatus">
          Editar Status
        </Link>

        <Link className={styles.button} href="/Paginas/EditarUrgencia">
          Editar Urgência
        </Link>

        <Link className={styles.button} href="/Paginas/EditarEncaminhamento">
          Editar Encaminhamento
        </Link>
      </div>
      <br />
    </div>
  );
}

export default EditarDados;
