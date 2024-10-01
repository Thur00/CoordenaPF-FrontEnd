"user Client"

import styles from "@/Components/VisualizarOcorrencia.module.css"
import Link from "next/link";


function BotaoVisualizar() {
 return (
        <>
           
    <Link href="/Paginas/AdicionarStatus" ><button  className={styles.b1}>Mudar Status</button></Link>
    <Link href="/Paginas/Usuario" ><button  className={styles.b1}>Solicitar</button></Link>

         
          
        </>
    )
}

export default BotaoVisualizar