import { useState } from "react";

const ItemQuantitySelector = ({ cantidad, handleRestar, handleSumar, handleAgregar }) => {

    return (
        <div>
            <div className="item-count">
                <button onClick={handleRestar}>-</button>
                <p>{cantidad}</p>
                <button onClick={handleSumar}>+</button>
            </div>
            <button className="agregar-al-carrito" onClick={handleAgregar}>Agregar</button>
        </div>
    )

}
export default ItemQuantitySelector