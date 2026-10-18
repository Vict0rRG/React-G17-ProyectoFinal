// Proyecto Final: componente reutilizable para mostrar los beneficios de la tienda - Aplicacion de props
interface Props {
  titulo: string;
  detalle?: string;
}

export default function Beneficio({
  titulo,
  detalle = "Beneficio disponible solo para clientes"
}: Props) {
  return (
    <article className="rounded-xl border p-4 text-center">
      <h3 className="font-semibold">{titulo}</h3>
      <p className="mt-2 text-sm text-gray-500">{detalle}</p>
    </article>
  );
}