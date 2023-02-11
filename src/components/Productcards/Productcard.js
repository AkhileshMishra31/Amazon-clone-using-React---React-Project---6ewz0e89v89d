import React from 'react';
import "./productcards.css"

const Productcard = () => {
    return (
        <div className='product_card'>
            <h1>Shop Valentine's Day</h1>
            <div className='product_images'>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_E_DQC_186x116._SY116_CB615030050_.jpg"/>
                    <span>womens clotings</span>
                </div>
                <div>
                    <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Fashion/Gateway/BAU/BTF-Refresh/May/PC_WF/WF1-186-116._SY116_CB636048992_.jpg"/>
                    <span>kid zone</span>
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_E_DQC_186x116._SY116_CB615030050_.jpg"/>
                    <span>Electronics</span>
                </div>
                <div>
                    <img src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonServices/Site/US/Product/FBA/Outlet/Merchandising/Outlet_GW_E_DQC_186x116._SY116_CB615030050_.jpg"/>
                    <span>Electronics</span>
                </div>
            </div>
        </div>
    )
}

export default Productcard