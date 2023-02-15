import React from 'react'
import CurrencyFormat from 'react-currency-format-latest'
import { useNavigate } from 'react-router-dom'
import { useStateValue } from '../../Context/CartContext'
import { gettotalvalue } from '../../Context/CartReducer'
import "./Subtotal.css"

const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    const navigate = useNavigate();
    return (
        <div className='subtotal'>
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <p className='content'>
                            Part of your order qualifies for free Delivery. Select this option at checkout. Details
                        </p>
                        <p></p>
                        <p className='subototal_p'>
                            Subtotal (2 items): <strong>{value}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={gettotalvalue(basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button onClick={() =>navigate("/payment")}>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal