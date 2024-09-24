"use client"

import React from "react";
import Link from "next/link";


const EditarDados = () => {
    return (
        <div>
        <button>
        <Link href="/editaraluno">Editar Aluno</Link>
        </button>

        <button>
        <Link href="/editaraspecto">Editar Aspecto</Link>
        </button>

        <button>
        <Link href="/editartema">Editar Tema</Link>
        </button>

        <button>
        <Link href="/editarstatus">Editar Status</Link>
        </button>

        <button>
        <Link href="/editarurgencia">Editar Urgência</Link>
        </button>


        </div>

    )
}

export default EditarDados;