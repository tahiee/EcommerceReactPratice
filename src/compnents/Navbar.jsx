import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbars.css'
import Home from '../Screens/home/Home'
const Navbar = () => {
    const [showList, setShowList] = useState(false)
    const togglelist = () => {
        setShowList(!showList)
    }
    return (

        <>
            <div className="navbar bg-slate-300">
                <div className="flex-1 ml-4">
                    <a className="btn btn-ghost text-xl">daisyUI</a>
                    <div className='nav-link'>
                        <ul className='flex gap-10 ml-4 cursor-pointer'>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="about">About</Link>
                            </li>
                            <li>
                                <Link to="contact">Contacts</Link>
                            </li>
                            <li>
                                <Link to="product">Products</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div>
                {showList && (
                    <ul className="slide mr-4">
                        <Link to='/'>Home</Link>
                        <Link to='product'>Products</Link>
                        <Link to='contact'>Contact</Link>
                    </ul>
                )}
                <label className="btn btn-circle swap swap-rotate" >
                    {/* this hidden checkbox controls the state */}
                    <input type="checkbox" onClick={togglelist} />

                    {/* hamburger icon */}
                    <svg className="swap-off fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    {/* close icon */}
                    <svg className="swap-on fill-current" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
                </div>
            </div>
        </>
    )
}

export default Navbar

