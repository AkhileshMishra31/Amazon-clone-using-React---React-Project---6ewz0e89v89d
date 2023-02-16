import React, { useState, useEffect } from 'react'

import { useStateValue } from '../../Context/CartContext'
import "./payment.css"
import axios from '../../axios';
import Cartpage from '../Cartpage';
import { gettotalvalue, totalitems } from '../../Context/CartReducer';
import CurrencyFormat from 'react-currency-format-latest';
import { useStateAuth } from '../../Context/AuthContext';
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import { ElementsConsumer, PaymentElement } from '@stripe/react-stripe-js';
import { useNavigate } from 'react-router-dom';
import { db } from '../../Firebase';

const Payment = () => {

    const [{ basket }, dispatch] = useStateValue();
    const [{ user }] = useStateAuth();
    const navigate = useNavigate();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded, setSucceeded] = useState(false);
    const [processing, setProcessing] = useState("");
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientSecret, setClientSecret] = useState("");


    useEffect(() => {
        // generate the special stripe secret which allows us to charge a customer
        if (!user) {
            navigate("/")
        }

        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // Stripe expects the total in a currencies subunits
                url: `/payments/create?total=${gettotalvalue(basket) * 100}`
            });
            // setClientSecret(response.data.clientSecret)
            console.log(response);
        }

        getClientSecret();
    }, [basket])


    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);
        const payload = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
            billing_details: {
                name: "Akhilesh",
            }
        }).then(({ paymentMethod }) => {
            console.log(paymentMethod);


            setSucceeded(true);
            setError(null)
            setProcessing(false)


            dispatch({
                type: "EMPTY_BASKET"
            })

        }).catch((err) => {

        })
    };

    const handleChange = event => {
        // Listen for changes in the CardElement
        // and display any errors as the customer types their card details
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
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
                        <form >
                            <CardElement onChange={handleChange} />
                            <button onClick={handleSubmit} disabled={processing || disabled || succeeded}>
                                <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment