import style from './Preloader.module.css'
import logo from '../../assets/images/IMSA_Logo_Blanco.jpg'
export default function Preloader(){
    return(
<div className={style.preloader}> 
   
<img src={logo} alt='Logo IMSA'/>

</div>
    );
}