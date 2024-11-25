"use client";

import styles from "@/Components/InicialComponentes.module.css";
import { generateLightAndDarkColors } from "../utils/colorUtils";
import { CiCircleCheck } from "react-icons/ci";
import { useRouter } from "next/navigation";

import { LuClock4 } from "react-icons/lu";
import {
  FaClockRotateLeft,
  FaRegCirclePause,
  FaRotateLeft,
  FaRegCircleCheck,
  FaCheck,
  FaExclamation,
  FaPause,
  FaHourglassEnd,
  FaRegHourglass,
} from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdNearbyError } from "react-icons/md";

function Ocorrencia(props) {
  const { nome, tema, turma, data, status, urgencia, cor, id } = props;
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

  const viewIcon = () => {
    switch (status) {
      case 1:
        return <LuClock4 className={styles.icons} />;
        break;
      case 2:
        return <FaClockRotateLeft className={styles.icons} />;
        break;
      case 3:
        return <FaRegCirclePause className={styles.icons} />;
        break;
      case 4:
        return <FaRotateLeft className={styles.icons} />;
        break;
      case 5:
        return <FaRegCircleCheck className={styles.icons} />;
        break;
      case 6:
        return <FaCheck className={styles.icons} />;
        break;
      case 7:
        return <FaExclamation className={styles.icons} />;
        break;
      case 8:
        return <FaPause className={styles.icons} />;
        break;
      case 9:
        return <FaHourglassEnd className={styles.icons} />;
        break;
      case 10:
        return <FaRegHourglass className={styles.icons} />;
        break;
      case 11:
        return <IoAlertCircleOutline className={styles.icons} />;
        break;
      default:
        return <MdNearbyError className={styles.icons} />;
        break;
    }
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
              {viewIcon()}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Ocorrencia;
