"user Client"

import styles from "@/Components/UsuariosComponentes.module.css";
import Link from "next/link";



export default function UsuarioAle() {
    return (
        
<div className={styles.caixa1}>
    <p className={styles.p}>Alessandra - Orientadora Pedagógica</p>
    <Link href="https://quizizz.com/"  className={styles.Link}><button type="button" className={styles.b21}>Gerenciar</button></Link>
    
</div>


        
    )
}