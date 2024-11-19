"user Client"

import styles from "@/Components/VisualizarOcorrencia.module.css"
import Link from "next/link";


function SegundoBotaoVisualizar() {
 return (
        <>
           
    <button
    className={styles.b2}>Gerar Documento</button>
    
    <Link href="/Paginas/PaginaInicial" ><button  className={styles.b1}>Voltar</button></Link>
          
       </>
    )
}

export default SegundoBotaoVisualizar