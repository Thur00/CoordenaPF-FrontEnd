"user Client"

import styles from "@/Components/VisualizarOcorrencia.module.css"
import Link from "next/link";


function SegundoBotaoVisualizar() {
 return (
        <>
           
    <Link href="/Paginas/AdicionarStatus" ><button  className={styles.b1}>Gerar Documento</button></Link>
    <Link href="/Paginas/PaginaInicial" ><button  className={styles.b1}>Voltar</button></Link>
          
        </>
    )
}

export default SegundoBotaoVisualizar