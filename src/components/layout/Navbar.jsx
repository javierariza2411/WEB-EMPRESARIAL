import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { company } from "../../data/company";
import { FiMenu, FiX } from "react-icons/fi"; // Íconos para el menú

const linkClass = ({ isActive }) =>
  `nav-link ${isActive ? "active" : ""}`.trim();

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="navbar">
      <div className="container navbar-inner">
        <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <img src="/brand/logo.svg" alt="Logo" style={{ height: 34 }} />
          <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <strong style={{ fontSize: 14 }}>{company.brandName}</strong>
            <span className="muted" style={{ fontSize: 12 }}>{company.city}</span>
          </div>
        </Link>

        {/* Botón de menú para móviles */}
        <button className="menu-toggle" onClick={toggleMenu} aria-label="Abrir menú">
          {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>

        <div className={`nav-links ${isMenuOpen ? "open" : ""}`} aria-label="Navegación principal">
          <NavLink to="/" className={linkClass} end>Inicio</NavLink>
          <NavLink to="/quienes-somos" className={linkClass}>Quiénes Somos</NavLink>
          <NavLink to="/servicios" className={linkClass}>Servicios</NavLink>
          <NavLink to="/proyectos" className={linkClass}>Proyectos</NavLink>
          <NavLink to="/cotizacion" className={linkClass}>Cotización</NavLink>
          <NavLink to="/contacto" className={linkClass}>Contáctanos</NavLink>
        </div>

        <div className="nav-cta">
          <Link className="btn btn-outline" to="/contacto">Hablar con un asesor</Link>
          <Link className="btn btn-primary" to="/cotizacion">Solicitar cotización</Link>
        </div>
      </div>
    </div>
  );
}
