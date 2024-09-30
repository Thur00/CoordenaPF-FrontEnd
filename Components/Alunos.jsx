"use client"
import styles from "@/Components/AdicionarAluno.module.css"


function AlunosinfoProps(props) {
    const { alunos } = props;

    // const [setShowForm] = useState(false);

    const handleAddClick = () => {
        setShowForm(true);
    };

    return (
        <table className={styles.table}>
            <thead>
                <tr className={styles.tr}>
                    <th>RM</th>
                    <th>NOME</th>
                    <th>TURMA</th>
                    <th>ANO</th>

                </tr>
            </thead>
            <tbody>
                {alunos.map((item) => (
                    <>
                        <tr className={styles.tr}>
                            <td>{item.rm}</td>
                            <td>{item.nome}</td>
                            <td>{item.turma}</td>
                            <td>{item.ano}</td>
                        </tr>
                        <button className={styles.editarbutton} onClick={handleAddClick}>
                            Editar
                        </button>
                    </>
                ))}
            </tbody>


        </table>
    )

};



export default AlunosinfoProps;