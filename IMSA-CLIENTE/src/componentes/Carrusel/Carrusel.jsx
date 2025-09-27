// src/components/Carrusel/Carrusel.jsx
import { useState, useEffect } from 'react';
import style from './Carrusel.module.css';

export default function Carrusel() {
  const slides = [
    {
      titulo: "Tus oportunidades no tienen límites",
      parrafos: [
        "Poder estudiar desde cualquier lugar del mundo y comenzar tu camino profesional.",
        "Online, a tu ritmo y con certificación.",
      ],
      boton: "Ver cursos de formación",
    },
    {
      titulo: "Aprendé desde donde estés",
      parrafos: [
        "Nuestros cursos están creado con una mirada práctica y humana.",
        "Porque aprender es más que estudiar: es crecer, elegir y transformar",
      ],
      boton: "Conocenos más",
    },
    {
      titulo: "Una experiencia de aprendizaje que te acompaña",
      parrafos: [
        "Nuestros cursos organizados por módulos, con calendario de actividades, contenidos actualizados y espacios de consulta directa.",
        "estudiás con libertad, pero siempre acompañado",
      ],
      boton: "Ver cursos de formación",
    },
  ];

  const [indice, setIndice] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setIndice((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(intervalo);
  }, [slides.length]);

  const actual = slides[indice];

  return (
    <div className={style.carrusel}>
      <div className={style.slide}>
        <h1>{actual.titulo}</h1>
        {actual.parrafos.map((texto, i) => (
          <p key={i}>{texto}</p>
        ))}
        <button className={style.boton}>{actual.boton}</button>
      </div>
    </div>
  );
}
