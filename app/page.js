"use client"
import styles from "@/Components/Login.module.css"
import { IoMdPerson } from "react-icons/io";
import { PiLockKeyFill } from "react-icons/pi";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import React, { useState } from 'react';
import Link from "next/link";

const Login = () => {
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

                <div className={styles.divPesquisa}>

                <div className={styles.pesquisa}>
                    <IoMdPerson />
                    <input type="text" id="login" placeholder="Login" />
                </div>

                <div className={styles.pesquisa}>
                <div className={styles.cadeado}><PiLockKeyFill /></div>
                    <input
                            type={isVisible ? 'text' : 'password'}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Senha"
                        />
                        {isTyping && (
                            <button className={styles.olho} onClick={DeixarVisivel}>
                                {isVisible ? <FaRegEye/> : <FaRegEyeSlash/>}
                            </button>
                        )}
                    </div>
                
                </div>

                <Link href="./User/RedefinirSenha">Esqueceu sua senha?</Link>

                <button className={styles.botao} type="submit" >Acessar</button>
                
                <a className={styles.referencia} href="https://pt.vecteezy.com/vetor-gratis/vermelho">Vermelho Vetores por Vecteezy</a>
                
            </div>
            
        </main>
    )

}

export default Login