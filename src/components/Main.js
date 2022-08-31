import React from 'react'
import style from './Main.module.css'
import Figure from './Figure'
import Course from './Course'

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
                <Course img="https://img-c.udemycdn.com/course/240x135/394676_ce3d_5.jpg" title="Learn python:The complete python programming course" author="Avinash Jain,The Codex" />
                <Course img="https://img-c.udemycdn.com/course/240x135/396876_cc92_7.jpg" title="Learing python for Data analysis and visualaization" author="Jose Portilla" />
                <Course img="https://img-c.udemycdn.com/course/240x135/405878_e5a0_3.jpg" title="Python for Beginners - Learn Programming from scratchPython For Beginners" author="Edwin Diaz" />
                <Course img="https://img-c.udemycdn.com/course/240x135/426570_1b91_3.jpg" title="Learn Python-Python for Beginners" author="Abrar Hussain" />
                <Course img="https://img-c.udemycdn.com/course/240x135/449532_2aa9_7.jpg" title="Python Beyond the Basics - Object-Oriented Programming" author="Infinite Skills" />
                <Course img="https://img-c.udemycdn.com/course/240x135/482754_7146_6.jpg" title="Python From Scratch & Selenium WebDriver QA Automation 2022" author="Adams Kinfu" />
                <Course img="https://img-c.udemycdn.com/course/240x135/519554_da68_6.jpg" title="Teach Your Kids to Code: Learn to Program Python at Any Age!" author="Bryson Payne" />
                <Course img="https://img-c.udemycdn.com/course/240x135/535622_3bc0.jpg" title="Python for Data Structures, Algorithms, and Interviews!" author="Jose Portilla" />
                <Course img="https://img-c.udemycdn.com/course/240x135/543600_64d1_4.jpg" title="Automate the Boring Stuff with Python Programming" author="AlSweigart" />
                <Course img="https://s.udemycdn.com/premium-clp/567828/CourseImage-240x135.jpg" title="2022 Complete Python Bootcamp From Zero to Hero in Python" author="Jose Portilla" />
                <Course img="https://img-c.udemycdn.com/course/240x135/577248_3b6f_13.jpg" title="Python for Beginners with Examples" author="Ardit Sulce" />
                <Course img="https://img-c.udemycdn.com/course/240x135/622414_03f5_4.jpg" title="Taming Big Data with Apache Spark and Python - Hands On!" author="Sundog Education" />
            </div>
        </div>
        <h2>Top Category</h2>
        <div className={style['top-cat']}>
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" title="Design" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" title="Development" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" title="Marketing" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" title="IT and Software" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" title="Personal Development" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" title="Besiness" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" title="Photography" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" title="Music" />
        </div>
    </main>
  )
}

export default Main