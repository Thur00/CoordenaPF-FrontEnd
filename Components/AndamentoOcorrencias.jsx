"user Client"

import styles from "@/Components/InicialComponentes.module.css"
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";
import { CiClock2 } from "react-icons/ci";
import { CiCircleAlert } from "react-icons/ci";

function AndamentoOcorrencias() {
 return (
        <>
            <Link className={styles.boxOcor} href="https://quizizz.com/">
            <div className={styles.a}>
                <div className={styles.titletematurma}>
                    <p> Samara te solicitou nessa ocorrência </p>
                    <p> Tema: Bullying </p>
                    <p> Turma: 1º ano A </p>
                </div>
                <div className={styles.urgenciadatastatus}>
                    <div className={styles.urgencia1}><p> Muito Urgente </p></div>
                    <div className={styles.datastatus}>
                        <p> 28/09/24 </p>
                        <CiCircleCheck className={styles.icons}/>
                    </div>
                </div>
            </div>
            </Link>

            <Link className={styles.boxOcor2} href="https://quizizz.com/">
            <div className={styles.a}>
                <div className={styles.titletematurma}>
                    <p> Samara te solicitou nessa ocorrência </p>
                    <p> Tema: Comportamental </p>
                    <p> Turma: 9º ano A </p>
                </div>
                <div className={styles.urgenciadatastatus}>
                    <div className={styles.urgencia2}><p> Pouco Urgente </p></div>
                    <div className={styles.datastatus}>
                        <p> 30/09/24 </p>
                        <CiClock2 className={styles.icons}/>
                    </div>
                </div>
            </div>
            </Link>

            <Link className={styles.boxOcor3} href="https://quizizz.com/">
            <div className={styles.a}>
                <div className={styles.titletematurma}>
                    <p> Samara te solicitou nessa ocorrência </p>
                    <p> Tema: Indiciplina </p>
                    <p> Turma: 9º ano A </p>
                </div>
                <div className={styles.urgenciadatastatus}>
                    <div className={styles.urgencia3}><p> Urgente </p></div>
                    <div className={styles.datastatus}>
                        <p> 03/09/24 </p>
                        <CiCircleAlert className={styles.icons}/>
                    </div>
                </div>
            </div>
            </Link>
        </>
    )
}

export default AndamentoOcorrencias