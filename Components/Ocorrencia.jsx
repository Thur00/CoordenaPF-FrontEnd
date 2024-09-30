"user Client"

import styles from "@/Components/TodasOcorrencias.module.css"
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

function Ocorrencia() {
    return (
        <>
            <Link className={styles.boxOcor} href="https://quizizz.com/">
            <div className={styles.a}>
                <div className={styles.titletematurma}>
                    <p> Samara te solicitou nessa ocorrência </p>
                    <p> Tema: Cyberbullying </p>
                    <p> Turma: 9º ano A </p>
                </div>
                <div className={styles.urgenciadatastatus}>
                    <div className={styles.urgencia1}><p> Muito Urgente </p></div>
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

export default Ocorrencia