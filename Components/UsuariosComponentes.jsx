"user Client"

import styles from "@/Components/UsuariosComponentes.module.css"
import Link from "next/link";



export default function Usuarios(props) {
const {nome, cargo} = props

    return (
    
<div className={styles.caixas}>
<div className={styles.caixa1}>
    <p className={styles.p}>{nome} - {cargo}</p>
    <Link href="../Paginas/GerenciarUsuEspec" className={styles.link}><button type="button" className={styles.b2}>Gerenciar</button></Link>
    
</div>

        
<div className={styles.caixa1}>
    <p className={styles.p}>{nome} - {cargo}</p>
    <Link href="../Paginas/GerenciarUsuEspec"  className={styles.Link}><button type="button" className={styles.b21}>Gerenciar</button></Link>
    
</div>
</div>
        
    )
}

