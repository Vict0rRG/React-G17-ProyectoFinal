
import formatearPrecio from "../formato";
// Proyecto Final: componente reutilizable para mostrar el precio base y el precio con IGV
interface Props {
  precio: number;
}

export default function Precio({ precio }: Props) {
  return (
    <div>
      <p className="text-xs text-gray-500">
        {(precio * 1.18).toFixed(2)} con IGV
      </p>
      <p className="mt-2">{formatearPrecio(precio)}</p>
    </div>
  );
}
