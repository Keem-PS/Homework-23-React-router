import React from 'react';
import { Item } from '../components/data';  // items array

interface CheckoutPageProps {
  cart: Item | null;
}

function CheckoutPage({ cart }: CheckoutPageProps) {
  if (!cart) {
    return <div>No items in cart.</div>;
  }

  return (
    <div>
      <h1>Checkout Page</h1>
      <div>
        <img src={cart.img} alt={cart.productName} width="100" />
        <h3>{cart.productName}</h3>
        <p>Price: ${cart.price}</p>
        <p>{cart.detail}</p>
      </div>
      <button>Proceed to Payment</button>
    </div>
  );
}

export default CheckoutPage;
