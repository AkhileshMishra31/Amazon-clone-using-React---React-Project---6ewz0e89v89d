import React, { useState, useEffect } from 'react'
import { useStateValue } from '../../Context/CartContext'
import "./payment.css"
import Cartpage from '../Cartpage';
import { gettotalvalue, totalitems } from '../../Context/CartReducer';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format-latest';

const Payment = () => {

    const [{ basket }, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState(true);

    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                url: `/payments/create?total=${gettotalvalue(basket) * 100}`
            });
            setClientSecret(response.data.clientSecret)
        }


        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null)
            setProcessing(false)
        })

    }
    const handleChange = () => {

    }
    return (
        <div className='payment'>
            <div className='payment_section'>
                <div className='dilevery_address'>
                    <div className='payment_left'>
                        <h2>Dilevery method:-</h2>
                    </div>
                    <div className='payment_right'>
                        <h1>CheckOut<span>({totalitems(basket)})</span></h1>
                    </div>
                </div>
                <div className='dilevery_items'>
                    <div className='payment_left'>
                        <h2>Review items and dilevery:-</h2>
                    </div>
                    <div className='payment_right'>
                        {
                            basket?.map((item) => {
                                return (
                                    <>
                                        <Cartpage id={item.id} title={item.title} image={item.image} price={item.price}
                                            quantity={item.quantity}
                                        />
                                    </>
                                )
                            })
                        }
                    </div>
                </div>
                <div className='payment_method'>
                    <div className='payment_left'>
                        <h2>payment method</h2>
                    </div>
                    <div className='payment_right'>
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className='payment__priceContainer'>
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <h3>Order Total: {value}</h3>
                                    )}
                                    decimalScale={2}
                                    value={gettotalvalue(basket)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"$"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment