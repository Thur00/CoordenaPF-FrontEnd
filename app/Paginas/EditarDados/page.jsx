"use client"

import React from "react";
import Link from "next/link";
import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import styles from "@/Components/EditarDados.module.css"


function EditarDados() {
    return (
        <div>
            <Header></Header>
            <br></br>
            <br></br>

            <h1 className={styles.title}>Editar Dados</h1>

            <div className={styles.divbutton}>
        <button className={styles.button}>
        <Link href="/Paginas/AdicionarAluno">Editar Aluno</Link>
        </button>

        <button className={styles.button}>
        <Link href="/Paginas/AdicionarAspecto">Editar Aspecto</Link>
        </button>

        <button className={styles.button}>
        <Link href="/Paginas/AdicionarTema">Editar Tema</Link>
        </button>

        <button className={styles.button}>
        <Link href="/Paginas/AdicionarStatus">Editar Status</Link>
        </button>

        <button className={styles.button}>
        <Link href="/Paginas/AdicionarUrgencia">Editar Urgência</Link>
        </button>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <Footer></Footer>

        </div>



    )
}

export default EditarDados;