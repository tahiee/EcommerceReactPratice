import React from 'react'
import GitImg from './github png.png'
const Contacts = () => {
    return (
        <div className='flex justify-center items-center text-center'>
        <div className='flex rounded-full h-[75px] w-[75px] justify-center items-center text-center mt-10 bg-white '>
            <a className='' href="https://github.com/tahiee">
            <img className=' cursor-pointer h-[62px] w-[62px]' src={GitImg} alt="myGit" />
            </a>
        </div>
        </div>
    )
}

export default Contacts
