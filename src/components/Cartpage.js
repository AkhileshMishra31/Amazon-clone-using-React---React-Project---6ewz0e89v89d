import React from 'react'
import { useStateValue } from '../Context/CartContext'

const Cartpage = ({ id, title, image, price, rating, quantity }) => {
    const [{ basket }, dispatch] = useStateValue();

    const inreasequantity = () => {
        dispatch({
            type: "ADD_QUANTITY",
            id
        })
    }

    const removefrombasket = () => {
        console.log(id);
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    const decreasequantity = () => {
        dispatch({
            type: "REMOVE_FROM_BASKET",
            id
        })
    }

    return (
        <>

            <div className='shopping_items'>
                <div className='shopping_images'>
                    <img src={image} />
                </div>
                <div className='shopping_description'>
                    <h1>{title}</h1>
                    <h6>In stock</h6>
                    <p>Sold by diyoraselling</p>

                    <p>$<span>{price}</span></p>
                    <div className='button_section'>
                        <button onClick={removefrombasket} className='remove_button'>Remove from cart</button>
                        <div>
                            <p>Quantity</p>
                            <button onClick={decreasequantity} className='increse_quantity'>-</button>
                            <p>{quantity}</p>
                            <button onClick={inreasequantity} className='increse_quantity'>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Cartpage