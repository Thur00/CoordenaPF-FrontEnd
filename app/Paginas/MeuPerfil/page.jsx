"use client";
import styles from "@/Components/Perfil.module.css";
import BotaoVoltar from "@/Components/BotaoVoltar";

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
          <BotaoVoltar link="/Paginas/PaginaInicial" />
          <button className={styles.botao}> Editar </button>
          <Link href="/Paginas/Usuarios">
            <button className={styles.botao2}> Gerenciar Usuários </button>
          </Link>
        </div>
      </div>
    </>
  );
}
