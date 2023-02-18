import React, { useState, useEffect } from 'react'
import { useStateAuth } from '../../Context/AuthContext';
import { useStateValue } from '../../Context/CartContext'
import { db } from '../../Firebase';
import Order from '../Order/Order';
import "./Order.css"

const Orders = () => {
    const [{ user }, dispatch] = useStateAuth();
    const [orders, Setorders] = useState([]);
    useEffect(() => {
        if (user) {
            try {
                db
                    .collection('users')
                    .doc(user?.email)
                    .collection('orders')
                    .orderBy('created', 'desc')
                    .onSnapshot(snapshot => (
                        Setorders(snapshot.docs.map(doc => ({
                            id: doc.id,
                            data: doc.data()
                        })))
                    ))
                console.log(orders);
            } catch (error) {
                console.log(error);
            }
        }

    }, [user])

    return (
        <>
            <div className='orders'>
                {
                    orders?.length < 1 ? (<div className='no_orders'>
                        <h1>Loading...</h1>
                    </div>) : (
                        <div className='order_order'>
                            <h1 className='order_history'>Your Orders History</h1>
                            {orders?.map(order => (
                                <Order key={order.id} order={order} />
                            ))}
                        </div>
                    )

                }
            </div>
        </>
    )
}



export default Orders