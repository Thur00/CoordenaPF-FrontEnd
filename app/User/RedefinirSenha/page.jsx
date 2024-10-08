"use client"

import styles from "@/Components/Login.module.css"
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";

export default function TodasOcor() {
    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <div className={styles.titulobox} >
                    <h1 className={styles.texto1} > Coordena </h1>
                    <h1 className={styles.texto2} > SESI </h1>
                </div>

                <h3 className={styles.texto1}> Recuperar senha </h3>

                <div className={styles.pesquisa}>
                    <IoMdPerson />
                    <input type="text" placeholder="E-mail" />
                </div>

               <Link href="../User/RedefinirSenha2"><button className={styles.botao}> Enviar </button></Link>

            </div>
            
        </main>
    )
}