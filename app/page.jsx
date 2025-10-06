"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  // 🔧 CONFIGURA ESTOS DATOS
  const GITHUB_USER = "itsfelipeh"; // <-- tu usuario de GitHub
  const REPO_NAME = "fuck"; // <-- nombre exacto del repo
  const TOTAL_IMAGES = 1; // <-- cantidad total de imágenes en /images/
  const EXTENSIONS = ["jpg", "png", "gif"]; // <-- extensiones posibles

  
  // Función para generar imagen random
  const getRandomImage = () => {
    const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;
    const randomExt = EXTENSIONS[Math.floor(Math.random() * EXTENSIONS.length)];
    return `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/main/images/fuck${randomIndex}.${randomExt}`;
  };

  // Carga inicial
  useEffect(() => {
    setImageUrl(getRandomImage());
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">
        Imagen Random 🔀
      </h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagen random"
          className="rounded-2xl shadow-lg max-w-full sm:max-w-[80%] md:max-w-[70%] max-h-[80vh] object-contain transition-all"
        />
      ) : (
        <p className="text-lg sm:text-xl md:text-2xl">Cargando imagen...</p>
      )}

      <button
        className="mt-6 bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition text-sm sm:text-base md:text-lg"
        onClick={() => setImageUrl(getRandomImage())}
      >
        Ver otra 🔄
      </button>
    </main>
  );
}
