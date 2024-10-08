"use client"
import styles from "@/Components/Login.module.css"
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

                <a href="https://www.w3schools.com/css/css_form.asp">Esqueceu sua senha?</a>

                <button className={styles.botao} type="submit">Acessar</button>
            </div>

        </main>
    )


}

export default Login