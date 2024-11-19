"use client";

import styles from "@/Components/InicialComponentes.module.css";
import Link from "next/link";
import { generateLightAndDarkColors } from "../utils/colorUtils";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect } from "react";

function Ocorrencia(props) {
  const { nome, tema, turma, data, urgencia, cor } = props;
  const { lighter, darker } = generateLightAndDarkColors(cor);

  const formattedDate = new Date(data).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const router = useRouter();

  const handleClick = () => {
    router.push(`/Paginas/VisualizarOcorrencia?id=${id}`);
  };

  return (
    <>
      <div
        className={styles.boxOcor}
        style={{
          "--ncolor": cor,
          "--lcolor": lighter,
          "--dcolor": darker,
        }}
        onClick={handleClick (`Paginas/VisualizarOcorrencia`)}
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
              <p>{formattedDate} </p>
              <CiCircleCheck className={styles.icons} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ocorrencia;
