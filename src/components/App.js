import React, { useEffect } from 'react'
import { auth } from '../Firebase';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import reducer, { initialState } from '../Context/CartReducer';
import '../styles/App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Homescreen from './Homescreen/Homescreen';
import Login from './Login/Login';
import Products from './Products/Products';
import Shoppingcart from './Shoppingcart/Shoppingcart';
import { useStateAuth } from '../Context/AuthContext';


const Layout = ({ children }) => {
  return (
    <>
      <div id="main">
        <Header />
        <Homescreen />
        <div className='product_section'>
          {children}
        </div>
        <Footer />
      </div>
    </>
  )
}
const Layouttow = ({ children }) => {
  return (
    <>
      <div id="main">

        <Header />
        {children}
        <Footer />

      </div>
    </>
  )
}

const App = () => {
  const [{ user }, dispatch] = useStateAuth()
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        console.log(user.email);
        dispatch({
          type: "SET_USER",
          profile: {
            email: user.email
          }
        })
      }
      else {
        console.log(false);
      }
    })
  }, [])

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<><Layout><Products /></Layout></>} />
          <Route path="/login" element={<><Login /></>} />
          <Route path='/checkout' element={<><Layouttow><Shoppingcart /></Layouttow></>} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
