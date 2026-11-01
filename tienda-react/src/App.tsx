import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import { productos } from "./datos"
import Beneficio from "./components/Beneficio"
import { useState } from "react";
import type { Producto } from "./tipos";


export default function App() {
  // Proyecto Final: guardar los productos agregados al carrito
  const [carrito, setCarrito] = useState<Producto[]>([]);
  // Proyecto Final: guardar la categoría seleccionada por el usuario.
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState("Todos");
  // Proyecto Final: agregar un producto creando un nuevo arreglo
  function agregarAlCarrito(producto: Producto) {
  setCarrito((anterior) => [...anterior, producto]);
  }
  // Proyecto Final: calcular el subtotal sumando los precios del carrito
  const subtotal = carrito.reduce((total, producto) => total + producto.precio,0);
  // Proyecto Final: filtrar los productos según la categoría seleccionada.
  const productosFiltrados = categoriaSeleccionada === "Todos"
    ? productos
    : productos.filter((p) => p.categoria === categoriaSeleccionada);
  return (
    <main className="mx-auto max-w-5xl p-6">
      {/* Proyecto Final: Una sola cabecera para la tienda*/}
      {/* Proyecto Final: enviar al encabezado la cantidad de productos del carrito */}
      {/* Proyecto Final: enviar al encabezado la cantidad y el subtotal */}
      <Header nombre="TecCart" eslogan="Una Vida Tecnologica" cantidadCarrito={carrito.length} subtotal={subtotal}/>
      {/* Proyecto Final: título para identificar la sección del catálogo */}
      <h2 className="mb-4 mt-6 text-xl font-semibold">
        Productos destacados
      </h2>
    {/* Proyecto Final: botones para filtrar y resaltar la categoría seleccionada */}
    <div className="mb-6 flex flex-wrap gap-2">
    <button type="button" onClick={() => setCategoriaSeleccionada("Todos")}
    className={`rounded-lg px-4 py-2 ${categoriaSeleccionada === "Todos" ? "bg-blue-600 text-white" : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"}`}>
    Todos
    </button>
    <button type="button" onClick={() => setCategoriaSeleccionada("Audio")}
    className={`rounded-lg px-4 py-2 ${categoriaSeleccionada === "Audio" ? "bg-blue-600 text-white" : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"}`}>
      Audio
    </button>
    <button type="button" onClick={() => setCategoriaSeleccionada("Laptops")}
    className={`rounded-lg px-4 py-2 ${categoriaSeleccionada === "Laptops" ? "bg-blue-600 text-white" : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"}`}>
    Laptops
    </button>
    <button type="button" onClick={() => setCategoriaSeleccionada("Relojes")}
    className={`rounded-lg px-4 py-2 ${categoriaSeleccionada === "Relojes" ? "bg-blue-600 text-white" : "border border-blue-600 bg-white text-blue-600 hover:bg-blue-50"}`}>
    Relojes
    </button>
    </div>
    {/* PROPS */}
    {/* Proyecto Final: distribución responsive con CSS Grid - Agregue un atributo className a la etiqueta <section> */}
    <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {
      // Proyecto Final: mostrar únicamente los productos de la categoría seleccionada
        productosFiltrados.map((p) => (<ProductCard producto={p} key={p.id} onAgregar={() => agregarAlCarrito(p)}/>))
      }
      </section>
      {/* Proyecto Final: título para identificar la sección de beneficios */}
      <h2 className="mt-8 mb-4 text-xl font-semibold">
        Beneficios de comprar en TecCart
      </h2>
      {/* Proyecto Final: sección de beneficios reutilizando componentes y props*/}
      <section className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Beneficio titulo="Envíos" detalle="Entregamos tus productos a domicilio"/>
        <Beneficio titulo="Cuotas" detalle="Opciones de pago para tus compras"/>
        <Beneficio titulo="Garantía" />
      </section>
      <Footer/>
    </main>
  )
}
