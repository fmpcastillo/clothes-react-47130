import React, { useContext } from "react"
import { Link } from "react-router-dom"
import { Cart } from "./context/Cart";


const CartWidget = () => {
    const { cantidadEnCarrito } = useContext(Cart);

    return (
        <div>
            <Link className="menu-link" to="/carrito">
            Carrito
            <span className="numerito">{cantidadEnCarrito()}</span>
            </Link>
        </div>
    )
}
export default CartWidget