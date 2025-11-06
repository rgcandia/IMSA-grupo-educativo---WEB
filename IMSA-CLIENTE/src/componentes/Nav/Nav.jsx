import style from './Nav.module.css';
import logo from '../../assets/images/logo_imsa_violeta_negro.png';
import { IoCaretDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";
import { useState, useEffect } from 'react';
import { Link } from "react-router-dom"; // ✅ Importamos Link

export default function Nav() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 800px)');
    const handleResize = () => {
      if (!mediaQuery.matches) {
        setMenuAbierto(false);
      }
    };
    mediaQuery.addEventListener('change', handleResize);
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);

  return (
    <div className={style.nav}>
      {/* Logo con Link a la página principal */}
      <div className={style.logo}>
        <Link to="/">
          <img src={logo} alt="Logo IMSA" />
        </Link>
      </div>

      <div className={style.enlaces}>
        <a>CURSOS DE FORMACIÓN <IoCaretDown /></a>
        <a href="#nosotros">NOSOTROS</a>
        <a>CONTACTO</a>
        <a className={style.ingresar}>INGRESAR</a>
      </div>

      <div className={style.redes}>
        <FaFacebookF />
        <LuInstagram />
      </div>

      {/* Menú hamburguesa */}
      <div className={style.hamburguesa} onClick={() => setMenuAbierto(!menuAbierto)}>
        {menuAbierto 
          ? <CiMenuFries size={28} style={{ color:'#7a62fb' }} /> 
          : <CiMenuBurger size={28} style={{ color:'#7a62fb' }} />}
      </div>

      {menuAbierto && (
        <div className={style.menuMobile}>
          <nav className={style.menuLinks}>
            <a>CURSOS DE FORMACIÓN <IoCaretDown /></a>
            <a>NOSOTROS</a>
            <a>CONTACTO</a>
          </nav>
          <div className={style.menuRedes}>
            <FaFacebookF />
            <LuInstagram />
          </div>
        </div>
      )}
    </div>
  );
}
