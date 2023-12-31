import React, { useContext } from "react";
import { Cart } from "./context/Cart";
import { Link } from "react-router-dom";

const Carrito = () => {

    const { carrito, precioTotal, vaciarCarrito } = useContext(Cart);

    const handleVaciar = () => {
        vaciarCarrito();
    }

    return (
        <div className="container">
            <h1 className="main-tittle">Carrito</h1>

            {
                carrito.map((prod) => (
                    <div key={prod.id}>
                        <br />
                        <h3>{prod.titulo}</h3>
                        <p>Precio unidad: ${prod.precio}</p>
                        <p>Precio total: ${prod.precio * prod.cantidad}</p>
                        <p>Cant: {prod.cantidad}</p>
                        <br />
                    </div>
                ))
            }

            {
                carrito.length > 0 ?
                    <>
                        <p>Total: ${precioTotal()}</p>
                        <button onClick={handleVaciar}>Vaciar</button>
                        <Link className="finalizar" to="/checkout" >Finaliza Compra </Link>
                    </> :
                    <p>El carrito esta vacio</p>
            }

        </div>
    )
}
export default Carrito          