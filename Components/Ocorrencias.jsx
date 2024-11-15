"user Client";

import styles from "@/Components/InicialComponentes.module.css";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

function Ocorrencia(props) {
  const { nome, tema, turma, data, urgencia, cor } = props;

  const formattedDate = new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const getUrgencyClass = () => {
    if (urgencia === "Muito Urgente") return styles.boxOcor;
    if (urgencia === "Urgente") return styles.boxOcor2;
    if (urgencia === "Pouco Urgente") return styles.boxOcor3;
    return styles.boxOcor; // padrão
  };

  return (
    <>
      <Link className={getUrgencyClass()} href="/Paginas/VisualizarOcorrencia">
        <div className={styles.a}>
          <div className={styles.titletematurma}>
            <p> Ocorrência criada por {nome} </p>
            <p> Tema: {tema} </p>
            <p> Turma: {turma} </p>
          </div>
          <div className={styles.urgenciadatastatus}>
            <div className={styles.urgencia1}>
              <p> {urgencia} </p>
            </div>
            <div className={styles.datastatus}>
              <p>{formattedDate} </p>
              <CiCircleCheck className={styles.icons} />
            </div>
          </div>
        </div>
      </Link>
    </>
  );
}
export default Ocorrencia;
