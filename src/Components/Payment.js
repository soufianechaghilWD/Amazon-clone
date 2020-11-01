import React from 'react';
import '../Style/Payment.css';
import { useStateValue } from "./StateProvider";
import CheckoutProduct from './CheckoutProduct'
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer'
import {loadStripe} from '@stripe/stripe-js';
import {
  CardElement,
  Elements,
  useStripe,
  useElements,
} from '@stripe/react-stripe-js';

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
   
    const handleSubmit = async (event) => {
      event.preventDefault();
      const {error, paymentMethod} = await stripe.createPaymentMethod({
        type: 'card',
        card: elements.getElement(CardElement),
      });
    };
   
    return (
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe} className="payment__option__detail__button">
          Buy Now
        </button>
      </form>
    );
  };

  const stripePromise = loadStripe('pk_test_6pRNASCoBOKtIshFeQd4XMUh');



function Payment() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="payment">
            <h2>Payment ({basket?.length} items)</h2>
            <div className="payment__option">
                <h3>Delivery Address</h3>
                <div className="payment__option__part">
                    <p>6925 Hollywood Blvd </p>
                    <p>Hollywood, CA 90028, États-Unis</p>
                </div>
            </div>
            <div className="payment__option">
                <h3>Review items and delivery</h3>
                <div>
                    {basket?.map(item => (
                        <CheckoutProduct 
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                    />
                    ))}
                </div>
            </div>
            <div className="payment__option">
                <h3>Payment Detail</h3>
                <div className="payment__option__detail">
                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3 className="payment__total">Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={getBasketTotal(basket)} 
                                    displayType={'text'} 
                                    thousandSeparator={true} prefix={'$'}
                                />
                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>
                </div>
            </div>
        </div>
    )
}

export default Payment
