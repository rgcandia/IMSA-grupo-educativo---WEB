// src/components/Main/Main.jsx
import Carrousel from '../Carrousel/Carrousel';
import style from './Main.module.css'
export default function Main() {
  return (
    <main className={style.main}>
      <Carrousel />
    </main>
  );
}
