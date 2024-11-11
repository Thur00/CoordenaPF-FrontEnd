"user Client"

import styles from "@/Components/UsuariosComponentes.module.css";
import Link from "next/link";


function BotaoAdicionarUsuario() {
 return (
        <>
     
     <Link href="/Paginas/AdicionarUsuario" ><button className={styles.b1} >Adicionar usuário</button></Link>
          
        </>
    )
}

export default BotaoAdicionarUsuario