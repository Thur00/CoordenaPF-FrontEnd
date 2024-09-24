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

            <h1 className={styles.title}>Editar Dados</h1>

            <div className={styles.divbutton}>
        <button className={styles.button}>
        <Link href="/editaraluno">Editar Aluno</Link>
        </button>

        <button className={styles.button}>
        <Link href="/editaraspecto">Editar Aspecto</Link>
        </button>

        <button className={styles.button}>
        <Link href="/editartema">Editar Tema</Link>
        </button>

        <button className={styles.button}>
        <Link href="/editarstatus">Editar Status</Link>
        </button>

        <button className={styles.button}>
        <Link href="/editarurgencia">Editar Urgência</Link>
        </button>

        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Footer></Footer>

        </div>



    )
}

export default EditarDados;