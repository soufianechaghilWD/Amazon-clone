import React from 'react'
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from './reducer'
import '../Style/Total.css';
import CurrencyFormat from 'react-currency-format';
import { useHistory } from 'react-router-dom';


function Total() {

    const [{ basket }, dispatch] = useStateValue();
    const history = useHistory();

    
    return (
        <div className="total">
            <CurrencyFormat
                renderText={(value) => (
                <>
                    <p>
                    {/* Part of the homework */}
                    Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className="total__gift">
                    <input type="checkbox" /> This order contains a gift
                    </small>
                </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)} 
                displayType={'text'} 
                thousandSeparator={true} prefix={'$'}
            />    
            <br />    
            <button onClick={e => history.push('/payment')}>Proceed to Checkout</button>
        </div>
    )
}

export default Total
