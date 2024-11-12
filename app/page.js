"use client"
import styles from "./page.module.css"
import { IoMdPerson } from "react-icons/io";
import { PiLockKeyFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import Link from "next/link";


export default function Login() {
    const [cpf, setCpf] = useState('');
    const [senha, setSenha] = useState('');
    const [error, setError] = useState('');
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch('${API_URL}/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ cpf, senha }),
        });

        const data = await res.json();

        if (res.ok) {
            // Login bem-sucedido, redirecionar ou mostrar mensagem
            alert(data.message);
        } else {
            // Mostrar erro
            setError(data.message);
        }
    };

    const [password, setPassword] = useState('');
    const [isVisible, setIsVisible] = useState(false);

    const DeixarVisivel = () => {
        setIsVisible(!isVisible);
    };

    const isTyping = password.length > 0

    return (
        <main className={styles.main}>

            <div className={styles.box}>
                <div className={styles.titulobox}>
                    <h1 className={styles.texto1}> Coordena </h1>
                    <h1 className={styles.texto2}>SESI</h1>
                </div>

                <form className={styles.divPesquisa} onSubmit={handleSubmit}>

                    <div className={styles.pesquisa}>
                        <IoMdPerson />
                        <input value={cpf}
                            onChange={(e) => setCpf(e.target.value)}
                            required
                            placeholder="Login" />
                    </div>

                    <div className={styles.pesquisa}>
                        <div className={styles.cadeado}><PiLockKeyFill /></div>
                        <input
                            type={isVisible ? 'text' : 'password'}
                            value={senha}
                            onChange={(e) => setSenha(e.target.value)}
                            placeholder="Senha"
                        />
                        {isTyping && (
                            <button className={styles.olho} onClick={DeixarVisivel}>
                                {isVisible ? <FaRegEye /> : <FaRegEyeSlash />}
                            </button>
                        )}
                    </div>


                    <Link href="./User/RedefinirSenha">Esqueceu sua senha?</Link>

                    <Link href="./Paginas/PaginaInicial" > <button className={styles.botao} type="submit" >Acessar</button> </Link>
                </form>

                <a className={styles.referencia} href="https://pt.vecteezy.com/vetor-gratis/vermelho" target="blank">Vermelho Vetores por Vecteezy</a>

            </div>

        </main >
    )

}

