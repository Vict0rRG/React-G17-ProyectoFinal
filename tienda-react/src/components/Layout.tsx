
import { Outlet } from "react-router-dom";
import Header from "./Header";
// Proyecto Final: reutilizar el pie de página en todas las rutas.
import Footer from "./Footer";
import useCarrito from "../hooks/useCarrito";

export default function Layout() {
  // Proyecto Final: Cbtener el carrito compartido
  const { carrito, subtotal } = useCarrito();

  return (
    <>
      {/* Proyecto Final: mostrar el encabezado en todas las páginas */}
      <div className="mx-auto max-w-5xl px-6 pt-6">
        <Header
          nombre="TecCart"
          eslogan="Una Vida Tecnologica"
          cantidadCarrito={carrito.length}
          subtotal={subtotal}
        />
      </div>

      {/* Proyecto Final: Mostrar el contenido de la ruta seleccionada */}
      <Outlet />
      {/* Proyecto Final: Mostrar el Footer en todas las paginas */}
      <div className="mx-auto max-w-5xl px-6 pb-6">
        <Footer />
      </div>

    </>
  );
}
