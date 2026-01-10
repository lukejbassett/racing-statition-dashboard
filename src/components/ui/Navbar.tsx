import { IoHome, IoCarSport } from "react-icons/io5";
import { FaMap } from "react-icons/fa";
import { IoMdPerson, IoIosInformationCircle } from "react-icons/io";
import { CgGames } from "react-icons/cg";

export default function Navbar() {
  return (
    <>
      <nav className="h-screen fixed w-48 left-0 top-0">
        <ul className="flex flex-col p-4 gap-4">
          <li>
            <a href="/" className="flex items-center gap-2 p-2">
              <IoHome size={24} />
              Home
            </a>
          </li>
          <li>
            <a href="/drivers" className="flex items-center gap-2 p-2">
              <IoMdPerson size={24} />
              Drivers
            </a>
          </li>
          <li>
            <a href="/teams" className="flex items-center gap-2 p-2">
              <IoCarSport size={24} />
              Teams
            </a>
          </li>
          <li>
            <a href="/circuits" className="flex items-center gap-2 p-2">
              <FaMap size={24} />
              Circuits
            </a>
          </li>
          <li>
            <a href="/games" className="flex items-center gap-2 p-2">
              <CgGames size={24} />
              Games
            </a>
          </li>
          <li>
            <a href="/about" className="flex items-center gap-2 p-2">
              <IoIosInformationCircle size={24} />
              About
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}
