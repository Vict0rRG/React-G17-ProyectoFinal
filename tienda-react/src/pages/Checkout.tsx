import { Link } from "react-router-dom";
import { useState } from "react";
import type { FormEvent } from "react";

// Proyecto Final: consultar el carrito compartido.
import useCarrito from "../hooks/useCarrito";
import formatearPrecio from "../formato";

export default function Checkout() {
  // Proyecto Final: guardar los datos ingresados por el cliente
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [direccion, setDireccion] = useState("");

  // Proyecto Final: guardar los mensajes de error
  const [errorNombre, setErrorNombre] = useState("");
  const [errorCorreo, setErrorCorreo] = useState("");
  const [errorDireccion, setErrorDireccion] = useState("");

  // Proyecto Final: mostrar el resultado de la confirmación del pedido
  const [mensajePedido, setMensajePedido] = useState("");
  const [pedidoValido, setPedidoValido] = useState(false);

  // Proyecto Final: obtener los productos y subtotal del carrito
  const { carrito, subtotal } = useCarrito();

  // Proyecto Final: validar los datos antes de confirmar el pedido
  function validarFormulario(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setMensajePedido("");
    setPedidoValido(false);

    // Proyecto Final: comprobar los tres campos
    const nombreValido = nombre.trim().length >= 3;
    const correoValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(correo.trim());
    const direccionValida = direccion.trim().length >= 5;

    setErrorNombre(
      nombreValido ? "" : "Ingresa un nombre de al menos 3 caracteres."
    );

    setErrorCorreo(
      correoValido ? "" : "Ingresa un correo electrónico válido."
    );

    setErrorDireccion(
      direccionValida ? "" : "Ingresa una dirección de al menos 5 caracteres."
    );

    // Proyecto Final: impedir confirmar cuando existen datos incorrectos
    if (!nombreValido || !correoValido || !direccionValida) {
      return;
    }

    // Proyecto Final: impedir confirmar con el carrito vacío
    if (carrito.length === 0) {
      setMensajePedido("No puedes confirmar un pedido con el carrito vacío.");
      return;
    }

    // Proyecto Final: mostrar la confirmación simulada
    setPedidoValido(true);
    setMensajePedido("Pedido validado correctamente. Esta es una simulación.");
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      {/* Proyecto Final: página para finalizar la compra */}
      <h1 className="mb-4 text-2xl font-bold">
        Finalizar compra
      </h1>

      <p className="mb-4">
        Completa tus datos para realizar tu pedido.
      </p>

      {/* Proyecto Final: mostrar el resumen del carrito */}
      <div className="mb-6 rounded-lg border p-4">
        <h2 className="mb-2 text-lg font-semibold">
          Resumen del pedido
        </h2>

        <p>Productos agregados: {carrito.length}</p>
        <p>Subtotal sin IGV: {formatearPrecio(subtotal)}</p>
      </div>

      {/* Proyecto Final: validar los datos mediante onSubmit */}
      <form onSubmit={validarFormulario} noValidate>

        {/* Proyecto Final: campo controlado para el nombre */}
        <div className="mb-4">
          <label htmlFor="nombre" className="mb-2 block font-medium">
            Nombre completo
          </label>

          <input
            id="nombre"
            type="text"
            value={nombre}
            onChange={(e) => {
              setNombre(e.target.value);
              setMensajePedido("");
              setPedidoValido(false);
            }}
            placeholder="Ingresa tu nombre completo"
            className="w-full rounded-lg border p-2"
          />

          {/* Proyecto Final: mostrar el error del nombre */}
          {errorNombre && (
            <p className="mt-1 text-sm text-red-600">
              {errorNombre}
            </p>
          )}
        </div>

        {/* Proyecto Final: campo controlado para el correo */}
        <div className="mb-4">
          <label htmlFor="correo" className="mb-2 block font-medium">
            Correo electrónico
          </label>

          <input
            id="correo"
            type="email"
            value={correo}
            onChange={(e) => {
              setCorreo(e.target.value);
              setMensajePedido("");
              setPedidoValido(false);
            }}
            placeholder="ejemplo@correo.com"
            className="w-full rounded-lg border p-2"
          />

          {/* Proyecto Final: mostrar el error del correo */}
          {errorCorreo && (
            <p className="mt-1 text-sm text-red-600">
              {errorCorreo}
            </p>
          )}
        </div>

        {/* Proyecto Final: campo controlado para la dirección */}
        <div className="mb-4">
          <label htmlFor="direccion" className="mb-2 block font-medium">
            Dirección de entrega
          </label>

          <input
            id="direccion"
            type="text"
            value={direccion}
            onChange={(e) => {
              setDireccion(e.target.value);
              setMensajePedido("");
              setPedidoValido(false);
            }}
            placeholder="Ingresa tu dirección de entrega"
            className="w-full rounded-lg border p-2"
          />

          {/* Proyecto Final: mostrar el error de la dirección */}
          {errorDireccion && (
            <p className="mt-1 text-sm text-red-600">
              {errorDireccion}
            </p>
          )}
        </div>

        {/* Proyecto Final: confirmar el pedido si los datos son válidos */}
        <button
          type="submit"
          className="mb-6 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          Confirmar pedido
        </button>
      </form>

      {/* Proyecto Final: informar el resultado de la confirmación */}
      {mensajePedido && (
        <p
          role="status"
          className={`mb-4 text-sm ${
            pedidoValido ? "text-green-600" : "text-red-600"
          }`}
        >
          {mensajePedido}
        </p>
      )}

      <Link to="/" className="text-blue-600 hover:underline">
        Volver al catálogo
      </Link>
    </main>
  );
}