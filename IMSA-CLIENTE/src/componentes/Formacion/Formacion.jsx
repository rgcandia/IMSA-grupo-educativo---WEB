import styles from './Formacion.module.css';

export default function Formacion() {
  const areas = [
    { title: 'SALUD', url_img: '/img/Formacion/salud.webp' },
    { title: 'IDIOMAS', url_img: '/img/Formacion/idiomas.webp' },
    { title: 'BELLEZA', url_img: '/img/Formacion/belleza.webp' },
    { title: 'DISEÑO', url_img: '/img/Formacion/diseño.webp' },
    { title: 'TECNOLOGÍA', url_img: '/img/Formacion/tecnologia.webp' },
    { title: 'TÉCNICOS', url_img: '/img/Formacion/tecnicos.webp' },
  ];

  return (
    <div className={styles.container}>
      {areas.map((area, index) => (
        <div key={index} className={styles.card}>
          <img
            src={area.url_img}
            alt={area.title}
            className={styles.image}
            loading="eager" // <- fuerza a que el navegador la pinte cuanto antes
          />
          <div className={styles.content}>
            <p className={styles.title}>{area.title}</p>
            <button className={styles.button}>Ver cursos</button>
          </div>
        </div>
      ))}
    </div>
  );
}
