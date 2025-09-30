import { useState, useEffect } from "react";
import Preloader from "./componentes/Preloader/Preloader.jsx";
import Home from "./componentes/Home/Home.jsx";

// ✅ Lista de imágenes a precargar
const imagesToPreload = [
  "/img/carrousel/IMSA_Carrousel_1.jpg",
  "/img/carrousel/IMSA_Carrousel_2.jpg",
  "/img/carrousel/IMSA_Carrousel_3.jpg",
  "/img/Formacion/salud.png",
  "/img/Formacion/idiomas.jpg",
  "/img/Formacion/belleza.jpg",
  "/img/Formacion/diseño.jpg",
  "/img/Formacion/tecnologia.jpg",
  "/img/Formacion/tecnicos.jpg",
];

function App() {
  const [imagesReady, setImagesReady] = useState(false);
  const [timerDone, setTimerDone] = useState(false);
  const [loading, setLoading] = useState(true);

  // ⏱️ Timer de 3 segundos
  useEffect(() => {
    const timer = setTimeout(() => {
      setTimerDone(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // 🖼️ Precarga de imágenes
  useEffect(() => {
    let loadedCount = 0;
    const total = imagesToPreload.length;

    const timeout = setTimeout(() => {
      // Fallback si tarda demasiado en cargar
      setImagesReady(true);
    }, 10000);

    imagesToPreload.forEach((src) => {
      const img = new Image();
      img.src = src;
      img.onload = img.onerror = () => {
        loadedCount++;
        if (loadedCount === total) {
          clearTimeout(timeout);
          setImagesReady(true);
        }
      };
    });

    return () => clearTimeout(timeout);
  }, []);

  // ✅ Mostrar contenido solo cuando se cumplan ambas condiciones
  useEffect(() => {
    if (imagesReady && timerDone) {
      setLoading(false);
    }
  }, [imagesReady, timerDone]);

  return (
    <>
      {loading ? <Preloader /> : <Home />}
    </>
  );
}

export default App;
