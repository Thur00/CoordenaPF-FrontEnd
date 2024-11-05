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
       <Link className={styles.button} href="/Paginas/EditarAluno">Editar Aluno <button>
          </button></Link>
        

        <Link className={styles.button} href="/Paginas/EditarAspecto">Editar Aspecto<button className={styles.but}>
         </button> </Link>
        

        <Link  className={styles.button} href="/Paginas/EditarTema">Editar Tema<button className={styles.but}>
         </button> </Link>
        

       <Link className={styles.button} href="/Paginas/EditarStatus">Editar Status <button className={styles.but}>
            </button></Link>
      

          <Link className={styles.button} href="/Paginas/EditarUrgencia">Editar Urgência<button className={styles.but}>
          </button></Link>
      
          <Link className={styles.button}href="/Paginas/EditarEncaminhamento">Editar Encaminhamento<button className={styles.but}>
          </button></Link>
      </div>
      <br></br>
    2
     
    
    </div>
  );
}

export default EditarDados;
