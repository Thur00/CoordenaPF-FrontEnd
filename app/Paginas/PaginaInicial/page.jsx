"use client"

import styles from "@/Components/InicialComponentes.module.css"
import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import InicialOcorrencia from "@/Components/InicialOcorrencias";
import Link from "next/link";


const inicial = () => {
    return (
        <div>
            <Header></Header>

            <br></br>

            <div className={styles.bt}>
            <Link href="https://quizizz.com/" ><button  className={styles.b1}>Criar ocorrência </button></Link>
            <Link href="https://quizizz.com/" ><button  className={styles.b1}>Ocorrência </button></Link>
            <Link href="https://quizizz.com/" ><button  className={styles.b1}>Editar Dados </button></Link>
   
         
</div>

<br></br>
<br></br>

<div className={styles.tudo}>
<h2 className={styles.h4}>Notificações</h2>
<h1 className={styles.titulo}>Você foi mencionado recentemente:</h1>

<div className={styles.boxTodasOcor}>
<InicialOcorrencia></InicialOcorrencia>


</div>
</div>



<div className={styles.footer}>
<Footer></Footer>
</div>

           
        </div>



    )
}

export default inicial;