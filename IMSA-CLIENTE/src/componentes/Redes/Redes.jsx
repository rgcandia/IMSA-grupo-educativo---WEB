import { useEffect, useRef, useState } from 'react';
import style from './Redes.module.css';
import facebook from '../../../public/img/redes/Facebook.png';
import instagram from '../../../public/img/redes/Instagram.png';

export default function Redes() {
  const sectionRef = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      {
        threshold: 0.5, // Se considera "visible" cuando al menos el 50% es visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className={style.banner}>
      <div className={style.contenido}>
        <h2 className={style.titulo}>Seguinos en las redes</h2>
        <p className={style.subtitulo}>Para estar al tanto de todas nuestras novedades</p>
        <div className={style.iconos}>
          <img
            src={facebook}
            alt="Facebook"
            className={`${style.icono} ${inView ? style.animate : ''} ${style.delay1}`}
          />
          <img
            src={instagram}
            alt="Instagram"
            className={`${style.icono} ${inView ? style.animate : ''} ${style.delay2}`}
          />
        </div>
      </div>
    </section>
  );
}
