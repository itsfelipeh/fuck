// app/layout.jsx
export const metadata = {
  title: "Random Images",
  description: "Muestra imágenes random desde GitHub",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
