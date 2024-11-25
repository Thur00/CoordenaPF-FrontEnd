"use client";

import styles from "./TodasOcorrencias.module.css";
import { IoSearch } from "react-icons/io5";
import BotaoVoltar from "@/Components/BotaoVoltar";
import { useEffect, useState } from "react";
import Ocorrencia from "@/Components/Ocorrencias";

const API_URL = "http://localhost:3001";

export default function TodasOcor() {
  const [id, setId] = useState("");
  const [data, setData] = useState([]); // Dados recebidos da API
  const [filteredData, setFilteredData] = useState([]); // Dados filtrados
  const [activeFilter, setActiveFilter] = useState(""); // Filtro ativo
  const [filterValues, setFilterValues] = useState({
    rm: "",
    nome: "",
    tema: "",
    turma: "",
    inicio: "",
    conclusao: "",
    status: "",
    urgencia: "",
  });

  const getOcorrencias = async () => {
    try {
      const resposta = await fetch(`${API_URL}/ocorrencias`);
      const data1 = await resposta.json();
      console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
      setData(data1);
      setFilteredData(data1);
    } catch (error) {
      console.error("Erro na busca da ocorrência", error);
    }
  };

  useEffect(() => {
    getOcorrencias();
  }, []);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prevValues) => ({ ...prevValues, [name]: value }));
  };

  const applyFilters = () => {
    let filtered = data;

    if (filterValues.rm) {
      filtered = filtered.filter((item) =>
        item.RM.toString().includes(filterValues.rm)
      );
    }

    if (filterValues.nome) {
      filtered = filtered.filter((item) =>
        item.Aluno.toLowerCase().includes(filterValues.nome.toLowerCase())
      );
    }

    if (filterValues.tema) {
      filtered = filtered.filter((item) =>
        item.Tema.toLowerCase().includes(filterValues.tema.toLowerCase())
      );
    }

    if (filterValues.inicio) {
      filtered = filtered.filter(
        (item) => new Date(item.Data) >= new Date(filterValues.inicio)
      );
    }

    if (filterValues.conclusao) {
      filtered = filtered.filter(
        (item) => new Date(item.Data) <= new Date(filterValues.conclusao)
      );
    }

    if (filterValues.status) {
      filtered = filtered.filter((item) =>
        item.Status.toLowerCase().includes(filterValues.status.toLowerCase())
      );
    }

    if (filterValues.urgencia) {
      filtered = filtered.filter(
        (item) => item.Urgencia === filterValues.urgencia
      );
    }

    setFilteredData(filtered);
  };

  const resetFilters = () => {
    setFilterValues({
      rm: "",
      nome: "",
      tema: "",
      turma: "",
      inicio: "",
      conclusao: "",
      status: "",
      urgencia: "",
    });
    setFilteredData(data);
  };

  return (
    <main className={styles.main}>
      <div className={styles.divtitulo}>
        <h1 className={styles.titulo}> Todas as ocorrências </h1>
        <BotaoVoltar link="/Paginas/PaginaInicial" />
      </div>

      <br></br>

      <div className={styles.pesquisafiltro}>
        {/* Botões de filtro */}
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "rm"
              ? () => {
                  setFilterValues({ rm: "" });
                  applyFilters();
                }
              : () => setActiveFilter("rm")
          }
        >
          RM
        </button>
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "nome"
              ? () => {
                  setFilterValues({ nome: "" });
                  applyFilters();
                }
              : () => setActiveFilter("nome")
          }
        >
          NOME
        </button>
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "tema"
              ? () => {
                  setFilterValues({ tema: "" });
                  applyFilters();
                }
              : () => setActiveFilter("tema")
          }
        >
          TEMA
        </button>
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "date"
              ? () => {
                  setFilterValues({ date: "" });
                  applyFilters();
                }
              : () => setActiveFilter("date")
          }
        >
          DATA
        </button>
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "status"
              ? () => {
                  setFilterValues({ status: "" });
                  applyFilters();
                }
              : () => setActiveFilter("status")
          }
        >
          STATUS
        </button>
        <button
          className={styles.butfiltro}
          onClick={
            activeFilter === "urgencia"
              ? () => {
                  setFilterValues({ urgencia: "" });
                  applyFilters();
                }
              : () => setActiveFilter("urgencia")
          }
        >
          URGÊNCIA
        </button>

        {/* Campos de filtro */}
        {activeFilter === "rm" && (
          <div className={styles.pesquisa}>
            <input
              type="number"
              name="rm"
              placeholder="Busque por RM"
              value={filterValues.rm}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {activeFilter === "nome" && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              name="nome"
              placeholder="Busque por nome"
              value={filterValues.nome}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {activeFilter === "tema" && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              name="tema"
              placeholder="Busque por tema"
              value={filterValues.tema}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {activeFilter === "date" && (
          <div className={styles.pesquisa}>
            <p>Início:</p>
            <input
              type="date"
              name="inicio"
              value={filterValues.inicio}
              onChange={handleFilterChange}
            />
            <p>Conclusão:</p>
            <input
              type="date"
              name="conclusao"
              value={filterValues.conclusao}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {activeFilter === "status" && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              name="status"
              placeholder="Busque por status"
              value={filterValues.status}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {activeFilter === "urgencia" && (
          <div className={styles.pesquisa}>
            <input
              type="text"
              name="urgencia"
              placeholder="Busque por urgência"
              value={filterValues.urgencia}
              onChange={handleFilterChange}
            />
            <button onClick={applyFilters}>
              <IoSearch />
            </button>
          </div>
        )}

        {/* Botão para resetar os filtros */}
        <button className={styles.butfiltro} onClick={resetFilters}>
          Limpar Filtros
        </button>
      </div>

      <div className={styles.boxTodasOcor}>
        {filteredData.length > 0 ? (
          filteredData.map((item) => (
            <Ocorrencia
              key={item.Ocorrencia_id}
              id={item.Ocorrencia_id} // Adicionando o ID para navegação
              nome={item.Criador}
              tema={item.Tema}
              turma={item.Turma}
              data={item.Data}
              status={item.Status}
              urgencia={item.Urgencia}
              cor={item.Cor}
            />
          ))
        ) : (
          <p>Nenhuma ocorrência encontrada</p>
        )}
      </div>
    </main>
  );
}
