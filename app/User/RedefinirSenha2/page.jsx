"use client"


import { useState } from "react";
import styles from "@/Components/Login.module.css"
import { PiLockKeyFill } from "react-icons/pi";
import Link from "next/link";

export default function TodasOcor() {

        const [senha, setSenha] = useState("");  // Estado para armazenar a senha
        const [savedPassword, setSavedPassword] = useState("");  // Estado para armazenar a senha salva

  
   // Função para salvar a senha quando o botão for clicado
   const handleSave = () => {
    setSavedPassword(senha);  // Salva a senha no estado
    setSenha("");  // Limpa o campo de senha
  };
    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <div className={styles.titulobox} >
                    <h1 className={styles.texto1} > Coordena </h1>
                    <h1 className={styles.texto2} > SESI </h1>
                </div>

   <div className={styles.divPesquisa}>
       <div className={styles.pesquisa}>
    <PiLockKeyFill />
  <input type="password" 
   placeholder="Nova senha" 
   name="senha"
   id="senha"
   />
     </div>

  <div className={styles.pesquisa}>
    <PiLockKeyFill />
   <input type="password" 
   placeholder="Confirmar senha" 
   name="senha" 
   id="senha"                  
     />
         </div>
              
                </div>

                <Link  href="/User/Login"><button className={styles.botao}  onClick={handleSave}> Salvar </button></Link>
            </div>
        </main>
    )
}

// import { useState } from "react";

// const SavePasswordForm = () => {
//   const [senha, setSenha] = useState("");  // Estado para armazenar a senha
//   const [savedPassword, setSavedPassword] = useState("");  // Estado para armazenar a senha salva

//   // Função para lidar com a mudança do valor do input
//   const handleInputChange = (e) => {
//     setSenha(e.target.value);
//   };

//   // Função para salvar a senha quando o botão for clicado
//   const handleSave = () => {
//     setSavedPassword(senha);  // Salva a senha no estado
//     alert("Senha salva com sucesso!");  // Exibe uma mensagem (opcional)
//     setSenha("");  // Limpa o campo de senha
//   };

//   return (
//     <div>
//       <form>
//         <input
//           type="password"  // Campo do tipo senha
//           name="senha"
//           value={senha}
//           onChange={handleInputChange}
//           placeholder="Digite sua senha"
//         />
//         <button type="button" onClick={handleSave}>
//           Salvar Senha
//         </button>
//       </form>

//       {savedPassword && (
//         <p>Senha salva: {savedPassword}</p>  // Exibe a senha salva (apenas para teste, nunca exibir senhas em produção!)
//       )}
//     </div>
//   );
// };

// export default SavePasswordForm;
