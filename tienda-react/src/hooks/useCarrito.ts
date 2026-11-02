
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

// Proyecto Final: Acceder a la información compartida del carrito
export default function useCarrito() {
  const contexto = useContext(CarritoContext);

  // Proyecto Final: Comprobar que exista el Provider
  if (!contexto) {
    throw new Error("useCarrito debe utilizarse dentro de CarritoProvider");
  }

  return contexto;
}
