import React from 'react'
import style from './cssModules/RightSlider.module.css'

function RightSlider({course}) {
  return (
    <div className={style.right}>
        <img src={course.image}/>   
        <div className={style.container}>
            <b>{course.price}</b>
            <button className={`${style.button} ${style.VioletButton}`}>Add to Cart</button>
            <button className={`${style.button} ${style.whiteButton}`}>Buy now</button>
            <div className={style.shaded}>30 Day money-Back guarantee </div>
            <b>this Course includes :</b>
            <ul className={style.list}>
                <li>21 hours on-demand video</li>
                <li>3 articles</li>
                <li>4 downloadable resources</li>
                <li>Full lifetime access</li>
                <li>Access on mobile and TV</li>
                <li>Certificate of completion</li>
            </ul>
            <div className={style.links} >
                <a href='#'><b>Share</b></a>
                <a href='#'><b>Gift this Course</b></a>
                <a href='#'><b>Apply Coupon</b></a>
            </div>
            <hr />
            <div className={style.buttomDiv}>
                <b>Training 5 or more people?</b>
                <div className={style.shaded} >Get your team access to 17,000+ top Udemy courses anytime, anywhere.</div>
                <button className={`${style.button} ${style.whiteButton}`}>Try Udemy businuss</button>
            </div>
        </div>
    </div>
  )
}

export default RightSlider