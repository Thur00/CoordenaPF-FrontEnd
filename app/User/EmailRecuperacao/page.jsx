"use client"

import styles from "@/Components/Login.module.css"
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";

export default function EmailRecuperacao() {
    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <div className={styles.titulobox} >
                    <h1 className={styles.texto1} > Coordena </h1>
                    <h1 className={styles.texto2} > SESI </h1>
                </div>

                <h3 className={styles.texto1}> Recuperar senha </h3>

                <div className={styles.divPesquisa}>

                    <div className={styles.pesquisa}>
                        <IoMdPerson />
                        <input type="text" id="cpf" placeholder="Login" />
                    </div>

                    <div className={styles.pesquisa}>
                        <IoMdPerson />
                        <input type="password" name="senha" id="senha" placeholder="CPF" />
                    </div>

                </div>

                <Link href="../User/RedefinirSenha2"><button className={styles.botao}> Enviar </button></Link>

                <a className={styles.referencia} href="https://pt.vecteezy.com/vetor-gratis/vermelho">Vermelho Vetores por Vecteezy</a>

            </div>

        </main>
    )
}