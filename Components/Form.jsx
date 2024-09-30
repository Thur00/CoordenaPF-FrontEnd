"use client"

import styles from "@/Components/AdicionarAluno.module.css"

function Form() {
return(
    <form className={styles.divinput}>
                    <input className={styles.input} type="number" id="rm" placeholder="RM" />

                    <input className={styles.input} type="text" id="nome" placeholder="Nome" />

                    <input className={styles.input} type="text" id="turma" placeholder="Turma" />

                    <input className={styles.input} type="text" id="responsável" placeholder="Responsável" />

                    <input className={styles.input} type="number" id="ano" placeholder="Ano" />
                </form> 
)
}

export default Form;
