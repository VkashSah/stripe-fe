import "./App.css";
import StripeCheckout from "react-stripe-checkout";

function App() {
  const makePayment = (token) => {
    const body = {
      token,
    };
    const headers = {
      "Content-Type": "application/json",
    };
    return fetch(`http://localhost:3000/dev/payment`, {
      method: "POST",
      headers,
      body: JSON.stringify(body),
    })
      .then((response) => {
        console.log(response, "Response");
        const { status } = response;
        console.log(status, "Status");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="App">
      <StripeCheckout
        stripeKey=""
        token={makePayment}
        name="Freight Genie"
        planId="123"
      >
        <button className="btn-large blue">Subscribe Now!!!</button>
      </StripeCheckout>
    </div>
  );
}

export default App;
