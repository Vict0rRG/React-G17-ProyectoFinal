import formatearPrecio from "../formato";

interface Props {
  nombre: string;
  eslogan?: string;

  // Proyecto Final: cantidad de productos recibidos
  cantidadCarrito?: number;
  // Proyecto Final: recibir el subtotal calculado desde App
  subtotal?: number;
}

export default function Header({
  nombre,
  eslogan = "Tecnologia para todos",
  cantidadCarrito = 0,
  subtotal =0
}: Props) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{nombre}</h1>
        <p className="text-sm text-gray-500">{eslogan}</p>
      </div>
      {/* Proyecto Final: mostrar la cantidad de productos y el subtotal */}
      <div className="text-right">
    <p>
        🛒 {cantidadCarrito} {cantidadCarrito === 1 ? "producto" : "productos"}
    </p>
    {/* Proyecto Final: mostrar el subtotal recibido desde App */}
    <p className="text-sm text-gray-600">
        Subtotal sin IGV: {formatearPrecio(subtotal)}
    </p>
    </div>
    </header>
  );
}
