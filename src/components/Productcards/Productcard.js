import React from 'react';
import "./productcards.css"

const Productcard = ({ title, image }) => {
    console.log(image);
    return (
        <div className='product_card'>
            <h1>{title}</h1>
            <div className='product_images'>
                {
                    image.map((imag) => {
                        return (
                            <>
                                <div className='adevert'>
                                    <img src={imag.imgsrc} />
                                    <span>{imag.title}</span>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Productcard