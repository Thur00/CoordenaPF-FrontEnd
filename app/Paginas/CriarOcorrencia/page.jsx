"use client";

import { useEffect, useState } from "react";
import styles from "@/Components/criaroco.module.css";
import Link from "next/link";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

function criaroco() {
  const [data, setData] = useState("");
  const [formData, setFormData] = useState({ id: "", criaroco: "" });
  const [showForm, setShowForm] = useState(false);


  const handleSave = () => {
    if (isEditing) {
      setData(
        data.map((item) => (item.id === editingItem.id ? formData : item))
      );
    } else {
      setData([...data, { ...formData, id: Number(formData.id) }]);
    }
    setShowForm(false);
    setFormData({ id: "", criaroco: "" });
  };

  const getAspecto = async () => {
    try {
      const resposta = await fetch(`${API_URL}/aspectos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca de aspecto", error);
    }
  };

  const getTema = async () => {
    try {
      const resposta = await fetch(`${API_URL}/temas`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca de tema", error);
    }
  };

  
  const getUrgencia = async () => {
    try {
      const resposta = await fetch(`${API_URL}/urgencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca de urgência", error);
    }
  };

  const getEncaminhamento = async () => {
    try {
      const resposta = await fetch(`${API_URL}/encaminhamentos`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
    } catch (error) {
      console.error("Erro na busca de encaminhamento", error);
    }
  };

  

  useEffect(() => {
    getAspecto();
    getTema();
    getUrgencia()
    getEncaminhamento()
  }, []);


  return (
    <main className={styles.main}>
      <h1 className={styles.tit}>Criar nova ocorrência</h1>

      <form className={styles.form}>
        <div className={styles.datatime}>
          <div className={styles.um}>
            <label>Data: </label>
            <input className={styles.input4} type="date" name="date" />
          </div>

          <div>
            <label>Horário: </label>
            <input className={styles.input} type="time" name="hora" />
          </div>
        </div>

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
              <option value="CP">CP</option>
            </select>
          </div>

          <div>
            <label for="aspecto">Aspecto: </label>
            <select className={styles.input7} id="aspecto" name="aspecto">
              <option value="null"></option>
              {data.length > 0 ? (
                data.map((item) => (
                  <option value={item.Aspecto_id}>{item.Nome}</option>
                ))
              ) : (<option>Nenhum aspecto encontrado  </option>)}


            </select>
          </div>
        </div>

        <div className={styles.tema}>
          <div className={styles.tres}>
            <label for="tema">Tema: </label>
            <select className={styles.input8} name="tema" id="tema">
              <option value="null"></option>
              {data.length > 0 ? (
                data.map((item) => (
                  <option value={item.Tema_id}>{item.Nome_tema}</option>
                ))
              ) : (<option>Nenhum tema encontrado  </option>)}
            </select>
          </div>

          <div>
            <label for="urgencia">Urgência: </label>
            <select className={styles.input9} name="urgencia" id="urgencia">
            <option value="null"></option>
              {data.length > 0 ? (
                data.map((item) => (
                  <option value={item.Urgencia_id}>{item.Tipo_urgencia}</option>
                ))
              ) : (<option>Nenhuma urgencia encontrada  </option>)}
    
            </select>
          </div>
        </div>

        <div className={styles.aluno}>
          <div className={styles.quat}>
            <label for="aluno">Estudante(s): </label>
            <input
              className={styles.input10}
              type="text"
              id="aluno"
              name="aluno"
            />
          </div>

          <div className={styles.cinc}>
            <label for="turma">Turma: </label>
            <input
              className={styles.input11}
              type="text"
              id="turma"
              name="turma"
              disabled
            />
          </div>

          <div>
            <label for="rm">RM: </label>
            <input type="text" id="rm" name="rm" disabled />
          </div>
        </div>

        <div className={styles.resp}>
          <div className={styles.seis}>
            <label for="resp">Responsável: </label>
            <input
              className={styles.input5}
              type="text"
              id="resp"
              name="resp"
            />
          </div>

          <div>
            <label for="esp">Especialista: </label>
            <input className={styles.input6} type="text" id="esp" name="esp" />
          </div>
        </div>

        <div className={styles.mes}>
          <textarea name="message" rows="10" cols="110">
            Descrição da ocorrência
          </textarea>
        </div>

        <div className={styles.enc}>
          <label for="enc">Encaminhamento: </label>
          <select className={styles.input3} id="enc" name="enc">
            <option value="null"></option>
            {data.length > 0 ? (
                data.map((item) => (
                  <option value={item.Urgencia_id}>{item.Tipo_urgencia}</option>
                ))
              ) : (<option>Nenhuma urgencia encontrada  </option>)}
    
            
          </select>
        </div>
      </form>
      <div className={styles.divBut}>
        <Link href="../Paginas/PaginaInicial">
          <button className={styles.botaovoltar}> Voltar</button>
        </Link>
        <Link href="https://quizizz.com/">
          <button className={styles.botaovoltar}> Gerar documento </button>
        </Link>
        <button className={styles.botaovoltar} onClick={handleSave}> Salvar</button>
      </div>
    </main>
  );
}
export default criaroco;
