"use client";
import Link from "next/link";

function Header(props) {
  return (
    <div className="Header">
      <Link
        className="icon"
        href="/Paginas/PaginaInicial"
      >
        <i class="fa-solid fa-house-chimney"></i>
      </Link>

      <h1 className="tit">Coordena SESI</h1>
      <div>
        <Link className="icon2" href="/Paginas/Notificacao">
          <i class="fa-solid fa-bell"></i>
        </Link>

        <Link
          className="icon2"
          href="/Paginas/Usuarios"
        >
          <i class="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
export default Header;
