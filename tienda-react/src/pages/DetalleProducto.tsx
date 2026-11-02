import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { obtenerCatalogo } from "../api";
import type { Producto } from "../tipos";
import { productos } from "../datos";
import formatearPrecio from "../formato";

export default function DetalleProducto() {
  // Proyecto Final: Obtener el ID del producto desde la URL
  const { id } = useParams();

  // Proyecto Final: identificar si el producto proviene de DummyJSON
  const esProductoApi = Number(id) >= 10000;

  // Proyecto Final: guardar los productos consultados
  const [productosApi, setProductosApi] = useState<Producto[]>([]);
  const [cargando, setCargando] = useState(esProductoApi);
  const [errorApi, setErrorApi] = useState(false);

  // Proyecto Final: Consultar DummyJSON solamente para productos externos
  useEffect(() => {
    if (!esProductoApi) return;

    const controlador = new AbortController();

    obtenerCatalogo(controlador.signal)
      .then((resultado) => {
        if (!controlador.signal.aborted) {
          const productosConvertidos = resultado.map((p) => ({
            ...p,
            id: p.id + 10000,
          }));

          setProductosApi(productosConvertidos);
        }
      })
      .catch((error) => {
        if (!controlador.signal.aborted) {
          console.error("Error al consultar el detalle:", error);
          setErrorApi(true);
        }
      })
      .finally(() => {
        if (!controlador.signal.aborted) {
          setCargando(false);
        }
      });

    return () => controlador.abort();
  }, [esProductoApi]);

  // Proyecto Final: Buscar entre productos locales y de DummyJSON
  const producto = [...productos, ...productosApi].find(
    (p) => p.id === Number(id)
  );

  // Proyecto Final: informar mientras se consulta el detalle externo.
  if (esProductoApi && cargando) {
    return <p className="p-6">Cargando detalle del producto...</p>;
  }

  // Proyecto Final: informar cuando falle la API.
  if (esProductoApi && errorApi) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <p>No se pudo consultar el detalle del producto.</p>
        <Link to="/" className="text-blue-600">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  // Proyecto Final: Mostrar un mensaje cuando el producto no existe
  if (!producto) {
    return (
      <main className="mx-auto max-w-5xl p-6">
        <h1 className="text-2xl font-bold">Producto no encontrado</h1>
        <Link to="/" className="mt-4 inline-block text-blue-600">
          Volver al catálogo
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      <h1 className="mb-4 text-2xl font-bold">
        {producto.nombre}
      </h1>

      <img
        src={producto.imagen}
        alt={producto.nombre}
        className="mb-4 h-64 w-full object-contain"
      />

      <p>Marca: {producto.marca}</p>
      <p>Precio: {formatearPrecio(producto.precio)}</p>
      <p>
        {producto.stock === 0
          ? "Agotado"
          : `${producto.stock} disponibles`}
      </p>

      {/* Proyecto Final: regresar al catálogo principal. */}
      <Link to="/" className="mt-4 inline-block text-blue-600">
        Volver al catálogo
      </Link>
    </main>
  );
}