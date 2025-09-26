import style from './Nav.module.css'
import logo from '../../assets/images/logo_imsa_violeta_negro.png'
import { IoCaretDown } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa6";
import { LuInstagram } from "react-icons/lu";
export default function Nav (){
    return(
        <div className={style.nav}>
          <div className={style.logo}>
          <img src={logo}/>
          </div>  
          <div className={style.enlaces}>
            <a>CURSOS DE FORMACIÓN <IoCaretDown /></a>
            <a>NOSOTROS</a>
            <a>CONTACTO</a>
            <a>INGRESAR</a>

          </div>
          <div className={style.redes}>
            <FaFacebookF />
            <LuInstagram />
          </div>
        </div>
    );
}