"use client"

import styles from "@/Components/Login.module.css"
import { PiLockKeyFill } from "react-icons/pi";

export default function TodasOcor() {
    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <div className={styles.titulobox} >
                    <h1 className={styles.texto1} > Coordena </h1>
                    <h1 className={styles.texto2} > SESI </h1>
                </div>

                <div className={styles.divPesquisa}>
                    <div className={styles.pesquisa}>
                        <PiLockKeyFill />
                        <input type="text" placeholder="Nova senha" />
                    </div>

                    <div className={styles.pesquisa}>
                        <PiLockKeyFill />
                        <input type="text" placeholder="Confirmar senha" />
                    </div>
                </div>


                <button className={styles.botao}> Salvar </button>

            </div>
        </main>
    )
}