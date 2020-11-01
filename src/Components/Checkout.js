import React from 'react'
import { useStateValue } from "./StateProvider";
import '../Style/Checkout.css';
import CheckoutProduct from './CheckoutProduct';
import Total from './Total';

function Checkout() {

    const [{ basket }, dispatch] = useStateValue();

    return (
        <div className="checkout">
            <div className="checkout__left">
                <h3>Your Basket List</h3>
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
            <div className="checkout__right">
                <Total />
            </div>
        </div>
    )
}

export default Checkout
