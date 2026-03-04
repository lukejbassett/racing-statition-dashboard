import { CgGames } from "react-icons/cg";
import { FaMap } from "react-icons/fa";
import { IoIosInformationCircle, IoMdPerson } from "react-icons/io";
import { IoCarSport } from "react-icons/io5";
import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <ul>
      <span>
        <a href="/">Racing Statition</a>
      </span>
      {[
        { to: "/drivers", icon: <IoMdPerson size={24} />, label: "Drivers" },
        { to: "/teams", icon: <IoCarSport size={24} />, label: "Teams" },
        { to: "/circuits", icon: <FaMap size={24} />, label: "Circuits" },
        { to: "/games", icon: <CgGames size={24} />, label: "Games" },
        {
          to: "/about",
          icon: <IoIosInformationCircle size={24} />,
          label: "About",
        },
      ].map(({ to, icon, label }) => (
        <li key={to}>
          <NavLink to={to}>
            {icon} <span>{label}</span>
          </NavLink>
        </li>
      ))}
    </ul>
  );
}
