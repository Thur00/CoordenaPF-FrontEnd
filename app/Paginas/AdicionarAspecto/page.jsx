"use client"

import React, { useState } from "react";
import Link from "next/link";
import styles from "@/Components/Adicionar.module.css";
import Header from "@/Components/Header";
import Footer from "@/Components/Footer";


const AddAspecto = () => {
    const [error, setError] = useState(null);
    
    const getAdiconar = async () => {
    

        try{
            <div className={styles.divinput}>
            <input className={styles.input} type="number" id="rm" placeholder="Tipo de Aspecto"  />
    
            </div>
            []
            setError(null);
        }catch (error){
            console.error ("Erro fetching Pokemon:", error);
            setError("Falha na busca Pokemon, tente novamente");
        }

    }
    return (
        <div>
            <Header></Header>
            <br></br>
            <div>
                <h1 className={styles.title}>Adicionar Aspecto</h1>
                <br></br>
                <br></br>

<div className={styles.divt}>
    <div className={styles.table}>
            <table>
                <th>ID</th>
                <th>ASPECTO</th>
            </table>
            </div>
    <br></br>

<div className={styles.diveditar}> 
        <button className={styles.editarbutton}>
        <Link href="/editar">Editar</Link>
        </button>

        <button className={styles.editarbutton}>
        <Link href="/editar">Editar</Link>
        </button>

        <button className={styles.editarbutton}>
        <Link href="/editar">Editar</Link>
        </button>
        </div>

        </div>
    <br></br>
    <br></br>
    <br></br>


        <div>
            <button className={styles.addbutton} onClick={getAdiconar} type="submit">Adicionar</button>
        </div>
        <br></br>
        <br></br>

        <br></br>
<br></br>


        <div>
        <button className={styles.salvarbutton}>
        <Link href="/editaraspecto">Salvar</Link>
        </button>

        <button className={styles.cancelarbutton}>
        <Link href="/editaraspecto">Cancelar</Link>
        </button>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        </div>

        <Footer></Footer>

        </div>


    )
}

export default AddAspecto;