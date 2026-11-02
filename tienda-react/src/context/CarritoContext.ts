
import { createContext } from "react";
import type { Producto } from "../tipos";

// Proyecto Final: Definir la información compartida del carrito
interface CarritoContexto {
  carrito: Producto[];
  agregarAlCarrito: (producto: Producto) => void;
  subtotal: number;
}

// Proyecto Final: Crear el contexto para compartir el carrito
export const CarritoContext = createContext<CarritoContexto | null>(null);
