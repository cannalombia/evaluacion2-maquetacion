/*
 * datos.js - Los datos de tu tema
 * Los datos viven aquí, separados de la interfaz. app.js los recorre
 * y construye las tarjetas: nunca se escriben tarjetas a mano en el HTML.
 *
 * TODO (issue #1):
 *
 * 1. Completa configuracion:
 *      titulo         nombre de tu proyecto
 *      campoOrden     nombre de la propiedad NUMÉRICA que se usa para ordenar
 *                     (precio, duracionMinutos, paginas...). Se elige en la guía.
 *      etiquetaValor  cómo se muestra ese número en la tarjeta ("Precio", "Duración")
 *
 * 2. Llena items con los 12 elementos de la página de Contenido de tu
 *    empresa en el Manual de marca (nombres, categorías y valores exactos).
 *    TODOS con las mismas propiedades:
 *      id           número, único
 *      nombre       texto
 *      categoria    texto (mínimo 3 categorías, cada una con 2 o más elementos)
 *      descripcion  texto corto
 *      imagen       ruta en img/ (que exista) o URL que empiece por https://
 *      la propiedad de campoOrden (número)
 *      y los 2 campos propios que indica tu tema en la guía
 *
 * La información es ficticia: la entrega la empresa en el manual.
 * Puedes usar img/placeholder.svg mientras consigues imágenes.
 */

const configuracion = {
  titulo: 'La Cosecha del Eje',
  campoOrden: 'precio',
  etiquetaValor: 'Precio'
};

const items = [
  {
    id: 1,
    nombre: 'Mora de Castilla',
    categoria: 'frutas',
    descripcion: 'Mora fresca de las veredas altas, ideal para jugos.',
    imagen: 'img/placeholder.svg',
    precio: 6500,
    unidad: 'libra',
    municipio: 'Santa Rosa de Cabal'
  },

  {
    id: 2,
    nombre: 'Lulo',
    categoria: 'frutas',
    descripcion: 'Lulo ácido y aromático cultivado entre cafetales.',
    imagen: 'img/placeholder.svg',
    precio: 5200,
    unidad: 'libra',
    municipio: 'Marsella'
  },

  {
    id: 3,
    nombre: 'Banano bocadillo',
    categoria: 'frutas',
    descripcion: 'Banano pequeño y dulce, cosechado bajo sombrío.',
    imagen: 'img/placeholder.svg',
    precio: 3000,
    unidad: 'racimo pequeño',
    municipio: 'Belén de Umbría'
  },

  {
    id: 4,
    nombre: 'Arracacha',
    categoria: 'verduras',
    descripcion: 'Raíz suave para sopas y purés.',
    imagen: 'img/placeholder.svg',
    precio: 2800,
    unidad: 'libra',
    municipio: 'Santuario'
  },

  {
    id: 5,
    nombre: 'Tomate chonto',
    categoria: 'verduras',
    descripcion: 'Tomate firme de cultivo campesino, sin encerar.',
    imagen: 'img/placeholder.svg',
    precio: 3500,
    unidad: 'libra',
    municipio: 'Guática'
  },

  {
    id: 6,
    nombre: 'Cebolla larga',
    categoria: 'verduras',
    descripcion: 'Atado de cebolla larga para el hogao.',
    imagen: 'img/placeholder.svg',
    precio: 2500,
    unidad: 'atado',
    municipio: 'Santa Rosa de Cabal'
  },

  {
    id: 7,
    nombre: 'Queso campesino',
    categoria: 'lacteos',
    descripcion: 'Queso fresco de leche entera, prensado a mano.',
    imagen: 'img/placeholder.svg',
    precio: 14000,
    unidad: 'libra',
    municipio: 'Apía'
  },

  {
    id: 8,
    nombre: 'Kumis artesanal',
    categoria: 'lacteos',
    descripcion: 'Kumis espeso fermentado en casa, sin conservantes.',
    imagen: 'img/placeholder.svg',
    precio: 7500,
    unidad: 'litro',
    municipio: 'Dosquebradas'
  },

  {
    id: 9,
    nombre: 'Cuajada',
    categoria: 'lacteos',
    descripcion: 'Cuajada blanda para acompañar con melao.',
    imagen: 'img/placeholder.svg',
    precio: 9000,
    unidad: 'libra',
    municipio: 'Quinchía'
  },

  {
    id: 10,
    nombre: 'Fríjol cargamanto',
    categoria: 'granos',
    descripcion: 'Fríjol rojo de grano grande para la bandeja paisa.',
    imagen: 'img/placeholder.svg',
    precio: 8200,
    unidad: 'libra',
    municipio: 'Mistrató'
  },

  {
    id: 11,
    nombre: 'Maíz pelado',
    categoria: 'granos',
    descripcion: 'Maíz blanco listo para arepas y mazamorra.',
    imagen: 'img/placeholder.svg',
    precio: 3200,
    unidad: 'libra',
    municipio: 'La Celia'
  },
  
  {
    id: 12,
    nombre: 'Café de origen',
    categoria: 'granos',
    descripcion: 'Café tostado medio de pequeños caficultores.',
    imagen: 'img/placeholder.svg',
    precio: 18000,
    unidad: 'libra',
    municipio: 'Balboa'
  }
];