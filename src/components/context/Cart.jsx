import { createContext, useState } from "react";




export const Cart = createContext();


export const CarritoProvider = ({children}) => {

const [carrito, setCarrito] = useState([]);

const agregarAlCarrito = (item, cantidad) => {
  const itemAgregado = {...item, cantidad};

  const nuevoCarrito = [...carrito];
  const estaEnElCarrito = nuevoCarrito.find((producto) => producto.id === itemAgregado.id);
  

  if (estaEnElCarrito) { 
      estaEnElCarrito.cantidad += cantidad;
  } else {
      nuevoCarrito.push(itemAgregado);   
  }
  setCarrito (nuevoCarrito);
  }

  const cantidadEnCarrito = () => {
    return carrito.reduce((acc, prod) => acc + prod.cantidad, 0);

  }

  const precioTotal = () => {
    return carrito.reduce((acc, prod) => acc + prod.precio * prod.cantidad, 0);
  }

  const vaciarCarrito = () => {
    setCarrito([]);
  }
  return (
    <Cart.Provider value={ {
        carrito, 
        agregarAlCarrito, 
        cantidadEnCarrito, 
        precioTotal, 
        vaciarCarrito} 
        }>
        {children}

    </Cart.Provider>

  ) 
  
}