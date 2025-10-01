import { useState, useEffect, useRef } from 'react';
import style from './Carrousel.module.css';

export default function Carrousel() {
  const slides = [
    {
      imagen: "/img/carrousel/IMSA_Carrousel_1.webp",
      titulo: "Tus oportunidades no tienen límites",
      parrafos: [
        "Poder estudiar desde cualquier lugar del mundo y comenzar tu camino profesional.",
        "Online, a tu ritmo y con certificación.",
      ],
      boton: "Ver cursos de formación",
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_2.webp",
      titulo: "Aprendé desde donde estés",
      parrafos: [
        "Nuestros cursos están creados con una mirada práctica y humana.",
        "Porque aprender es más que estudiar: es crecer, elegir y transformar",
      ],
      boton: "Conocenos más",
    },
    {
      imagen: "/img/carrousel/IMSA_Carrousel_3.webp",
      titulo: "Una experiencia de aprendizaje que te acompaña",
      parrafos: [
        "Nuestros cursos organizados por módulos, con calendario de actividades, contenidos actualizados y espacios de consulta directa.",
        "Estudiás con libertad, pero siempre acompañado.",
      ],
      boton: "Ver cursos de formación",
    },
  ];

  const [indice, setIndice] = useState(0);
  const [pausado, setPausado] = useState(false);
  const intervaloRef = useRef(null);

  const iniciarAutoAvance = () => {
    if (intervaloRef.current) clearInterval(intervaloRef.current);
    intervaloRef.current = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 6000);
  };

  useEffect(() => {
    if (!pausado) {
      iniciarAutoAvance();
    }

    return () => clearInterval(intervaloRef.current);
  }, [pausado]);

  const handleClickImagen = () => {
    setPausado(true);
    clearInterval(intervaloRef.current);

    // Reactivar después de 15s
    setTimeout(() => {
      setPausado(false);
    }, 15000);
  };

  const handleManualChange = (nuevaDireccion) => {
    setIndice((prev) => (prev + nuevaDireccion + slides.length) % slides.length);
    setPausado(true);
    clearInterval(intervaloRef.current);

    // Reactivar después de 15s también
    setTimeout(() => {
      setPausado(false);
    }, 15000);
  };

  const actual = slides[indice];

  return (
    <div className={style.carrusel}>
      <img
        src={actual.imagen}
        alt={`Slide ${indice + 1}`}
        className={style.img}
        loading="eager"
        onClick={handleClickImagen}
      />

      <div className={style.texto}>
        <h1>{actual.titulo}</h1>
        {actual.parrafos.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <button className={style.boton}>{actual.boton}</button>
      </div>

      {/* Controles manuales */}
      <div className={style.controles}>
        <button onClick={() => handleManualChange(-1)} className={style.controlBtn}>◀</button>
        <button onClick={() => handleManualChange(1)} className={style.controlBtn}>▶</button>
      </div>
    </div>
  );
}
