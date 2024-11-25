"use client";

import { useState, useEffect } from "react";
import styles from "@/Components/Adicionar.module.css"; // Importando o CSS
import Link from "next/link";

import { LuClock4 } from "react-icons/lu";
import {
  FaClockRotateLeft,
  FaRegCirclePause,
  FaRotateLeft,
  FaRegCircleCheck,
  FaCheck,
  FaExclamation,
  FaPause,
  FaHourglassEnd,
  FaRegHourglass,
} from "react-icons/fa6";
import { IoAlertCircleOutline } from "react-icons/io5";
import { MdNearbyError } from "react-icons/md";

const API_URL = "http://localhost:3001"; // Adicione a URL da API

const Icons = [
  {
    id: 1,
    icone: <LuClock4 />,
  },
  {
    id: 2,
    icone: <FaClockRotateLeft />,
  },
  {
    id: 3,
    icone: <FaRegCirclePause />,
  },
  {
    id: 4,
    icone: <FaRotateLeft />,
  },
  {
    id: 5,
    icone: <FaRegCircleCheck />,
  },
  {
    id: 6,
    icone: <FaCheck />,
  },
  {
    id: 7,
    icone: <FaExclamation />,
  },
  {
    id: 8,
    icone: <FaPause />,
  },
  {
    id: 9,
    icone: <FaHourglassEnd />,
  },
  {
    id: 10,
    icone: <FaRegHourglass />,
  },
  {
    id: 11,
    icone: <IoAlertCircleOutline />,
  },
  {
    id: 12,
    icone: <MdNearbyError />,
  },
];

