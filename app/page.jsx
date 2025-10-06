// app/page.jsx
"use client";

import { useEffect, useState } from "react";

export default function Home({ images }) {
  const [imageUrl, setImageUrl] = useState("");

  useEffect(() => {
    if (images.length > 0) {
      // Elegir imagen random
      const randomIndex = Math.floor(Math.random() * images.length);
      setImageUrl(images[randomIndex]);
    }
  }, [images]);

  const handleClick = () => {
    const randomIndex = Math.floor(Math.random() * images.length);
    setImageUrl(images[randomIndex]);
  };

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center p-4">
      <h1 className="text-3xl font-bold mb-6">Imagen Random 🔀</h1>

      {imageUrl ? (
        <img
          src={imageUrl}
          alt="Imagen random"
          className="rounded-2xl shadow-lg max-w-full max-h-[80vh] object-contain transition-all"
        />
      ) : (
        <p>Cargando imagen...</p>
      )}

      <button
        className="mt-6 bg-white text-black px-5 py-2 rounded-xl hover:bg-gray-300 transition"
        onClick={handleClick}
      >
        Ver otra 🔄
      </button>
    </main>
  );
}

// Esto se ejecuta en el servidor para generar la lista de imágenes
import fs from "fs";
import path from "path";

export async function getStaticProps() {
  const imagesDir = path.join(process.cwd(), "public/images");
  const files = fs.readdirSync(imagesDir);

  // Solo tomar archivos .jpg
  const images = files
    .filter((file) => file.endsWith(".jpg"))
    .map((file) => `/images/${file}`);

  return {
    props: {
      images,
    },
  };
}
