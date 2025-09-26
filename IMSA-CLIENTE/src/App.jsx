import { useState, useEffect } from "react";
import Preloader from "./componentes/Preloader/Preloader.jsx";
import Home from "./componentes/Home/Home.jsx"; // tu contenido real

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Esperar 2 segundos antes de ocultar el preloader
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    // Limpieza del timer si el componente se desmonta antes
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {loading ? <Preloader /> : <Home />}
    </>
  );
}

export default App;
