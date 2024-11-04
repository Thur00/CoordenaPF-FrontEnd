"use client";

import styles from "@/Components/Perfil.module.css";
import Link from "next/link";

export default function MeuPerfil() {
  return (
    <>
      <div className={styles.body}>
        <h1 className={styles.tit}> Meu perfil </h1>

        <div className={styles.input}>
          <input className={styles.um} type="text" placeholder="Nome:" />
          <input className={styles.um} type="text" placeholder="E-mail:" />
          <input className={styles.um} type="text" placeholder="Senha:" />
          <input className={styles.um} type="text" placeholder="CPF:" />
        </div>
        <div className={styles.botoes}>
          <Link href="/Paginas/PaginaInicial">
            <button className={styles.botao}> Voltar </button>
          </Link>
          <button className={styles.botao}> Editar </button>
        </div>
      </div>
    </>
  );
}
