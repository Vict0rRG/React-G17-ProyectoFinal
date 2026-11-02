
import { Link } from "react-router-dom";

export default function NoEncontrado() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-bold">
        Error 404 - Página no encontrada
      </h1>

      <p>La página que buscas no existe en TechCart.</p>

      {/* Proyecto Final: regresar a la página principal */}
      <Link to="/" className="mt-4 inline-block text-blue-600">
        Volver al catálogo
      </Link>
    </main>
  );
}
