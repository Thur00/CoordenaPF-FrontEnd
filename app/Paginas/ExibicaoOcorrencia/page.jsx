"use client";

import styles from "@/Components/exibirocorrencia.module.css";
import Link from "next/link";

function exibiroco() {
  const handleSave = () => {
    if (isEditing) {
      setData(
        data.map((item) => (item.rm === editingItem.rm ? formData : item))
      );
    }
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ rm: "", nome: "", turma: "", ano: "" });
  };

  return (
    <main className={styles.main}>
      <div>
        <div className={styles.tit}>
          <h1>Ocorrência</h1>
        </div>

        <div className={styles.salecanbutton}>
          <button className={styles.salvarbutton} onClick={handleSave}>
            Mudar Status
          </button>
          <button className={styles.salvarbutton} onClick={handleCancel}>
            Solicitar
          </button>
        </div>

        <br></br>
        <div className={styles.divinput}>
          <input type="text" placeholder="Aspecto:" />
          <br></br>
          <input type="text" placeholder="Iniciativa:" />
          <br></br>

          <input type="text" placeholder="Tema:" />
          <br></br>

          <input type="text" placeholder="Estudante:" />
          <br></br>

          <input type="text" placeholder="Responsável:" />
          <br></br>

          <input type="text" placeholder="Especialista:" />
          <br></br>

          <input type="text" placeholder="Encaminhamento:" />
          <br></br>

          <input type="text" placeholder="Descrição:" />
        </div>

        <div className={styles.salecanbutton}>
          <button className={styles.cancelarbutton} onClick={handleSave}>
            Gerar Documento
          </button>

          <button className={styles.cancelarbutton} onClick={handleCancel}>
            <Link href="/Paginas/PaginaInicial">Voltar</Link>
          </button>
        </div>

        <br></br>
      </div>
    </main>
  );
}
export default exibiroco;
