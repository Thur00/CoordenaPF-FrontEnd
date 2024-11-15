"use client"
import styles from "@/Components/Login.module.css"
import Link from "next/link";
import { IoMdPerson } from "react-icons/io";
import { PiLockKeyFill } from "react-icons/pi";
import { useState } from 'react';

function Login() {

    // Estado para armazenar o CPF digitado
    const [cpf, setCpf] = useState('');
    // Estado para armazenar a mensagem de erro ou sucesso
    const [mensagem, setMensagem] = useState('');

    // Função para validar o CPF
    const isValidCPF = (cpf) => {
        // Verifica se o tipo de dado passado para o parâmetro 'cpf' é uma string
        if (typeof cpf !== "string") {
            setMensagem("CPF inválido");
            return false;
        }

        // Remove caracteres especiais como espaços, pontos e hífens
        cpf = cpf.replace(/[\s.-]*/igm, '');

        // Verifica se o CPF está vazio, tem um tamanho diferente de 11 caracteres
        // ou é uma sequência de números inválidos (como 00000000000, 11111111111, etc.)
        if (
            !cpf ||                                  // CPF não pode ser vazio
            cpf.length !== 11 ||                      // CPF deve ter exatamente 11 dígitos
            cpf === "00000000000" ||                  // CPF composto apenas de zeros
            cpf === "11111111111" ||                  // CPF composto apenas de uns
            cpf === "22222222222" ||                  // CPF composto apenas de dois
            cpf === "33333333333" ||                  // CPF composto apenas de três
            cpf === "44444444444" ||                  // CPF composto apenas de quatro
            cpf === "55555555555" ||                  // CPF composto apenas de cinco
            cpf === "66666666666" ||                  // CPF composto apenas de seis
            cpf === "77777777777" ||                  // CPF composto apenas de sete
            cpf === "88888888888" ||                  // CPF composto apenas de oito
            cpf === "99999999999"                    // CPF composto apenas de nove
        ) {
            setMensagem("CPF inválido");
            return false;
        }

        // Validação do primeiro dígito verificador
        let soma = 0;
        let resto;

        // Calcula a soma dos primeiros 9 dígitos, multiplicados por pesos de 10 a 2
        for (let i = 1; i <= 9; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (11 - i);
        }

        // Calcula o resto da divisão da soma por 11
        resto = (soma * 10) % 11;

        // Se o resto for 10 ou 11, o dígito verificador deve ser 0
        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        // Verifica se o primeiro dígito verificador (índice 9) é igual ao valor calculado
        if (resto !== parseInt(cpf.substring(9, 10))) {
            setMensagem("CPF inválido");
            return false;
        }

        // Validação do segundo dígito verificador
        soma = 0;

        // Calcula a soma dos primeiros 10 dígitos, multiplicados por pesos de 11 a 2
        for (let i = 1; i <= 10; i++) {
            soma += parseInt(cpf.substring(i - 1, i)) * (12 - i);
        }

        // Calcula o resto da divisão da soma por 11
        resto = (soma * 10) % 11;

        // Se o resto for 10 ou 11, o dígito verificador deve ser 0
        if (resto === 10 || resto === 11) {
            resto = 0;
        }

        // Verifica se o segundo dígito verificador (índice 10) é igual ao valor calculado
        if (resto !== parseInt(cpf.substring(10, 11))) {
            setMensagem("CPF inválido");
            return false;
        }

        // Se todas as verificações passarem, o CPF é válido
        setMensagem("CPF válido");
        return true;
    };

    // Função chamada quando o usuário clicar no botão
    const handleSubmit = (e) => {
        e.preventDefault();
        isValidCPF(cpf);
    };

    return (
        <main className={styles.main}>

            <div className={styles.box}>

                <div className={styles.titulobox}>
                    <h1 className={styles.texto1}> Coordena </h1>
                    <h1 className={styles.texto2}>SESI</h1>
                </div>

                <form onSubmit={handleSubmit}>

                    <div className={styles.divPesquisa}>

                        <div className={styles.pesquisa}>
                            <IoMdPerson />
                            <input
                                type="text"
                                value={cpf}
                                onChange={(e) => setCpf(e.target.value)}
                                placeholder="Digite o CPF"
                                maxLength={14}
                            />
                        </div>

                        <div className={styles.pesquisa}>
                            <PiLockKeyFill />
                            <input type="password" name="senha" id="senha" placeholder="Senha" />
                        </div>

                    </div>

                    <Link href="/User/RedefinirSenha">Esqueceu sua senha?</Link>

                    <Link href="../Paginas/PaginaInicial"><button className={styles.botao} type="submit">Acessar</button></Link>

                </form>

                <p id="mensagem"></p>

                <a className={styles.referencia} href="https://pt.vecteezy.com/vetor-gratis/vermelho">Vermelho Vetores por Vecteezy</a>
            </div>

        </main>
    )

}

export default Login;