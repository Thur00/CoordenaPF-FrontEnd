"use client"

import styles from "@/Components/Perfil.module.css"
import BotaoVoltar from "@/Components/BotaoVoltar"

export default function Usuario() {

    return (
        <>
            <div className={styles.body}>
                <h1 className={styles.tit2}>Samara</h1>
                <p className={styles.p}>Coordenadora Pedagógica</p>

                <div className={styles.input}>
                    <input className={styles.um} type="text" placeholder="Nome:" />
                    <input className={styles.um} type="text" placeholder="E-mail:" />
                    <input className={styles.um} type="text" placeholder="Senha:" />
                    <input className={styles.um} type="text" placeholder="CPF:" />
                </div>

                <div className={styles.botoes}>
                    <BotaoVoltar link= "/Paginas/usuarios" />
                    <button className={styles.botao} > Desligar </button>
                </div>

            </div>
        </>
    )
}

