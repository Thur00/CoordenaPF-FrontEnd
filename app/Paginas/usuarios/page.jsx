"use client"

import styles from "@/Components/UsuariosComponentes.module.css"
import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";

export default function Home() {
  return (
<div >
  
<Header></Header>
<br></br>
 <div className={styles.bt}>
 <h1 className={styles.h1}>Usuário</h1>   
<button className={styles.b1} >Adicionar usuário </button>
{/* <i class="material-icons">add_circle_outline</i> */}
</div>

<div className={styles.caixas}>
<div className={styles.caixa1}>
    <p className={styles.p}>Cleide - Diretora</p>
    <button type="button" className={styles.b3}>Gerenciar</button>
</div>

<div className={styles.caixa2}>
    <p className={styles.p}>Samara - Coordenadora Pedagógica</p>
    <button type="button" className={styles.b2}>Gerenciar</button>
    
</div>

<div className={styles.caixa2}>
    <p className={styles.p}>Alessandra - Orientadora Pedagógica</p>
    <button type="button" className={styles.b2}>Gerenciar</button>
    
</div>
<Footer></Footer>  
</div>
</div>
 

  );
}
