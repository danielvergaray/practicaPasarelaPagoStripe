import React from "react";
import { CardElement, useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js";

const CheckoutForm = () => {

  const stripe = useStripe(); /* crea la conexion a stripe con el hook useStripe*/
  const elements = useElements(); /* forma de accedder a los elementos de sripe */

  const handleSubmit = async (e) => {
    e.preventDefault(); /* evita que se recarge la pagina */

   const {error, paymentMethod} = await stripe.createPaymentMethod ({ /* se crea un registro de metodo de pago */
      type: 'card',  /* tipo de pago */
      card: elements.getElement (CardElement), /* captura los elementos que esten en el input (cardElement)) */
    })

    if(!error){
      console.log(paymentMethod)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement /> {/* Input prediseñado por stripe para verificaciones de la tarjeta */}
      {/* <button>Comprar</button> */}
    </form>
  );
};

export default CheckoutForm;
