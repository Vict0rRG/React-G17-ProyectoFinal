export interface Producto {

  // Proyecto Final: identificador único de cada producto
  id: number;

  nombre: string;
  marca: string;
  precio: number;
  imagen: string;
  stock: number;

  // Proyecto Final: categoría para clasificar los productos
  categoria: "Audio" | "Laptops" | "Relojes";
}
