import React, { useState } from "react";
import imagenHamburguesa from "../../assets/imagenes/hamburguesa.jpg";
import imagenpizza from "../../assets/imagenes/pizza.jpg";
import imagenhotdog from "../../assets/imagenes/hotdog.jpg";
import CheckoutForm from "../pagoStripe/CheckoutForm";

const Home = () => {
  const informacion = [
    {
      id: 1,
      imagen: imagenHamburguesa,
      titulo: "Hamburguesa",
      precio: "5",
      button: "Comprar",
    },
    {
      id: 2,
      imagen: imagenhotdog,
      titulo: "Hotdog",
      precio: "3",
      button: "Comprar",
    },
    {
      id: 3,
      imagen: imagenpizza,
      titulo: "Pizza",
      precio: "10",
      button: "Comprar",
    },
  ];

  const [checkout, setCheckout]= useState(false);

  const funcionCheckout = ()=> {
    setCheckout(true);
  }
  return (

    <>
    <div>
      <h1>Tienda de alimentos</h1>
      <div className="contenedor-productos">
        {informacion.map((producto) => (
          <div key={producto.id}>
            <img src={producto.imagen} alt={producto.titulo} />
            <h3>{producto.titulo}</h3>
            <p>Precio: {producto.precio}</p>
            <button onClick={()=> funcionCheckout()}>{producto.button}</button>
            
          </div>
        ))}
      </div>
        <CheckoutForm/>
    </div>
    
    {/* {checkout && <CheckoutForm/>} */}
    </>
    
  );
};

export default Home;
