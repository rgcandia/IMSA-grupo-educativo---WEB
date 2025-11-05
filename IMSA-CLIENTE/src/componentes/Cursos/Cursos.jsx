import styles from "./Cursos.module.css";

const cursosData = [
  {
    id: 1,
    titulo: "Asistente Terapéutico",
    descripcion:
      "Formate para brindar acompañamiento y apoyo terapéutico a personas en situación de vulnerabilidad o con discapacidad.",
    imagen: "/img/cursos/asistente-terapeutico.jpg",
  },
  {
    id: 2,
    titulo: "Cuidador Domiciliario",
    descripcion:
      "Aprendé técnicas de cuidado, asistencia y acompañamiento a personas mayores o con necesidades especiales, en el ámbito domiciliario.",
    imagen: "/img/cursos/cuidador1.jpg",
  },
  {
    id: 3,
    titulo: "Cuidador Domiciliario Internacional",
    descripcion:
      "Capacitate para desempeñarte como cuidador domiciliario en el exterior, con conocimientos interculturales y buenas prácticas internacionales.",
    imagen: "/img/cursos/cuidador2.jpg",
  },
  {
    id: 4,
    titulo: "Auxiliar de Enfermería Domiciliaria",
    descripcion:
      "Desarrollá habilidades para asistir en tareas básicas de enfermería dentro del ámbito domiciliario, con enfoque en la atención humanizada.",
    imagen: "/img/cursos/enfermeria.jpg",
  },
  {
    id: 5,
    titulo: "Inglés Básico, Medio y Avanzado",
    descripcion:
      "Aprendé inglés desde cero o perfeccioná tu nivel con un enfoque práctico para la comunicación cotidiana, profesional o laboral.",
    imagen: "/img/cursos/ingles.jpg",
  },
    {
    id: 6,
    titulo: "Electricidad Domiciliaria",
    descripcion:
      "Adquirí conocimientos teóricos y prácticos para realizar instalaciones, mantenimiento y reparación eléctrica en hogares.",
    imagen: "/img/cursos/electricidad.jpg",
  },
  {
    id: 7,
    titulo: "Cosmetología",
    descripcion:
      "Formate en técnicas de cuidado facial, corporal y estética integral, con conocimientos actualizados en cosmetología profesional.",
    imagen: "/img/cursos/cosmetologia.jpg",
  },
];

const Cursos = () => {
  return (
    <div className={styles.cursosContainer}>
      <h2 className={styles.cursosTitle}>ÁREA DE CURSOS</h2>

      <div className={styles.cursosGrid}>
        {cursosData.map((curso) => (
          <div key={curso.id} className={styles.cursoCard}>
            <div className={styles.cursoImgWrapper}>
              <img
                src={curso.imagen}
                alt={curso.titulo}
                className={styles.cursoImg}
              />
            </div>
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <button className={styles.ingresar}>Ver más</button>
          </div>
        ))}
      </div>

      <div className={styles.verTodos}>
        <button className={`${styles.ingresar} ${styles.verTodosBtn}`}>
          Ver todos los cursos de formación
        </button>
      </div>
    </div>
  );
};

export default Cursos;

