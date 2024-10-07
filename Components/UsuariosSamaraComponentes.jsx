"user Client"

import styles from "@/Components/UsuariosComponentes.module.css";
import Link from "next/link";



export default function UsuSamara() {
    return (
    

<div className={styles.caixa1}>
    <p className={styles.p}>Samara - Coordenadora Pedagógica</p>
    <Link href="https://quizizz.com/" ><button type="button" className={styles.b2}>Gerenciar</button></Link>
    
</div>


        
    )
}

