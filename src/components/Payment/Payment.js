import React from 'react'
import { useStateValue } from '../../Context/CartContext'
import "./payment.css"
import Cartpage from '../Cartpage';
import { totalitems } from '../../Context/CartReducer';

const Payment = () => {

    const [{ basket }, dispatch] = useStateValue();
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

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment