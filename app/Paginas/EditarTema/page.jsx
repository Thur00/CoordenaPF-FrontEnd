

"use client";

import { useEffect,useState } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Header from "@/Components/Header";
import Link from "next/link"
import Footer from "@/Components/Footer";


const Tabela = () => {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({ id: "", tema: "" });
    const [isEditing, setIsEditing] = useState(false);
    const [showForm, setShowForm] = useState(false);
    const [editingItem, setEditingItem] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getTema = async () => {
          try {
            const resposta = await fetch(`http://localhost:3001/temas`);
            const data1 = await resposta.json();
            console.log("Dados recebidos:", data1); // Adicione esta linha para verificar os dados
            setData(data1);
            setError(null);
          } catch (error) {
            console.error("Erro na busca alunos", error);
            setError("Falha na busca alunos. Tente novamente.");
          }
        };
        getTema();
      }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleAdd = () => {
        setShowForm(true);
        setIsEditing(false);
        setFormData({ id: "", tema: "" });
    };

    const handleEdit = (item) => {
        setShowForm(true);
        setIsEditing(true);
        setFormData(item);
        setEditingItem(item);
    };

    const handleSave = () => {
        if (isEditing) {
            setData(
                data.map((item) => (item.id === editingItem.id ? formData : item))
            );
        } else {
            setData([...data, { ...formData, rm: Number(formData.rm) }]);
        }
        setShowForm(false);
        setFormData({ id: "", tema: "" });
    };

    const handleCancel = () => {
        setShowForm(false);
        setFormData({ id: "", tema: "" });
    };

    return (
        <div>
            <Header></Header>
            <br></br>
            <div>
                <div className={styles.div1}>
                    <h1 className={styles.h1}>Editar Tema</h1>
                    <button className={styles.voltar}>
                        <Link href="/Paginas/EditarDados">Voltar</Link>
                    </button>         </div>
                <br></br>
                <div className={styles.div2}>
                    <table border="1" className={styles.table}>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>TEMA</th>
                            </tr>
                        </thead>
                        <tbody>
                        {data.length > 0 ? (
                data.map((item) => (
                  <tr key={item.Tema_id}>
                    <td>{item.Tema_id}</td>
                    <td>{item.Nome_tema}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5">Nenhum tema encontrado.</td>
                </tr>
              )}
                        </tbody>
                    </table>

                    <div className={styles.buttonContainer}>
                        {data.map((item) => (
                            <button className={styles.editarbutton} key={item.rm} onClick={() => handleEdit(item)}>
                                Editar
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            <button className={styles.addbutton} onClick={handleAdd}>Adicionar</button>

            {showForm && (
                <div>
                    <h3>{isEditing ? "" : ""}</h3>
                    <br></br>
                    <div className={styles.divinput}>

                        <input
                            type="text"
                            name="tema"
                            value={formData.tema}
                            onChange={handleInputChange}
                            placeholder="Tema"
                        />

                    </div>

                    <div className={styles.salecanbutton}>
                        <button className={styles.salvarbutton} onClick={handleSave}>Salvar</button>
                        <button className={styles.cancelarbutton} onClick={handleCancel}>Cancelar</button>
                    </div>
                </div>
            )}
            <Footer></Footer>
        </div>
    );
};

export default Tabela;