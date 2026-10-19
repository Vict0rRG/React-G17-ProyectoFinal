//import formatearPrecio from "../formato";
import type { Producto } from "../tipos";
import Precio from "./Precio";

interface Props {
  producto : Producto;
}

export default function ProductCard({ producto } : Props) {
  // Proyecto Final: cambie w-64 por w-full para adaptar la tarjeta al Grid
  return (
    <article className="w-full rounded-xl border p-4">
        <img src={producto.imagen} alt={producto.nombre} className="mb-3 aspect-square object-contain" />
        <p className="text-sm text-gray-500">{producto.marca}</p>
        <h2 className="font-semibold">{producto.nombre}</h2>
        <p className="text-sm">{
            producto.stock === 0 ? 'Agotado' : `${producto.stock} disponibles`
        }</p>
        {/* Proyecto Final: reutilizamos el componente Precio mediante props */}
        <Precio precio={producto.precio} />
    </article>
  )
}