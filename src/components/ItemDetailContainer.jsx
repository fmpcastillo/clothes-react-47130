import { useEffect, useState } from "react"
import { pedirItemPorId } from "../llamarDatos/pedirDatos";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase/firebase";

 const ItemDetailContainer = (  ) => {

    const [item, setItem] =  useState(null);
    const id = useParams().id;

    useEffect(() => {
        const docref = doc(db, "productos", id);
        getDoc(docref)
        .then((resp) => {
            setItem(
                { ...resp.data(), id: resp.id}
            );
        })
    },[id])

    return (
        <div>
            {item && <ItemDetail item={item} />}
        </div>
    )
 }
 export default ItemDetailContainer