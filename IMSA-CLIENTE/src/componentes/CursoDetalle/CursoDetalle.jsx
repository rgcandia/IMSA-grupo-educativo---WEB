import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import cursosData from "../../data/cursos.json";
import Nav from "../Nav/Nav";
import Footer from "../Footer/Footer";
import styles from "./CursoDetalle.module.css";

const LOGO_URL = "/logo_imsa_blanco.png";

export default function CursoDetalle() {
  const { id } = useParams();
  const curso = cursosData.find((c) => String(c.id) === id);

  // Scroll al top al cargar
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  if (!curso) {
    return (
      <div>
        <Nav />
        <div className={styles.noEncontrado}>
          <h2>Curso no encontrado</h2>
          <Link to="/cursos" className={styles.volverBtn}>
            Volver a cursos
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div>
      <Nav />
      <div className={styles.detalleContainer}>
        <div className={styles.detalleCard}>
          <div className={styles.imagenWrapper}>
            <img
              src={LOGO_URL}
              alt="Logo IMSA"
              className={styles.cursoLogoOverlay}
            />
            <span className={styles.cursoModalidadTag}>
              {curso.modalidad.toUpperCase()}
            </span>
            <img
              src={curso.imagen}
              alt={curso.titulo}
              className={styles.imagenCurso}
            />
          </div>

          <div className={styles.detalleContenido}>
            <h2>{curso.titulo}</h2>
            <p className={styles.descripcion}>{curso.descripcion}</p>

            <div className={styles.infoExtra}>
              <p>
                <strong>Área:</strong> {curso.area}
              </p>
              <p>
                <strong>Duración:</strong> {curso.duracion}
              </p>
            </div>

            <Link to="/cursos" className={styles.volverBtn}>
              ← Volver a cursos
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
