
import { useEffect, useState } from "react";
import type { ReactNode } from "react";
import type { Producto } from "../tipos";
import { CarritoContext } from "./CarritoContext";

interface Props {
  children: ReactNode;
}

export default function CarritoProvider({ children }: Props) {

  // Proyecto Final: Recuperar el carrito guardado en el navegador
  const [carrito, setCarrito] = useState<Producto[]>(() => {
    try {
      const guardado = localStorage.getItem("techcart-carrito");
      if (!guardado) return [];

      const datos: unknown = JSON.parse(guardado);
      return Array.isArray(datos) ? datos : [];
    } catch {
      return [];
    }
  });

  // Proyecto Final: Guardar el carrito cuando cambien sus productos
  useEffect(() => {
    localStorage.setItem("techcart-carrito", JSON.stringify(carrito));
  }, [carrito]);

  // Proyecto Final: Agregar productos sin modificar el arreglo anterior
  function agregarAlCarrito(producto: Producto) {
    setCarrito((anterior) => [...anterior, producto]);
  }

  // Proyecto Final: Calcular el subtotal del carrito
  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );

  // Proyecto Final: Compartir los datos con los componentes hijos
  return (
    <CarritoContext.Provider value={{ carrito, agregarAlCarrito, subtotal }}>
      {children}
    </CarritoContext.Provider>
  );
}
