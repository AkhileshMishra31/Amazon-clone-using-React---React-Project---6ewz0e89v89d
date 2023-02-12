import React from 'react'
import '../styles/App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import Homescreen from './Homescreen/Homescreen';
import Products from './Products/Products';
const App = () => {

  return (
    <div id="main">
      <Header />
      <Homescreen />
      <div className='product_section'>
        <Products />
      </div>
      <Footer />
    </div>
  )
}


export default App;
