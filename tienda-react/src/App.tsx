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
  // Proyecto Final: agregar un producto creando un nuevo arreglo
  function agregarAlCarrito(producto: Producto) {
  setCarrito((anterior) => [...anterior, producto]);
  }
  // Proyecto Final: calcular el subtotal sumando los precios del carrito
  const subtotal = carrito.reduce((total, producto) => total + producto.precio,0
  );

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
      {/* PROPS */}
      {/* Proyecto Final: distribución responsive con CSS Grid - Agregue un atributo className a la etiqueta <section> */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {
          productos.map((p) => (<ProductCard producto={p} key={p.id} onAgregar={() => agregarAlCarrito(p)}/>))
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
