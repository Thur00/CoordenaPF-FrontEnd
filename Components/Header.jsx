"use client"
import Link from "next/link"
import { FaHouseChimney } from "react-icons/fa6";
import { FaBell } from "react-icons/fa";
import { IoPersonSharp } from "react-icons/io5";

function Header(props) {
    return (
        <main>
            <div className="Header">

                <Link className="icon" href="https://nextjs.org/docs/app/api-reference/file-conventions/metadata/app-icons">
                <FaHouseChimney />
                </Link>

                <h1 className="tit">Coordena SESI</h1>
                <div>
                    <Link className="icon2" href="https://quizizz.com/">
                    <FaBell />
                    </Link>

                    <Link className="icon2" href="https://www.youtube.com/?app=desktop&hl=pt">
                    <IoPersonSharp />
                    </Link>
                </div>
            </div>

        </main>
    )
}
export default Header;
