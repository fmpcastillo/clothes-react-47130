import { Router } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";
import Contacto from "./components/Contacto";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import { CarritoProvider, Cart } from "./components/context/Cart";
import Carrito from "./components/Carrito";

function App() {




  return (
    <div >
      <CarritoProvider >
      <BrowserRouter >

      <NavBar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/item/:id" element= {<ItemDetailContainer />}/>
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/productos/:categoria" element={<ItemListContainer />} />
        <Route path="/contacto" element= {<Contacto />}/>
        <Route path="/carrito" element= {<Carrito />}/>
      </Routes>

    
      </BrowserRouter>
      </CarritoProvider>
    </div>
  );
}

export default App;