const Tabela = () => {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({
    id: "",
    categoria: "",
    icone: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [editingItem, setEditingItem] = useState(null);
  const [selectedIcon, setSelectedIcon] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const getStatus = async () => {
    try {
      const resposta = await fetch(`${API_URL}/status`);
      const data = await resposta.json();
      console.log("Dados recebidos:", data); // Adicione esta linha para verificar os dados
      setData(data);
    } catch (error) {
      console.error("Erro na busca", error);
    }
  };

  useEffect(() => {
    getStatus();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    setShowForm(true);
    setIsEditing(false);
    setFormData({ id: "", categoria: "" });
    setSelectedIcon(null); // Atualiza o estado do ícone selecionado
  };

  const handleEdit = (item) => {
    setShowForm(true);
    setIsEditing(true);
    setFormData({
      id: item.Status_id,
      categoria: item.Categoria,
      icone: item.Icone,
    });
    setEditingItem(item);

    // Encontrar o ícone correspondente no array Icons
    const iconToSelect = Icons.find((icon) => icon.id === item.Icone);
    setSelectedIcon(iconToSelect); // Atualiza o estado do ícone selecionado
  };

  const handleSave = async () => {
    if (isEditing) {
      try {
        // Faz uma requisição PUT para a API de temas para atualizar o item
        await fetch(`${API_URL}/status/${editingItem.Status_id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            categoria: formData.categoria,
            icone: formData.icone,
          }), // Ajuste aqui o objeto para corresponder ao que a API espera
        });

        // Atualiza a lista de temas após a edição
        getStatus();

        // Limpa a seleção e o formulário
        setEditingItem(null);
        setIsEditing(false);
      } catch (error) {
        console.error("Erro ao atualizar o status:", error);
      }
    } else {
      try {
        // Faz uma requisição POST para a API de temas
        const response = await fetch(`${API_URL}/status`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          // Envia o corpo da requisição em formato JSON
          body: JSON.stringify({
            categoria: formData.categoria,
            icone: formData.icone,
          }),
        });

        // Atualiza a lista de temas após a edição
        console.log("icone ", formData.icone);
        getStatus();

        // Converte a resposta para JSON
        const data = await response.json();

        // Atualiza o estado de 'data' com o novo tema adicionado
        setData((prevData) => [...prevData, data]);
        console.log("data", data);

        // Limpa os campos de entrada
        setFormData({ id: "", categoria: "", icone: "" });
        setShowForm(false);
      } catch (error) {
        // Loga erros no console
        console.error("Erro ao adicionar status:", error);
      }
    }
    setShowForm(false);
    setFormData({ id: "", categoria: "", icone: "" });
  };

  const handleCancel = () => {
    setShowForm(false);
    setFormData({ id: "", categoria: "", icone: "" });
  };

  const handleIconClick = (icon) => {
    setSelectedIcon(icon);
    setFormData({
      ...formData,
      icone: icon.id,
    });
    setIsOpen(false); // Fecha a lista
    console.log("teste icon ", icon);
  };

  const viewIcon = (id) => {
    console.log("data  ", data);
    console.log("icone ", data[id]?.Icone);
    switch (data[id]?.Icone) {
      case 1:
        return <LuClock4 />;
        break;
      case 2:
        return <FaClockRotateLeft />;
        break;
      case 3:
        return <FaRegCirclePause />;
        break;
      case 4:
        return <FaRotateLeft />;
        break;
      case 5:
        return <FaRegCircleCheck />;
        break;
      case 6:
        return <FaCheck />;
        break;
      case 7:
        return <FaExclamation />;
        break;
      case 8:
        return <FaPause />;
        break;
      case 9:
        return <FaHourglassEnd />;
        break;
      case 10:
        return <FaRegHourglass />;
        break;
      case 11:
        return <IoAlertCircleOutline />;
        break;
      default:
        return <MdNearbyError />;
        break;
    }
  };

  return (
    <div>
      <br />
      <div>
        <div className={styles.div1}>
          <h1 className={styles.h1}>Editar Status</h1>
          <button className={styles.voltar}>
            <Link href="/Paginas/EditarDados">Voltar</Link>
          </button>
        </div>
        <br />
        <div className={styles.div2}>
          <table border="1" className={styles.table}>
            <thead>
              <tr>
                <th>ID</th>
                <th>CATEGORIA</th>
                <th>ICONE</th>
              </tr>
            </thead>
            <tbody>
              {data.length > 0 ? (
                data.map((item, index) => (
                  <tr key={item.Status_id}>
                    <td>{item.Status_id}</td>
                    <td>{item.Categoria}</td>
                    <td>{viewIcon(index)}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3">Nenhum Status encontrado.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className={styles.buttonContainer}>
            {data.map((item) => (
              <button
                className={styles.editarbutton}
                key={item.id}
                onClick={() => handleEdit(item)}
              >
                Editar
              </button>
            ))}
          </div>
        </div>
      </div>

      <button className={styles.addbutton} onClick={handleAdd}>
        Adicionar
      </button>

      {showForm && (
        <div>
          <h3 className={styles.titleinput}>
            {isEditing ? "Editar" : "Adicionar"}
          </h3>
          <div className={styles.divinput}>
            <input
              type="text"
              name="categoria"
              value={formData.categoria}
              onChange={handleInputChange}
              placeholder="Categoria"
            />
            <br />

            <div className={styles.selectContainer}>
              <div
                className={styles.selectedIcon}
                onClick={() => setIsOpen(!isOpen)}
              >
                {selectedIcon ? selectedIcon.icone : "Selecione um ícone"}
              </div>
              {isOpen && (
                <div className={styles.iconList}>
                  {[...Icons].slice(0, -1).map((icon) => (
                    <div
                      key={icon.id}
                      className={styles.iconItem}
                      onClick={() => handleIconClick(icon)}
                    >
                      {icon.icone}
                    </div>
                  ))}
                </div>
              )}
            </div>

            <br />
          </div>

          <div className={styles.salecanbutton}>
            <button className={styles.salvarbutton} onClick={handleSave}>
              Salvar
            </button>
            <button className={styles.cancelarbutton} onClick={handleCancel}>
              Cancelar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Tabela;
