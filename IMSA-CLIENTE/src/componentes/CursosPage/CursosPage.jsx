import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import styles from "./CursosPage.module.css";
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'
const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursosPage() {
  const [filtroArea, setFiltroArea] = useState("TODOS");
  const [filtroModalidad, setFiltroModalidad] = useState("TODOS");

  // Generar opciones automáticamente
  const areas = ["TODOS", ...new Set(cursosData.map((c) => c.area))];
  const modalidades = ["TODOS", ...new Set(cursosData.map((c) => c.modalidad.toUpperCase()))];

  // Filtrado
  const cursosFiltrados = cursosData.filter((curso) => {
    const coincideArea = filtroArea === "TODOS" || curso.area === filtroArea;
    const coincideModalidad =
      filtroModalidad === "TODOS" ||
      curso.modalidad.toUpperCase() === filtroModalidad;
    return coincideArea && coincideModalidad;
  });


  //hacer scroll al top cuando se monte
  useEffect(()=>{

window.scrollTo({top:0,behavior:'smooth'});
  },[]);
  return (
  <div>
    <Nav/>
 
    <div className={styles.cursosContainer}>
    
      <h2 className={styles.cursosTitle}>CURSOS DISPONIBLES</h2>

      {/* FILTROS */}
      <div className={styles.filtros}>
        <select value={filtroArea} onChange={(e) => setFiltroArea(e.target.value)}>
          {areas.map((area) => (
            <option key={area} value={area}>
              {area}
            </option>
          ))}
        </select>

        <select
          value={filtroModalidad}
          onChange={(e) => setFiltroModalidad(e.target.value)}
        >
          {modalidades.map((mod) => (
            <option key={mod} value={mod}>
              {mod}
            </option>
          ))}
        </select>
      </div>

      {/* GRID DE CURSOS */}
      <div className={styles.cursosGrid}>
        {cursosFiltrados.map((curso) => (
          <div key={curso.id} className={styles.cursoCard}>
            <div className={styles.cursoImgWrapper}>
              <img src={LOGO_URL} alt="Logo IMSA" className={styles.cursoLogoOverlay} />
              <span className={styles.cursoAsincronicoTag}>
                {curso.modalidad.toUpperCase()}
              </span>
              <img src={curso.imagen} alt={curso.titulo} className={styles.cursoImg} />
            </div>
            <h3>{curso.titulo}</h3>
            <p>{curso.descripcion}</p>
            <Link to={`/cursos/${curso.id}`} className={styles.ingresar}>
              Ver más
            </Link>
          </div>
        ))}
        {cursosFiltrados.length === 0 && <p>No se encontraron cursos.</p>}
      </div>
    </div>

    <Footer/>
     </div>
  );
}
