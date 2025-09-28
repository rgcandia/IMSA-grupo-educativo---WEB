import styles from './Formacion.module.css';

export default function Formacion() {
  const areas = [
    {
      title: 'SALUD',
      url_img: '/img/Formacion/salud.png',
    },
    {
      title: 'IDIOMAS',
      url_img: '/img/Formacion/idiomas.jpg',
    },
    {
      title: 'BELLEZA',
      url_img: '/img/Formacion/belleza.jpg',
    },
    {
      title: 'DISEÑO',
      url_img: '/img/Formacion/diseño.jpg',
    },
    {
      title: 'TECNOLOGÍA',
      url_img: '/img/Formacion/tecnologia.jpg',
    },
    {
      title: 'TÉCNICOS',
      url_img: '/img/Formacion/tecnicos.jpg',
    },
  ];

  return (
    <div className={styles.container}>
      {areas.map((area, index) => (
        <div key={index} className={styles.card}>
          <img src={area.url_img} alt={area.title} className={styles.image} />
          <div className={styles.content}>
            <p className={styles.title}>{area.title}</p>
            <button className={styles.button}>Ver cursos</button>
          </div>
        </div>
      ))}
    </div>
  );
}
