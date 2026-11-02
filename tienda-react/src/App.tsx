import { useState, useEffect } from "react";
import type { Producto } from "./tipos";
import { productos } from "./datos";
import { obtenerCatalogo } from "./api";
// Proyecto Final: Acceder al carrito compartido
import useCarrito from "./hooks/useCarrito";
import ProductCard from "./components/ProductCard";
import Beneficio from "./components/Beneficio";

export default function App() {

  // Proyecto Final: Agregar productos mediante el carrito compartido.
  const { agregarAlCarrito } = useCarrito();

  // Proyecto Final: Guardar la categoría seleccionada por el usuario.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");

  // Proyecto Final: Guardar el catálogo que se mostrará en la tienda.
  const [catalogo, setCatalogo] = useState<Producto[]>(productos);

  // Proyecto Final: Indicar si la API está cargando los productos
  const [cargando, setCargando] = useState(true);

  // Proyecto Final: Indicar si ocurrió un error al consultar la API
  const [errorApi, setErrorApi] = useState(false);

  // Proyecto Final: Permitir reintentar una consulta fallida
  const [intentos, setIntentos] = useState(0);

  // Proyecto Final: Cargar productos desde DummyJSON
  useEffect(() => {
    const controlador = new AbortController();

    obtenerCatalogo(controlador.signal)
      .then((nuevosProductos) => {
        if (!controlador.signal.aborted && nuevosProductos.length > 0) {
          // Proyecto Final: Conservar los productos locales y agregar los de la API
          const productosApi = nuevosProductos.map((p) => ({ ...p, id: p.id + 10000 }));
          setCatalogo([...productos, ...productosApi]);
        }
      })
      .catch((error) => {
        if (!controlador.signal.aborted) {
          console.error("Error al cargar productos:", error);
          // Proyecto Final: Registrar el error para mostrarlo en pantalla
          setErrorApi(true);
        }
      })
      // Proyecto Final: Terminar el estado de carga
      .finally(() => {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      });

    return () => controlador.abort();
  }, [intentos]);

  // Proyecto Final: Filtrar los productos del catálogo actual
  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? catalogo
    : catalogo.filter((p) => p.categoria === categoriaSeleccionada);

  return (
    <main className="mx-auto max-w-5xl p-6">

      {/* Proyecto Final: Titulo para identificar la sección del catálogo */}
      <h2 className="mb-4 mt-6 text-xl font-semibold">
        Productos destacados
      </h2>

      {/* Proyecto Final: Mostrar un mensaje mientras carga la API */}
      {cargando && (
        <p className="mb-4 text-sm text-blue-600">Consultando productos de DummyJSON</p>
      )}

      {/* Proyecto Final: mostrar el error y permitir reintentar */}
      {errorApi && (
        <div className="mb-4">
          <p className="mb-2 text-sm text-red-600">No se pudo consultar DummyJSON. Se muestran los productos locales</p>
          <button
            type="button"
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            onClick={() => {
              setErrorApi(false);
              setCargando(true);
              setIntentos((anterior) => anterior + 1);
            }}
          >
            Reintentar
          </button>
        </div>
      )}

      {/* Proyecto Final: Botones para filtrar y resaltar la categoría seleccionada */}
      <div className="mb-6 flex flex-wrap gap-2">
        <button
          type="button"
          onClick={() => setCategoriaSeleccionada("Todos")}
          className={`rounded-lg px-4 py-2 ${
            categoriaSeleccionada === "Todos"
              ? "bg-blue-600 text-white"
              : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
          }`}
        >
          Todos
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSeleccionada("Audio")}
          className={`rounded-lg px-4 py-2 ${
            categoriaSeleccionada === "Audio"
              ? "bg-blue-600 text-white"
              : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
          }`}
        >
          Audio
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSeleccionada("Laptops")}
          className={`rounded-lg px-4 py-2 ${
            categoriaSeleccionada === "Laptops"
              ? "bg-blue-600 text-white"
              : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
          }`}
        >
          Laptops
        </button>
        <button
          type="button"
          onClick={() => setCategoriaSeleccionada("Relojes")}
          className={`rounded-lg px-4 py-2 ${
            categoriaSeleccionada === "Relojes"
              ? "bg-blue-600 text-white"
              : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"
          }`}
        >
          Relojes
        </button>
      </div>

      {/* PROPS */}
      {/* Proyecto Final: Distribución responsive con CSS Grid */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {
          // Proyecto Final: mostrar únicamente los productos de la categoría seleccionada
          productosFiltrados.map((p) => (
            <ProductCard
              producto={p}
              key={p.id}
              onAgregar={() => agregarAlCarrito(p)}
            />
          ))
        }
      </section>

      {/* Proyecto Final: Titulo para identificar la sección de beneficios */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">
        Beneficios de comprar en TecCart
      </h2>

      {/* Proyecto Final: Seccion de beneficios reutilizando componentes y props */}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Beneficio titulo="Envíos" detalle="Entregamos tus productos a domicilio" />
        <Beneficio titulo="Cuotas" detalle="Opciones de pago para tus compras" />
        <Beneficio titulo="Garantía" />
      </section>
    </main>
  );
}