"use client"

import Footer from "@/Components/Footer"
import Header from "@/Components/Header"
import Ocorrencia from "@/Components/Ocorrencia"
import styles from "@/Components/TodasOcorrencias.module.css"
import Link from "next/link"
import { IoSearch } from "react-icons/io5";

export default function TodasOcor() {
    return (
        <main>
            <Header />
            <h1 className={styles.titulo} > Todas as ocorrências </h1>
            <br></br>
            <div className={styles.pesquisafiltro}>
                <div className={styles.pesquisa}>
                    <input type="text" />
                    <button> <IoSearch /> </button>
                </div>
                <div className={styles.filtro}>
                    <button className={styles.butfiltro}> RM </button>
                    <button className={styles.butfiltro}> NOME </button>
                    <button className={styles.butfiltro}> TEMA </button>
                    <button className={styles.butfiltro}> DATA </button>
                    <button className={styles.butfiltro}> STATUS </button>
                    <button className={styles.butfiltro}> URGÊNCIA </button>
                </div>
            </div>
            <Ocorrencia />
            <br></br>
            <Link href="https://quizizz.com/" ><button className="botaovoltar"> Voltar </button></Link>
            <Footer />
        </main>
    )
}