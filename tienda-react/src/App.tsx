import Footer from "./components/Footer"
import Header from "./components/Header"
import ProductCard from "./components/ProductCard"
import { productos } from "./datos"
import Beneficio from "./components/Beneficio"



export default function App() {
  return (
    <main className="mx-auto max-w-5xl p-6">
      <Header nombre="TecCart" eslogan="Una Vida Tecnologica"/>
      <Header nombre="FalabellaProductos"/>
      {/* PROPS */}
      {/* Proyecto Final: distribución responsive con CSS Grid - Agregue un atributo className a la etiqueta <section> */}
      <section className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {
          productos.map((p) => <ProductCard producto={p} key={p.id}/>)
        }
      </section>
      {/* Proyecto Final: sección de beneficios reutilizando componentes y props*/}
      <section className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Beneficio titulo="Envíos" detalle="Entregamos tus productos a domicilio"/>
        <Beneficio titulo="Cuotas" detalle="Opciones de pago para tus compras"/>
        <Beneficio titulo="Garantía" />
        </section>
      <Footer/>
    </main>
  )
}
