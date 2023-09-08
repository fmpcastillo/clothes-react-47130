import React, { useState } from "react";

const Contacto = () => {

    const [valores, setValores] = useState({
        nombre:"",
        email:"",
        telefono:""
    });
     

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("enviado", valores)
    }

    const handleValores = (e) => {
        setValores({
            ...valores,
            [e.target.name]: e.target.value
        })
    }
    


    return (
        <div className="container">
            <h1 className="main-tittle">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit}>

                <input type="text" 
                placeholder="Nombre y Apellido"
                value={valores.nombre}
                onChange={handleValores}
                name="nombre" 
                />

                <input type="email" 
                placeholder="E-mail"
                value={valores.email}
                onChange={handleValores}
                name="email" 
                />
                
                <input type="phone" 
                placeholder="Telefono"
                value={valores.telefono}
                onChange={handleValores}
                name="telefono"
                />

                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto