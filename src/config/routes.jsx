import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import About from '../Screens/about/About'
import Home from '../Screens/home/Home'
import Contacts from '../Screens/contact/Contacts'
import Products from '../Screens/product/Products'
import Navbar from '../Compnents/Navbar'
import SingelProduct from '../Screens/singel-product/SingelProduct'



const Routers = () => {
    return (

        <BrowserRouter>
        <Navbar/>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='about' element={<About/>} />
                <Route path='contact' element={<Contacts/>} />
                <Route path='product' element={<Products/>} />
                <Route path='singleproduct/:id' element={<SingelProduct/>} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routers