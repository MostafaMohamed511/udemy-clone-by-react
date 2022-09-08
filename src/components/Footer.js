import React from 'react'
import style from './cssModules/Footer.module.css'

function Footer() {
  return (
    <footer className={style.footer}>
        <div className={style['list-container']}>
            <ul>
                <li><a href="#">Udemy Besiness</a></li>
                <li><a href="#">Teach on Udemy</a></li>
                <li><a href="#">Get the app</a></li>
                <li><a href="#">About us</a></li>
                <li><a href="#">Contact us</a></li>
            </ul>
            <ul>
                <li><a href="#">Careers</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">Help and Support</a></li>
                <li><a href="#">Affiliate</a></li>
                <li><a href="#">Investors</a></li>
                
            </ul>
            <ul>
                <li><a href="#">Terms</a></li>
                <li><a href="#">Privacy policy</a></li>
                <li><a href="#">Cookies settings</a></li>
                <li><a href="#">Sitemap</a></li>
                <li><a href="#">Accessability statment</a></li>
            </ul>
        </div>
        <div className={style['footer-logo']}>
        <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-udemy-inverted.svg" />
        </div>
    </footer>
  )
}

export default Footer