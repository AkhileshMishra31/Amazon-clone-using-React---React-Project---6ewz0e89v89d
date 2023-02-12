import React from 'react'
import "./Products.css"
import Product from '../Product/Product'

const Products = () => {
    return (
        <>
            <div className="products">
                <div className='home_row'>
                    <Product
                        id="12321341"
                        title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
                        price={11.96}
                        rating={5}
                        image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
                    />
                    <Product
                        id="12321342"
                        title="AmazonBasics 108cms (43 inch) Full HD Smart LED Fire TV with Front Firing Speakers 20W, 2023 Model"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71h8jRpTg2L._SL1500_.jpg"
                    />
                </div>
                <div className='home_row'>
                    <Product
                        id="12321343"
                        title="The Tea Heaven | Tea Gift - 6 Assorted Teas Gift Box, Set of 6 Unique Teas | Kashmiri Kahwa | Saffron Masala Chai | Lemongrass"
                        price={11.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71Z+hrFS2qL._SX679_.jpg"
                    />
                    <Product
                        id="12321344"
                        title="Nv Home Decor Sheesham Wood CNC 6 Seater Dining Table Set with Bench and Chair for Dining Room Home Solid Wood Dining Table 6 Seater for Living Room Hotels (Honey Finish)"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/71U7RAnhuVS._AC_SY200_.jpg"
                    />
                    <Product
                        id="12321345"
                        title="ASIAN Men's Thar-04 Sports Running,Walking & Gym Shoes with Eva Sole Extra Jump Casual Sneaker"
                        price={239.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/610fN3RyKFL._UY695_.jpg"
                    />
                </div>

                <div className='home_row'>
                    <Product
                        id="12321346"
                        title="Amazon Brand - Solimo Airtight Plastic Storage Container Set, with 4 Containers (500ml) & Serving Tray, BPA Free, Black"
                        price={111.96}
                        rating={5}
                        image="https://m.media-amazon.com/images/I/71MJst1z3ZL._SX522_.jpg"
                    />
                    <Product
                        id="12321347"
                        title="POCO M4 Pro (Cool Blue, 6GB RAM 64GB Storage)"
                        price={122.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/410r09IqYuL._SX300_SY300_QL70_FMwebp_.jpg"
                    />
                    <Product
                        id="12321348"
                        title="Hangout Hub Family-Dad Daughter- Men's & Girls's Cotton Printed Regular Fit T-Shirts (Pack of 2) Vacation Mode On"
                        price={234.0}
                        rating={4}
                        image="https://m.media-amazon.com/images/I/61acBTRyFfL._AC_SR155,154_QL70_.jpg"
                    />
                </div>

            </div>
        </>
    )
}

export default Products