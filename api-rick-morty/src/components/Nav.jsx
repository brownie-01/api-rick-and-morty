import React from 'react'
import img from '../assets/img.Webp'
import './Nav.css'
import {Link} from 'react-router-dom'


function Nav() {
  return (
    <>
        <Link to= "/" className='a'>
            <img className='img' src={img} alt="" />
            <h1> Rick And Morty</h1>
        </Link>
    </>
  )
}

export default Nav