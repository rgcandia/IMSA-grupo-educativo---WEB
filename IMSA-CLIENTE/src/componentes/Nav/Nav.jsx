import style from './Nav.module.css'
import logo from '../../assets/images/logo_imsa_violeta_negro.png'
import { IoCaretDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
import { CiMenuBurger } from "react-icons/ci";
import { CiMenuFries } from "react-icons/ci";
import { useState , useEffect} from 'react'; 

export default function Nav (){

// dentro del componente:
const [menuAbierto, setMenuAbierto] = useState(false);
// Use Effect para 
  useEffect(()=>{
 const mediaQuery = window.matchMedia('(max-width: 800px)');

    // Función que se llama cada vez que cambia el ancho
    const handleResize = () => {
      if (!mediaQuery.matches) {
        // Si la pantalla se agranda, cerramos el menú
        setMenuAbierto(false);
      }
    };

    mediaQuery.addEventListener('change', handleResize);

    // Limpieza
    return () => {
      mediaQuery.removeEventListener('change', handleResize);
    };
  },[])

    return(
        <div className={style.nav}>
          <div className={style.logo}>
          <img src={logo}/>
          </div>  
          <div className={style.enlaces}>
            <a>CURSOS DE FORMACIÓN <IoCaretDown /></a>
            <a href='#nosotros'>NOSOTROS</a>
            <a>CONTACTO</a>
            <a className={style.ingresar}>INGRESAR </a>

          </div>
          <div className={style.redes}>
            <FaFacebookF />
            <LuInstagram />
          </div>

          {/* Menú Hamburguesa */}
          <div className={style.hamburguesa} onClick={() => setMenuAbierto(!menuAbierto)}>
  {menuAbierto ? <CiMenuFries size={28} style={{color:'#7a62fb' }} /> : <CiMenuBurger size={28} style={{color:'#7a62fb' }}/>}

</div>
{menuAbierto && (
  <div className={style.menuMobile}>
    <nav className={style.menuLinks}>
      <a>CURSOS DE FORMACIÓN  <IoCaretDown /></a>
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