import { useState } from "react";
import styles from './Formacion.module.css';

const areas = [
  { title: 'SALUD', url_img: '/img/Formacion/salud.webp' },
  { title: 'IDIOMAS', url_img: '/img/Formacion/idiomas.webp' },
  { title: 'BELLEZA', url_img: '/img/Formacion/belleza.webp' },
  { title: 'DISEÑO', url_img: '/img/Formacion/diseño.webp' },
  { title: 'TECNOLOGÍA', url_img: '/img/Formacion/tecnologia.webp' },
  { title: 'TÉCNICOS', url_img: '/img/Formacion/tecnicos.webp' },
];

export default function Formacion() {
  return (
    <div className={styles.container}>
      {areas.map((area, index) => (
        <Card key={index} area={area} />
      ))}
    </div>
  );
}

function Card({ area }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={styles.card}>
      <div className={`${styles.placeholder} ${loaded ? styles.hidden : ''}`} />
      <img
        src={area.url_img}
        alt={area.title}
        className={`${styles.image} ${loaded ? styles.visible : ''}`}
        onLoad={() => setLoaded(true)}
      />
      <div className={styles.content}>
        <p className={styles.title}>{area.title}</p>
        <button className={styles.button}>Ver cursos</button>
      </div>
    </div>
  );
}
