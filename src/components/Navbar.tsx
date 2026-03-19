import { NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <nav>
      <ul>
        {[{ to: "/", icon: "", label: "Home" }].map(({ to, icon, label }) => (
          <li key={to}>
            <NavLink to={to}>
              {icon} <span>{label}</span>
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
