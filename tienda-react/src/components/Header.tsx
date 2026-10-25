
interface Props {
  nombre: string;
  eslogan?: string;

  // Proyecto Final: cantidad de productos recibidos
  cantidadCarrito?: number;
}

export default function Header({
  nombre,
  eslogan = "Tecnologia para todos",
  cantidadCarrito = 0
}: Props) {
  return (
    <header className="mb-6 flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-bold">{nombre}</h1>
        <p className="text-sm text-gray-500">{eslogan}</p>
      </div>

      {/* Proyecto Final: mostrar la cantidad recibida mediante props */}
      <p>
        🛒 {cantidadCarrito} {cantidadCarrito === 1 ? "producto" : "productos"}
      </p>
    </header>
  );
}
