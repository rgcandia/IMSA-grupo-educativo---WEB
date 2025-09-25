import style from './Preloader.module.css';
import logo from '../../assets/images/IMSA_Logo_Blanco.png';
import {Hourglass} from 'react-loader-spinner'

export default function Preloader() {
  return (
    <div className={style.preloader}>
      <img src={logo} alt="Logo IMSA" className={style.logo} />
     <Hourglass
  visible={true}
  height="80"
  width="80"
  ariaLabel="hourglass-loading"
  wrapperStyle={{}}
  wrapperClass=""
  colors={[' #f4f0f9', '#372d69ff' ]}
  />
     
    </div>
  );
}

