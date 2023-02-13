import React from 'react'
import "./Shoppingcart.css"

const Shoppingcart = () => {
    return (
        <div className='shoppingcart'>
            <div className='shoppingcart_left'>
                <div className='shoppingcart_left_content'>
                    <div className='shopping_cart_heading'>
                        <h1>Shopping Cart</h1>
                    </div>
                    <div className='shopping_cart_item'>
                        
                        <div className='shopping_items'>
                            <div className='shopping_images'>
                                <img src='https://m.media-amazon.com/images/I/81IXkYSNpNL._AC_AA180_.jpg' />
                            </div>
                            <div className='shopping_description'>
                                <h1>AUGO Magnetic Screen Door - Self Sealing, Heavy Duty, Hands Free Mesh Partition Keeps Bugs Out - Pet and Kid Friendly - Patent Pending Keep Open Feature - 38" x 83"</h1>
                                <h6>In stock</h6>
                                <p>Sold by diyoraselling</p>
                                <p>$<span>233</span></p>
                                <button>Remove from cart</button>
                            </div>
                        </div>

                    </div>
                    <div className='shopping_cart_subtotal'>

                    </div>
                </div>
            </div>
            <div className='shoppingcart_right'>
                <div className='shoppingcart_right_content'>
                    <div className='shoppingcart_right_subtotal'>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Shoppingcart