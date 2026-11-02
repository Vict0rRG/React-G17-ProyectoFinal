import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'
// Proyecto Final: Componente común para las rutas
import Layout from "./components/Layout";

// Proyecto Final: pagina para rutas inexistentes
import NoEncontrado from './pages/NoEncontrado'

// Proyecto Final: Pagina de detalle de los productos
import DetalleProducto from './pages/DetalleProducto'

// Proyecto Final: habilitar la navegacion entre paginas
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// Proyecto Final: Compartir el carrito entre las páginas
import CarritoProvider from "./context/CarritoProvider";
// Proyecto Final: página para finalizar la compra.
import Checkout from "./pages/Checkout";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* Proyecto Final: compartir el carrito entre las rutas */}
    <CarritoProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<App />} />
            <Route path="producto/:id" element={<DetalleProducto />} />
            {/* Proyecto Final: página para finalizar la compra */}
            <Route path="checkout" element={<Checkout />} />
            <Route path="*" element={<NoEncontrado />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CarritoProvider>
  </StrictMode>,
)