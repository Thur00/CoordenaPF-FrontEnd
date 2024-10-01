"use client"

import React from "react";
import Link from "next/link";
import styles from "@/Components/Adicionar.module.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const AddStatus = () => {

    function mostrar(elemento){
        var display = document.getElementById(elemento).style.display;
          if(display == "none"){
              document.getElementById(elemento).style.display = 'block';
          }else{
              document.getElementById(elemento).style.display = 'none';
          }    
      }
    
    return (
        <div>
            <Header></Header>
            <br></br>
            <div>
                <h1 className={styles.title}>Adicionar Status</h1>
                <br></br>
                <br></br>

<div className={styles.divt}>
    <div className={styles.table}>
            <table>
                <th>ID</th>
                <th>TIPO DE STATUS</th>
            </table>
            </div>
    <br></br>

<div className={styles.diveditar}> 
        <button className={styles.editarbutton}>
        <Link href="/editarrm">Editar</Link>
        </button>

        <button className={styles.editarbutton}>
        <Link href="/editarnome">Editar</Link>
        </button>

        <button className={styles.editarbutton}>
        <Link href="/editarstatus">Editar</Link>
        </button>
        </div>

        </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>


        <div>
        <button onclick={mostrar}>Adicionar</button>
        </div>
        <br></br>
        <br></br>
       


        <div className={styles.divinput}>
        <input className={styles.input} type="text" id="rm" placeholder="Tipode Status" />
        </div>
        <br></br>
<br></br>


        <div>
        <button className={styles.salvarbutton}>
        <Link href="/editaraluno">Salvar</Link>
        </button>

        <button className={styles.cancelarbutton}>
        <Link href="/editaraluno">Cancelar</Link>
        </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>

        <Footer></Footer>

        </div>


    )
}

export default AddStatus;