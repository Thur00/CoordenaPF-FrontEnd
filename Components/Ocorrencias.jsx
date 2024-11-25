"use client";

import styles from "@/Components/InicialComponentes.module.css";
import { generateLightAndDarkColors } from "../utils/colorUtils";
import { CiCircleCheck } from "react-icons/ci";
import { useRouter } from "next/navigation";

function Ocorrencia(props) {
  const { nome, tema, turma, data, urgencia, cor, id } = props;
  const { lighter, darker } = generateLightAndDarkColors(cor);
  const router = useRouter();

  const formattedDate = () => {
    if (data) {
      return new Date(data).toISOString().split("T")[0];
    } else return "";
  };

  const viewDate = () => {
    if (data) {
      const dateStr = formattedDate(); // Retorna uma string no formato aaaa-mm-dd
      const [year, month, day] = dateStr.split("-"); // Desestrutura a string
      return `${day}/${month}/${year}`; // Retorna no formato dd/mm/aaaa
    } else {
      return "Data não encontrada";
    }
  };

  const handleClick = () => {
    router.push(`/Paginas/VisualizarOcorrencia?id=${id}`);
  };

  return (
    <>
      <div
        className={styles.boxOcor}
        style={{
          "--ncolor": cor + "7f",
          "--lcolor": lighter + "7f",
          "--dcolor": darker + "7f",
        }}
        onClick={handleClick}
      >
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
              <p>{viewDate()} </p>
              <CiCircleCheck className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ocorrencia;
