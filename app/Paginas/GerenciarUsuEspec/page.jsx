"use client"

import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import styles from "@/Components/Perfil.module.css"
import Link from "next/link"

export default function Usuario(){

   

    return(
        <>

        <Header/>
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
       <Link  href="/Paginas/Usuarios" ><button className={styles.botao}> Voltar </button></Link>
        <button className={styles.botao} > Desligar </button>
     
        </div></div>

        <Footer/>

        </>
    )
}

