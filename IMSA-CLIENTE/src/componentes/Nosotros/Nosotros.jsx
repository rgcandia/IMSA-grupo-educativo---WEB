import style from './Nosotros.module.css';
import logo from '../../assets/images/IMSA_Logo_Color.png';
import { LightbulbIcon, TargetIcon, BookOpenIcon, RocketIcon  } from '@phosphor-icons/react';

export default function Nosotros() {
  return (
    <section className={style.nosotros}>
      <div className={style.contenido}>
        <div className={style.texto}>
          <div className={style.tituloContainer}>
            <h2 className={style.titulo}>SOMOS</h2>
            <img src={logo} alt="IMSA Logo" className={style.logo} />
          </div>

          <div className={style.bloque}>
            <div className={style.iconoTitulo}>
              <LightbulbIcon size={28} color="#7a62fb" weight="duotone" />
              <h3>Innovación</h3>
            </div>
            <p>En IMSA creemos que el aprendizaje debe evolucionar. Por eso desarrollamos una propuesta educativa moderna, flexible y 100% online, con una plataforma interactiva que combina tecnología, contenidos actualizados y recursos dinámicos para que puedas estudiar desde cualquier lugar del mundo.</p>
          </div>

          <div className={style.bloque}>
            <div className={style.iconoTitulo}>
              <TargetIcon size={28} color="#7a62fb" weight="duotone" />
              <h3>Motivación</h3>
            </div>
            <p>Sabemos que cada estudiante tiene un sueño, una meta, una razón para empezar. En IMSA te acompañamos desde el primer paso, brindándote el impulso que necesitás para avanzar, con un entorno positivo, cercano y diseñado para que te sientas parte de una comunidad que crece con vos.</p>
          </div>

          <div className={style.bloque}>
            <div className={style.iconoTitulo}>
              <BookOpenIcon size={28} color="#7a62fb" weight="duotone" />
              <h3>Saber</h3>
            </div>
            <p>La base de toda transformación es el conocimiento. Nuestros cursos están pensados para ofrecerte herramientas concretas y aplicables en áreas clave como salud, idiomas, belleza, tecnología, diseño y oficios técnicos. Aprendé a tu ritmo, con el respaldo de docentes capacitados.</p>
          </div>

          <div className={style.bloque}>
            <div className={style.iconoTitulo}>
              <RocketIcon  size={28} color="#7a62fb" weight="duotone" />
              <h3>Acción</h3>
            </div>
            <p>Capacitarte con IMSA es más que aprender: es prepararte para actuar. Queremos que cada curso sea un paso real hacia tu desarrollo personal y profesional. Porque el saber cobra sentido cuando se transforma en oportunidades. Hoy es un gran día para empezar a construir tu futuro.</p>
          </div>

          <div className={style.botonContainer}>
            <a href="/contacto" className={style.botonContacto}>Contactate con nosotros</a>
          </div>
        </div>

    
      </div>
    </section>
  );
}


