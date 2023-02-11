import React from 'react'
import Productcard from '../Productcards/Productcard'
import "./ProductAdvertisement.css"

const ProductAdvertisement = () => {
    return (
        <div className='product_advertisement'>
            <div className='disclaimer'>
                <p>You are on amazon.com. You can also shop on Amazon India for millions of products with fast local delivery.</p>
            </div>
            <div className='product_cards'>
                <Productcard />
                <Productcard />
                <Productcard />
                <Productcard />
            </div>
        </div>
    )
}

export default ProductAdvertisement