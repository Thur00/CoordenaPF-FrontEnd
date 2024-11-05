"user Client"

import styles from "@/Components/UsuariosComponentes.module.css";
import Link from "next/link";


function BotaoAdicionarUsuario() {
 return (
        <>
     <h1 className={styles.h1}>Usuários</h1>   
     <Link href="/Paginas/AdicionarUsuario" ><button className={styles.b1} >Adicionar usuário</button></Link>
          
        </>
    )
}

export default BotaoAdicionarUsuario