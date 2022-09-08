import React from 'react'
import style from './cssModules/NavBar.module.css'
import {Link} from 'react-router-dom'
const  NavBar = ()=> {
  return (
    <nav className ={style.nav} >
        <Link to="/"><img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" height="30px" /></Link>
        <a href="#" className={style['navbar-element']} >Category</a>
        <input type="search" className={`${style['navbar-element']} ${style['sea-bar']}`}  />
        <a href="#"className={style['navbar-element']} >Udemy Besiness</a>
        <a href="#"className={style['navbar-element']} >Teach on Udemy</a>
        {/* <i class="fa-solid fa-cart-shopping "></i> */}
        <button className={style['navbar-element']} >Log in</button>
        <button className={style['navbar-element']} >sign up</button>
    </nav>
  )
}

export default NavBar