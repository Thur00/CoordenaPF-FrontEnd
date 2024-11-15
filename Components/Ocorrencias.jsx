"user Client";

import styles from "@/Components/InicialComponentes.module.css";
import Link from "next/link";
import { CiCircleCheck } from "react-icons/ci";

// function Ocorrencia(props) {
//     const { nome, tema, turma, data, urgencia, cor } = props

//     const formattedDate = new Date(data).toLocaleDateString("pt-BR", {
//         day: "2-digit",
//         month: "2-digit",
//         year: "numeric"
//     });

//     function ajustarTom(cor, percentual) {
//         let r = parseInt(cor.slice(1, 3), 16);
//         let g = parseInt(cor.slice(3, 5), 16);
//         let b = parseInt(cor.slice(5, 7), 16);

//         r = Math.min(255, Math.max(0, r + (r * percentual / 100)));
//         g = Math.min(255, Math.max(0, g + (g * percentual / 100)));
//         b = Math.min(255, Math.max(0, b + (b * percentual / 100)));

//         return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
//     }

//     return (
//         <>
//             <Link className={styles.boxOcor} href="/Paginas/VisualizarOcorrencia">
//                 <div className={styles.a}>
//                     <div className={styles.titletematurma}>
//                         <p> Ocorrência criada por {nome} </p>
//                         <p> Tema: {tema} </p>
//                         <p> Turma: {turma} </p>
//                     </div>
//                     <div className={styles.urgenciadatastatus}>
//                         <div className={styles.urgencia1}><p> {urgencia} </p></div>
//                         <div className={styles.datastatus}>
//                             <p>{formattedDate} </p>
//                             <CiCircleCheck className={styles.icons} />
//                         </div>
//                     </div>
//                 </div>
//             </Link>
//         </>
//     )
// }

// export default Ocorrencia

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
