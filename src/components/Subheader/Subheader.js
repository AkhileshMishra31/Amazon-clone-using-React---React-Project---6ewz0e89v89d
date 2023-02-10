import React from 'react'
import "./Subheader.css"
import { GiHamburgerMenu } from 'react-icons/gi'


const Subheader = () => {
    return (
        <div className='Subheader'>
            <div className='left'>
                <a className="hamburger"><GiHamburgerMenu size={23}/></a>
                <a><span>All</span></a>
                <a><span>Today's Deals</span></a>
                <a><span>Today's Deals</span></a>
                <a><span>Today's Deals</span></a>
                <a><span>Today's Deals</span></a>
                <a><span>Today's Deals</span></a>   
            </div>
            <div className='right'>
                <a>Shop great deals nows</a>
            </div>
        </div>
    )
}

export default Subheader