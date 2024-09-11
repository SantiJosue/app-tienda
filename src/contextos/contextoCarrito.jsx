import { createContext, useContext, useState } from "react";
import iphoneImg from './../imagenes/iphone-img.webp';
import smartwatchImg from './../imagenes/smartwatch.jpg';
import ps5 from './../imagenes/ps5.webp';
import s24Ultra from './../imagenes/s24ultra.webp';

const ContextoCarrito = createContext();

const useContextoCarrito = () => {
  return useContext(ContextoCarrito);
};

const ProveedorCarrito = ({ children }) => {
  const [carrito, cambiarCarrito] = useState([]);

  const productos = [{
    id: 1,
    nombre: "Producto 1",
    cantidad: 1,
    image: iphoneImg,
    camara: "Camara: 48px",
    capacidad: "Capacidad: 128GB, 256GB, 512GB",
    pantalla: "Pantalla Super Retina XDR",
    procesador: "Procesador: Chip A16 Bionic"
  },
  {
    id: 2,
    nombre: "Producto 2",
    cantidad: 1,
    image: smartwatchImg,
    procesador: "Procesador: Chip S8 SiP con procesador de doble núcleo de 64 bits",
    energía: "Batería: Batería de iones de litio recargable integrada",
    pantalla: "Pantalla: Retina OLED LTPO siempre activa"
  },
  {
    id: 3,
    nombre: "Producto 3",
    cantidad: 1,
    image: ps5,
    capacidad: "Capacidad: 512GB, 1TB, 2TB",
  },
  {
    id: 4,
    nombre: "Producto 4",
    cantidad: 1,
    image: s24Ultra,
    camara: "Camara: 200px",
    capacidad: "Capacidad: 128GB, 256GB, 512GB, 1TB",
    pantalla: "Pantalla Super AMOLED 2x",
    procesador: "Procesador: Snapdragon gen 2"
  }];

  const agregarProducto = (id, nombre) => {
    const productosExistentes = carrito.find((producto) => producto.id === id);
    if (productosExistentes) {
      cambiarCarrito(carrito.map((producto) => {
        return producto.id === id ? { ...producto, cantidad: (producto.cantidad || 1) + 1 } : producto;
      }));
    } else {
      cambiarCarrito([...carrito, { id: id, nombre: nombre, cantidad: 1 }]);
    }
  };

  const eliminarProducto = (id) => {
    const nuevoCarrito = carrito.filter((producto) => producto.id !== id);
    cambiarCarrito(nuevoCarrito);
  };

  const agregarMas = (id) => {
    const nuevoCarrito = carrito.map((producto) => {
      if(producto.id === id){
        return {...producto, cantidad: producto.cantidad +1};
      } else {
        return producto;
      }
    });
    cambiarCarrito(nuevoCarrito);
  };

  const reducirCantidad = (id) => {
    const nuevoProducto = carrito.map((producto) => {
      return producto.id === id && producto.cantidad !==1 ? {...producto, cantidad: producto.cantidad -1} : producto
    });
    cambiarCarrito(nuevoProducto);
  };

  return (
    <ContextoCarrito.Provider value={{ carrito, productos, cambiarCarrito, agregarProducto, eliminarProducto, agregarMas, reducirCantidad }}>
      {children}
    </ContextoCarrito.Provider>
  );
};

export { ProveedorCarrito, useContextoCarrito };
