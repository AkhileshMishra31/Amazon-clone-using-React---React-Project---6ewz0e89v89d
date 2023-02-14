import React, { useEffect } from 'react'
import "./Header.css"
import { AiOutlineSearch } from 'react-icons/ai'
import { FiMapPin } from 'react-icons/fi'
import { IoMdArrowDropdown } from 'react-icons/io'
import { FaShoppingCart } from "react-icons/fa"
import { IoIosFlag } from "react-icons/io"
import Subheader from '../Subheader/Subheader'
import { NavLink } from 'react-router-dom'
import { useStateAuth } from '../../Context/AuthContext'
import { auth } from '../../Firebase'
import { getCartContents } from '../../Context/CartReducer'
import { useStateValue } from '../../Context/CartContext'


const Header = () => {

    const [{user}, dispatch] = useStateAuth();

    const signout = () => {
        auth.signOut().then(() => {
            dispatch({
                type: "LOG_OUT"
            })
        }).catch((err) => {
            console.log(err);
        })
    }

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
                        <NavLink className={user ? "authstate" : "item"} to={user ? "/" : "/login"}>
                            {user ? <h5>{user.email}</h5> : <h5>Login,sign up</h5>}
                            {user ? <button onClick={signout} className='signout'>Signout</button> : <IoIosFlag />}
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
                    <NavLink to="/checkout" className="item"><FaShoppingCart /> </NavLink>
                </div>
            </div>
            <Subheader />
        </>
    )
}

export default Header