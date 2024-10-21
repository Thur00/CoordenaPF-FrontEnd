"use client"
import styles from "@/Components/Login.module.css"
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { PiLockKeyFill } from "react-icons/pi";

function Login() {
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
                    <PiLockKeyFill />
                    <input  type="password" name="senha" id="senha" placeholder="Senha" />
                
                </div>
                
                </div>

                <Link href="/User/RedefinirSenha">Esqueceu sua senha?</Link>

               <Link href="../Paginas/PaginaInicial"><button className={styles.botao} type="submit">Acessar</button></Link>
            </div>

        </main>
    )


}

export default Login