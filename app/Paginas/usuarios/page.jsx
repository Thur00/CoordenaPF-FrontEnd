"use client"

import styles from "@/Components/UsuariosComponentes.module.css"
import React from "react";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Usuario from "@/Components/UsuariosSamaraComponentes";
import UsuarioAle from "@/Components/UsuarioAlessandraComponents";


export default function Home() {
  return (
<div >
  
<Header></Header>
<br></br>
 <div className={styles.bt}>
 <h1 className={styles.h1}>Usuário</h1>   
<button className={styles.b1} >Adicionar usuário</button>
</div>

<div className={styles.caixas}>

<Usuario></Usuario>

<UsuarioAle></UsuarioAle>

<div className={styles.footer}>
<Footer></Footer>  
</div>

</div>
</div>
 

  );
}
