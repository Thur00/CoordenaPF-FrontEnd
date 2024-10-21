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



                <form className={styles.form}>
                    <div className={styles.datatime}>
                    
                    <div className={styles.um}>
                    <label>Data: </label>
                    <input className={styles.input4} type="date" name="date" />
                    </div>


                    <div>
                    <label>Horário: </label>
                    <input className={styles.input} type="time" name="hora" />
                    </div></div>

                    <div className={styles.init}>

                    <div className={styles.dois}>
                    <label for="iniciativa">Iniciativa: </label>
                    <select className={styles.input2} id="iniciativa" name="iniciativa">
                        <option value="null"></option>
                        <option value="fam/resp">Família/Responsáveis</option>
                        <option value="profsaude">Profissionais da saúde</option>
                        <option value="DES">DES</option>
                        <option value="CP">CP</option>
                        <option value="OE">OE</option>
                        <option value="CP">CP</option></select>
                        </div>    

                        <div>
                        <label for="aspecto">Aspecto: </label>
                        <select className={styles.input7} id="aspecto" name="aspecto">
                        <option value="null"></option>
                        <option value="ped">Pedagógico</option>
                        <option value="disc">Disciplinar</option>
                        <option value="adm">Administrativo</option></select>
                        </div></div>
                        
                        <div className={styles.tema}>

                        <div className={styles.tres}> 
                        <label for="tema">Tema: </label>
                        <select className={styles.input8}  name="tema" id="tema">
                            <option value="null"></option>
                            <option value="comp">Comportamental</option>
                            <option value="emocional">Emocional</option>
                            <option value="dano">Dano ao patrimônio</option>
                        </select></div>   

                        <div>
                        <label for="urgencia">Urgência: </label>
                        <select className={styles.input9}  name="urgencia" id="urgencia">
                            <option value="null"></option>
                            <option value="mturg">Muito urgente</option>
                            <option value="urg">Urgente</option>
                            <option value="pcurg">Pouco urgente</option>
                        </select>
                        </div></div>

                        <div className={styles.aluno}>

                        <div className={styles.quat}>   
                        <label for="aluno">Estudante(s): </label>
                        <input className={styles.input10} type="text" id="aluno" name="aluno"/></div>


                        <div className={styles.cinc}>
                        <label for="turma">Turma: </label>
                        <input  className= {styles.input11} type="text" id="turma" name="turma" disabled/></div>


                        <div>
                        <label for="rm">RM: </label>
                        <input type="text" id="rm" name="rm" disabled/>
                        </div></div>


                        <div className={styles.resp}>

                         <div className={styles.seis}>   
                        <label for="resp">Responsável: </label>
                        <input className={styles.input5}  type="text" id="resp" name="resp"/></div>


                        <div>
                        <label for="esp">Especialista: </label>
                        <input className={styles.input6}  type="text" id="esp" name="esp"/>
                        </div></div>

                        <div className={styles.mes}>
                        <textarea name="message" rows="10" cols="110">Descrição da ocorrência</textarea>
                        </div>


                        <div className={styles.enc}>
                        <label for="enc">Encaminhamento: </label>
                        <select className={styles.input3} id="enc" name="enc">
                        <option value="null"></option>
                        <option value="ped">Advertência verbal</option>
                        <option value="disc">Advertência escrita</option>
                        <option value="adm">Suspensão de 01 dia</option></select>
                        </div>
                       
                </form>
     

    <div>
    <SegundoBotaoVisualizar></SegundoBotaoVisualizar>
    </div>
    
   <Footer></Footer>
</div>
            
    )
}