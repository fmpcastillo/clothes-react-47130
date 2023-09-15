import { useForm } from "react-hook-form";

const Contacto = () => {

    const { register, handleSubmit } = useForm();

    const enviar = (data) => {
    }

    return (
        <div className="container">
            <h1 className="main-tittle">Contacto</h1>
            <form className="formulario" onSubmit={handleSubmit(enviar)}>

                <input type="text" placeholder="Nombre y Apellido" {...register("nombre")} />

                <input type="email" placeholder="E-mail" {...register("email")} />

                <input type="phone" placeholder="Telefono" {...register("telefono")} />

                <button className="enviar" type="submit">Enviar</button>
            </form>
        </div>
    )
}
export default Contacto