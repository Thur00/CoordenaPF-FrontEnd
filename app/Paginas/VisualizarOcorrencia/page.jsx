"Use Client"

import Header from "@/Components/Header";
import Footer from "@/Components/Footer";
import styles from "@/Components/VisualizarOcorrencia.module.css";
import BotaoVisualizar from "@/Components/BotaoVisuOcorrencia";
import SegundoBotaoVisualizar from "@/Components/SegundoBotaoVisualizar";

export default function Visualizar(){

    return(

        <div>
            
            <Header></Header>

    <div className={styles.tudo}>
    <h1>Ocorrencia</h1>
    <p className={styles.data}>Data: 01/10/2024</p>
    <p className={styles.urgencia1}> Muito Urgente </p>                     
   </div>

  <div>
     <BotaoVisualizar></BotaoVisualizar>
    </div>


    <div>
    <SegundoBotaoVisualizar></SegundoBotaoVisualizar>
    </div>
   <Footer></Footer>
</div>
            
    )
}