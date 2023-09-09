
import { useEffect, useState } from "react";

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/firebase"

const ItemListContainer = () => {

    const [productos, setProductos] = useState ([]);

    const [titulo, setTitulo] = useState("Productos");

    const categoria = useParams().categoria;

        useEffect(() => {

            const productosRef = collection(db, "productos");

            const q = categoria ? query(productosRef, where("categoria", "==", categoria)) : productosRef;

            getDocs(productosRef)

                .then((resp) => {

                    setProductos(
                        resp.docs.map((doc) => {
                            return { ...doc.data(), id: doc.id}
                        })
                    )
                })

    },[categoria])

    return (
    <div>
        <ItemList productos={productos} titulo={titulo} />
    </div>
    )
}
 
export default ItemListContainer