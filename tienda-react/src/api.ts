import type { Producto } from "./tipos";

// Proyecto Final: estructura de los productos que devuelve DummyJSON
export interface ProductoAPI {
  id: number;
  title: string;
  price: number;
  thumbnail: string;
  stock: number;
  category: string;
  brand?: string;
}

// Proyecto Final: consultar los productos desde la API
export async function obtenerProductos(categoriaApi: string, signal?: AbortSignal): Promise<ProductoAPI[]> {
  const respuesta = await fetch(`https://dummyjson.com/products/category/${categoriaApi}`, { signal });

  // Proyecto Final: detectar si el servidor responde con un error HTTP
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}`);
  }

  const datos = (await respuesta.json()) as { products: ProductoAPI[] };
  return datos.products;
}

// Proyecto Final: identificar la categoría de los productos de la API
export function obtenerCategoria(p: ProductoAPI): Producto["categoria"] | null {
  if (p.category === "laptops") return "Laptops";

  if (p.category === "mens-watches" || p.category === "womens-watches")
    return "Relojes";

  if (p.category === "mobile-accessories" && p.title.toLowerCase().includes("airpods"))
    return "Audio";

  return null;
}

// Proyecto Final: Tipo de cambio referencial
const TIPO_CAMBIO = 3.70;

// Proyecto Final: Conversion de datos
export function mapearProducto(
  p: ProductoAPI,
  categoria: Producto["categoria"]
): Producto {
  return {
    id: p.id,
    nombre: p.title,
    marca: p.brand ?? "Sin marca",
    precio: p.price * TIPO_CAMBIO,
    imagen: p.thumbnail,
    stock: p.stock,
    categoria: categoria
  };
}

// Proyecto Final: reunir los productos de las categorías de TechCart.
export async function obtenerCatalogo(signal?: AbortSignal): Promise<Producto[]> {
  const categorias = ["laptops", "mens-watches", "womens-watches", "mobile-accessories"];

  const respuestas = await Promise.all(
    categorias.map((categoria) => obtenerProductos(categoria, signal))
  );

  const todos = respuestas.flat();

  return todos.flatMap((p) => {
    const categoria = obtenerCategoria(p);
    return categoria ? [mapearProducto(p, categoria)] : [];
  });
}