import React from 'react'
import { gettotalvalue, totalitems } from '../../Context/CartReducer'
import Cartpage from '../Cartpage'
import "./orderr.css"
import CurrencyFormat from "react-currency-format-latest"
import moment from "moment";

const Order = ({ order }) => {

    return (
        <div className='order'>
            <h2 className='order_heading'>Order on:-{moment(order.data.created).format("MMM Do YY")}</h2>
            <p></p>
            <p className="order__id">
                <small>Order id:-{order.id}</small>
            </p>
            <hr></hr>
            {order.data.basket?.map(item => (
                <>
                    <div className='products_db'>
                        <div className='product_image'>
                            <img src={item.image} />
                        </div>
                        <div className='product_decritiom'>
                            <h1>{item.title}</h1>
                            <p>${item.price}</p>
                        </div>

                    </div>
                </>
            ))}
            <CurrencyFormat
                renderText={(value) => (
                    <>
                        <hr></hr>
                        <div className='order_total'>
                            <p className='subototal_p'></p>
                            <p className='subototal_p'>
                                Subtotal ({totalitems(order.data.basket)}items:): <strong>{value}</strong>
                            </p>
                        </div>
                    </>
                )}
                decimalScale={2}
                value={gettotalvalue(order.data.basket)} // Part of the homework
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
        </div>
    )
}

export default Order