"use client"
import Link from "next/link"
import { FaHouseChimney } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function Header(props) {
  return (
    <main>
        <div className="Header">

            <Link className="icon" href="/Paginas/PaginaInicial">
            <FaHouseChimney />
            </Link>

            <h1 className="tit">Coordena SESI</h1>
                <div>
                    <Link className="icon2" href="/Paginas/Notificacao">
                    <FaBell />
                    </Link>

                    <Link className="icon2" href="/Paginas/MeuPerfil">
                    <IoPersonSharp />
                    </Link>
                </div>
            </div>

        </main>
    )
}
export default Header;
