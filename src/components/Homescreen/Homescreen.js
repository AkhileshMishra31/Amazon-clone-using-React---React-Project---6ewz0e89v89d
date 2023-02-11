import React from 'react';
import Corousel from '../Corousel/Corousel';
import ProductAdvertisement from '../ProductAdvertisement/ProductAdvertisement';


const Homescreen = () => {
    return (
        <>
            <div className="homescreen">
                <Corousel />
                <ProductAdvertisement />
            </div>
        </>

    )
}

export default Homescreen