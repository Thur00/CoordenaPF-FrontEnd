"use client"

import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import styles from "@/Components/Perfil.module.css"

export default function MeuPerfil(){
    return(
        <>

        <Header/>

        <h1 className={styles.tit}> Meu perfil </h1>

        <div>
        <input type="text" placeholder="Nome:" />
        <input type="text" placeholder="E-mail:" />
        <input type="text" placeholder="CPF:" />
        <input type="text" placeholder="Senha:" />
        </div>

        <button className={styles.botao}> Voltar </button>
        <button className={styles.botao}> Editar </button>

        <Footer/>

        </>
    )
}