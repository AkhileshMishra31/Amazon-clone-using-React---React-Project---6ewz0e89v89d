import React from 'react'
import CurrencyFormat from 'react-currency-format-latest'
import "./Subtotal.css"

const Subtotal = () => {
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
                            {/* Part of the homework */}
                            Subtotal (2 items): <strong>23</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" /> This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={23} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal