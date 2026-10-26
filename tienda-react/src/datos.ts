import type { Producto } from "./tipos";

export const productos: Producto[] = [
  { id: 1,nombre: 'Audífonos inalámbricos2', marca: 'TechSound', precio: 249.9,imagen: 'https://cdn.dummyjson.com/products/images/mobile-accessories/Apple%20Airpods/1.png', stock: 12,
    // Proyecto Final: asignar el producto a la categoría Audio
    categoria: "Audio"},
  { id: 2,nombre: 'Laptop ultradelgada 14"', marca: 'Nova', precio: 3499, imagen: 'https://cdn.dummyjson.com/products/images/laptops/Asus%20Zenbook%20Pro%20Dual%20Screen%20Laptop/1.png', stock: 0,
    // Proyecto Final: asignar el producto a la categoría Laptops
    categoria: "Laptops"},
  { id: 3,nombre: 'Reloj inteligente', marca: 'Clik', precio: 499.9, imagen: 'https://cdn.dummyjson.com/products/images/mens-watches/Brown%20Leather%20Belt%20Watch/1.png', stock: 20,
    // Proyecto Final: asignar el producto a la categoría Relojes
  categoria: "Relojes"},
  // Proyecto Final: nuevo parlante de la categoría Audio
  { id: 4, nombre: "JBL BOOMBOX 4 HERO", marca: "JBL", precio: 1699.9, imagen: "/productos/LS_JBL_BOOMBOX_4_HERO_CAMO_0019_x3.png", stock: 15, categoria: "Audio"},
  // Proyecto Final: nuevos audífonos gamer de la categoría Audio
  { id: 5, nombre: "JBL Quantum", marca: "JBL", precio: 249.9, imagen: "/productos/01.LS_JBL_Quantum_250_Product-Image_Hero_White.png", stock: 8, categoria: "Audio"},
  // Proyecto Final: nueva laptop categoría Laptops
  { id: 6, nombre: "ThinkPad E16 Gen 4 16", marca: "LENOVO", precio: 6922.9, imagen: "/productos/gallery-1-front-facing.avif", stock: 10, categoria: "Laptops"},
  // Proyecto Final: nueva laptop gamer categoría Laptops
  { id: 7, nombre: "Legion 5i Gen 11 15", marca: "LENOVO", precio: 8669.9, imagen: "/productos/lenovo-legion-5i-gen-11-15-intel-pdp-gallery-1.4110b84470e37084.avif", stock: 6, categoria: "Laptops"},
  // Proyecto Final: nuevo smartwatch categoría Relojes.
  { id: 8, nombre: "Garmin Instinct 2 ", marca: "Garmin", precio: 1599.9, imagen: "/productos/Garmin_Instinct_2.png", stock: 18, categoria: "Relojes" },
  // Proyecto Final: nuevo reloj categoría Relojes.
  { id: 9, nombre: "Tissot Le Locle Automatico", marca: "TISSSOT", precio: 3250.9, imagen: "/productos/TISSSOT_LE_LOCLE_AUTOMATICO.webp", stock: 7, categoria: "Relojes"}
];
