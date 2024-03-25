import Home from "./components/jsx-pages/Home";
import CheckoutForm from "./components/pagoStripe/CheckoutForm";
import "./App.scss";
import { Elements } from "@stripe/react-stripe-js"; /* Engloba otro componentes para que todos tengan acceso a stripe */
import { loadStripe } from "@stripe/stripe-js";

const stripePromise = loadStripe(
  "pk_test_51OyIhmH3VniUrv9XBTvJ1fqtY7vjQ0JXEejzMvXFhSOEadnfuxwZ5eLoDy1PKdIoxTREQLVlk4iXH2OYeBh2gPNe00umCAPavL"
); /* Clave pubicable */

function App() {
  
  return (
    <Elements stripe={stripePromise}>{/* Se accede a la informacion */}
      {/* <CheckoutForm /> */}
      <Home/>
    </Elements>
  );
}

export default App;
