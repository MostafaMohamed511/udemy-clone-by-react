import React from 'react'
import style from './NavBar.module.css'

const  NavBar = ()=> {
  return (
    <nav className ={style.nav} >
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy.svg" alt="logo" height="30px" />
        <a href="#" class="navbar-element" >Category</a>
        <input type="search" class="navbar-element sea-bar"  />
        <a href="#"class="navbar-element" >Udemy Besiness</a>
        <a href="#"class="navbar-element" >Teach on Udemy</a>
        <i class="fa-solid fa-cart-shopping "></i>
        <button class="navbar-element" >Log in</button>
        <button class="navbar-element" >sign up</button>
    </nav>
  )
}

export default NavBar