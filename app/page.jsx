"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [imageUrl, setImageUrl] = useState("");

  // 🔧 CONFIGURA ESTOS DATOS
  const GITHUB_USER = "itsfelipeh"; // <-- tu usuario de GitHub
  const REPO_NAME = "fuck"; // <-- nombre exacto del repo
  const TOTAL_IMAGES = 1; // <-- cantidad total de imágenes en /images/

  useEffect(() => {
    // Genera un número random entre 1 y TOTAL_IMAGES
    const randomIndex = Math.floor(Math.random() * TOTAL_IMAGES) + 1;

    // URL del archivo "raw" en GitHub (pública)
    const url = `https://raw.githubusercontent.com/${GITHUB_USER}/${REPO_NAME}/main/images/fuck${randomIndex}.png`;

    setImageUrl(url);
  }, []);

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center">
      <h1 className="text-3xl font-bold mb-6">Imagen Random 🔀</h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagen random"
          className="rounded-2xl shadow-lg max-w-[90%] max-h-[80vh] object-contain transition-all"
        />
      ) : (
        <p>Cargando imagen...</p>
      )}

      <button
        className="mt-6 bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition"
        onClick={() => window.location.reload()}
      >
        Ver otra 🔄
      </button>
    </main>
  );
}
