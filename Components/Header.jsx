"use client";
import Link from "next/link";

function Header(props) {
  return (
    <div className="Header">
      <Link
        className="icon"
        href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons"
      >
        <i class="fa-solid fa-house-chimney"></i>
      </Link>

      <h1 className="tit">Coordena SESI</h1>
      <div>
        <Link className="icon2" href="https://quizizz.com/">
          <i class="fa-solid fa-bell"></i>
        </Link>

        <Link
          className="icon2"
          href="https://www.youtube.com/?app=desktop&hl=pt"
        >
          <i class="fa-solid fa-user"></i>
        </Link>
      </div>
    </div>
  );
}
export default Header;
