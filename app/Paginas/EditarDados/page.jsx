"use client";

import React from "react";
import Link from "next/link";
import styles from "@/Components/EditarDados.module.css";

function EditarDados() { 
  return (
    <div>
     
      <br></br>
      <br></br>

      <h1 className={styles.title}>Editar Dados</h1>

      <div className={styles.divbutton}>
        <button className={styles.button}>
          <Link href="/Paginas/EditarAluno">Editar Aluno</Link>
        </button>

        <button className={styles.button}>
          <Link href="/Paginas/EditarAspecto">Editar Aspecto</Link>
        </button>

        <button className={styles.button}>
          <Link href="/Paginas/EditarTema">Editar Tema</Link>
        </button>

        <button className={styles.button}>
          <Link href="/Paginas/EditarStatus">Editar Status</Link>
        </button>

        <button className={styles.button}>
          <Link href="/Paginas/EditarUrgencia">Editar Urgência</Link>
        </button>
      </div>
      <br></br>
    2
     
    
    </div>
  );
}

export default EditarDados;
