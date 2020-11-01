import React from 'react';
import '../Style/CheckoutProduct.css';
import { useStateValue } from "./StateProvider";


function CheckoutProduct({ id, title, image, price, rating }) {
    
    const [{ basket }, dispatch] = useStateValue();

    const removeFromBasket = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id: id,
        })
    }

    return (
        <div className="checkoutproduct">
            <div className="checkoutproduct1">
                <img src={image} alt="" className="checkoutproduct1__img" />
                <div className="checkoutproduct1__info">
                    <p>{title}</p>
                    <div className="checkoutproduct1__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                    </div>
                    <p><small>$</small><strong>{price}</strong></p>
                    <button onClick={removeFromBasket}>Remove From basket</button>
                </div>
            </div>
        </div>
    )
}

export default CheckoutProduct
