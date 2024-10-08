"use client"

import styles from "@/Components/UsuariosComponentes.module.css";
import React from "react";
// import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import Usuario from "@/Components/UsuariosSamaraComponentes";
import UsuarioAle from "@/Components/UsuarioAlessandraComponents";
import BotaoAdicionarUsuario from "@/Components/BotaoAdicionarUsuario";


export default function Usu() {
  return (
<div >
  
{/* <Header></Header> */}
<br></br>
 <div className={styles.bt}>

<BotaoAdicionarUsuario></BotaoAdicionarUsuario>

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
