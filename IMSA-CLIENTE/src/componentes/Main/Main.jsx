// src/components/Main/Main.jsx
import Carrousel from '../Carrousel/Carrousel';
import Formacion from '../Formacion/Formacion';
import style from './Main.module.css'
export default function Main() {
  return (
    <main className={style.main}>
      <Carrousel />
      <Formacion />
    </main>
  );
}
