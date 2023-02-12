import React from 'react'
import "./Header.css"
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa"
import { IoIosFlag } from "react-icons/io"
import Subheader from '../Subheader/Subheader'
import { NavLink } from 'react-router-dom'


const Header = () => {
    return (
        <>
            <div className='header'>
                <div className='left_side'>
                    <NavLink to="/"><img className='logo' src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" />
                    </NavLink>
                    <div className="item adress">
                        <p>  <FiMapPin className='map' />hello,</p>
                        <h5>enter your address</h5>
                    </div>

                </div>
                <div className='middile'>
                    <div className="box">
                        <div className="box_content">
                            <button type="submit" className="all">
                                All <IoMdArrowDropdown />
                            </button>
                            <input type="text" placeholder='search for item...' />
                            <button type="submit" className="search">
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='lastpart'>
                    <div>
                        <NavLink className="item" to="/login">
                            <IoIosFlag />
                            <h5>Login,sign up<IoMdArrowDropdown /></h5>
                        </NavLink>
                    </div>
                    <div className="item">
                        <p>Hello,</p>
                        <h5>Account & Lists<IoMdArrowDropdown /></h5>
                    </div>
                    <div className="item">
                        <p>Returns</p>
                        <h5>& Order</h5>
                    </div>
                    <div className="item"><FaShoppingCart /> </div>
                </div>
            </div>
            <Subheader />
        </>
    )
}

export default Header