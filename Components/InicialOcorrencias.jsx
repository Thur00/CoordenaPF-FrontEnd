"user Client"

import styles from "@/Components/InicialComponentes.module.css"
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

function InicialOcorrencia(props) {
const{nome, tema, turma, urgencia} = props 

 return (
        <>
            <Link className={styles.boxOcor} href="/Paginas/VisualizarOcorrencia">
            <div className={styles.a}>
                <div className={styles.titletematurma}>
                    <p> {nome} te solicitou nessa ocorrência </p>
                    <p> Tema: {tema} </p>
                    <p> Turma: {turma} </p>
                </div>
                <div className={styles.urgenciadatastatus}>
                    <div className={styles.urgencia1}><p> {urgencia} </p></div>
                    <div className={styles.datastatus}>
                        <p> 03/09/24 </p>
                        <CiCircleCheck className={styles.icons}/>
                    </div>
                </div>
            </div>
            </Link>            
        </>
    )
}

export default InicialOcorrencia