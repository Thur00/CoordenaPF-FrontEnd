"use client"

import Header from "@/Components/Header"
import Footer from "@/Components/Footer"
import styles from "@/Components/Perfil.module.css"

export default function MeuPerfil(){
    return(
        <>
        <Header/>
        <h1> Meu perfil </h1>
        <button> Gerenciar usuários </button>
        <button> Voltar </button>
        <button> Editar </button>
        <Footer/>
        </>
    )
}