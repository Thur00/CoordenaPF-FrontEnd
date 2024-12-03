"user Client"

import styles from "@/Components/InicialComponentes.module.css"
import Link from "next/link";
import { CgAdd } from "react-icons/cg";
import { CgFileDocument } from "react-icons/cg";


function BotaoInicial() {
    return (
        <>
        
            <Link href="/Paginas/CriarOcorrencia" >
                <button className={styles.b1}> <CgAdd className={styles.icon}> </CgAdd> Criar ocorrência </button>
            </Link>

            <Link href="/Paginas/TodasOcorrencias" >
                <button className={styles.b1}><CgFileDocument className={styles.icon}></CgFileDocument>Ocorrência </button>
            </Link>

            <Link href="/Paginas/EditarDados">
                <button className={styles.b1}><CgAdd className={styles.icon}></CgAdd>Editar Dados </button>
            </Link>
            
        </>
    )
}

export default BotaoInicial