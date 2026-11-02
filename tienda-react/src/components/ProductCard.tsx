//import formatearPrecio from "../formato";
import type { Producto } from "../tipos";
// Proyecto Final: navegar al detalle de un producto.
import { Link } from "react-router-dom";
import Precio from "./Precio";

interface Props {
  producto: Producto;
  // Proyecto Final: función para agregar un producto al carrito
  onAgregar?: () => void;
}

//export default function ProductCard({ producto } : Props) {
export default function ProductCard({ producto, onAgregar }: Props) {
  // Proyecto Final: cambie w-64 por w-full para adaptar la tarjeta al Grid
  return (
    <article className="tarjeta-producto w-full rounded-xl border p-4">
      <img src={producto.imagen} alt={producto.nombre} className="mb-3 aspect-square object-contain" />
      <p className="text-sm text-gray-500">{producto.marca}</p>

      {/* Proyecto Final: abrir el detalle de cualquier producto */}
      <Link
        to={`/producto/${producto.id}`}
        className="font-semibold text-blue-600 hover:underline"
      >
        {producto.nombre}
      </Link>

      <p className="text-sm">
        {producto.stock === 0 ? 'Agotado' : `${producto.stock} disponibles`}
      </p>

      {/* Proyecto Final: reutilizamos el componente Precio mediante props */}
      <Precio precio={producto.precio} />

      {/* Proyecto Final: impedir agregar productos agotados */}
      <button
        type="button"
        onClick={onAgregar}
        disabled={producto.stock === 0}
        className="mt-4 w-full rounded-lg bg-blue-600 p-2 text-white hover:bg-blue-700 disabled:bg-gray-400"
      >
        {producto.stock === 0 ? "Agotado" : "Agregar al carrito"}
      </button>
    </article>
  )
}