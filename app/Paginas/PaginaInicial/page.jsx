"use client"

import styles from "@/Components/InicialComponentes.module.css"
import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import InicialOcorrencia from "@/Components/InicialOcorrencias";


const inicial = () => {
    return (
        <div>
            <Header></Header>

            <br></br>

            <div className={styles.bt}>
    <button  className={styles.b1}>Criar ocorrência </button>
    <button  className={styles.b2}>Ocorrência </button> 
    <button  className={styles.b3}>Editar Dados </button>    
         
</div>

<br></br>
<br></br>

<h2 className={styles.h4}>Notificações</h2>
<h1 className={styles.titulo}>Você foi mencionado recentemente:</h1>

<InicialOcorrencia></InicialOcorrencia>







            <Footer></Footer>
        </div>

    )
}

export default inicial;