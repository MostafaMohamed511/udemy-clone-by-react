import React from 'react'
import style from './Main.module.css'

function Main() {
  return (
    <main>
        <section className={style.intro}>
            <div className={style.title}>
                <h2>New to Udemy?Lucky you.</h2>
                <p>Courses start at E &euro;169.99. Get your new student offer before it expires.</p>
            </div>
            <img 
            src="https://img-c.udemycdn.com/notices/home_banner/image_udlite/f788047b-19d8-4d2d-964d-d07e310b1b89.jpg" />
        </section>
        <div>
            <h2>A broad selection of courses </h2>
            <p>Choose from 185,000 online video courses with new additions published every month</p>
        </div>
        <div className={style.sections}>
            <span className={style.section}> <b>Python</b> </span>
            <span className={style.section}> <b>Excel</b>  </span>
            <span className={style.section}> <b>Web development</b> </span>
            <span className={style.section}> <b>Java script</b> </span>
            <span className={style.section}> <b>Data scince</b> </span>
            <span className={style.section}> <b>AWS certification</b> </span>
            <span className={style.section}> <b>Drawing</b> </span>
        </div>
        <div className={style['big-container']}>
            {/*
            <div className={`${style.slider} ${style.left} ${style.hidden}`}>
                <i class="fa-solid fa-angle-left"></i>
            </div>
             <div className={`${style.slider} ${style.right}`}>
                <i class="fa-solid fa-angle-right"></i>
            </div>
            */}
            <div className={style.courses}>

            </div>
        </div>
        <h2>Top Category</h2>
        <div className={style['top-cat']}>
            <figure className={style.Category}>
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" />
                <h3>Design</h3>
            </figure>
            <figure className={style.Category}>
                <img src="	https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" />
                <h3>Development</h3>
            </figure>
            <figure className={style.Category}>
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" />
                <h3>Marketing</h3>
            </figure>
            <figure className={style.Category}>
                <img src="	https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" />
                <h3>IT and Software</h3>
            </figure>
            <figure className={style.Category}>
                <img src="	https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" />
                <h3>Personal Development</h3>
            </figure>
            <figure className={style.Category}>
                <img src="	https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" />
                <h3>Besiness</h3>
            </figure>
            <figure className={style.Category}>
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" />
                <h3>Photography</h3>
            </figure>
            <figure className={style.Category}>
                <img src="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" />
                <h3>Music</h3>
            </figure> 
        </div>
    </main>
  )
}

export default Main