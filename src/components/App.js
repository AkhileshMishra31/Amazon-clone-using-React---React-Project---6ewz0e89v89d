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
import { useStateValue } from '../Context/CartContext';
import Payment from './Payment/Payment';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';



const promise = loadStripe(
  "pk_test_51JZrQMSJRl1m3ljvQryfZdJZxyscbHseK0JiT4EbYBSL4CovhpmyTvYv1AHbzZ8jDSl5KT6O6w8O9ZxFbWxhwmLt00xQSXtFdf"
);

const Layout = ({ children }) => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div id="main">
        <Header basket={basket} />
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
  const [{ basket }, dispatch] = useStateValue();
  return (
    <>
      <div id="main">

        <Header basket={basket} />
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
        dispatch({
          type: "LOG_OUT"
        })
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
          <Route path='/payment' element={<><Layouttow> <Elements stripe={promise}><Payment /></Elements></Layouttow></>} />
          <Route path="*" element={<h1>not found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  )
}


export default App;
