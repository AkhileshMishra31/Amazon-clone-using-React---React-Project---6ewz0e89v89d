import React from 'react'
import { useStateValue } from '../../Context/CartContext'
import Cartpage from '../Cartpage'
import Subtotal from '../Subtotal/Subtotal'
import "./Shoppingcart.css"

const Shoppingcart = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    return (
        <div className='shoppingcart'>
            <div className='shoppingcart_left'>
                <div className='shoppingcart_left_content'>
                    <div className='shopping_cart_heading'>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className='shopping_cart_item'>
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
                    <div className='shopping_cart_subtotal'>

                    </div>
                </div>
            </div>
            <div className='shoppingcart_right'>
                <div className='shoppingcart_right_content'>
                    <div className='shoppingcart_right_subtotal'>
                        <Subtotal />
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shoppingcart