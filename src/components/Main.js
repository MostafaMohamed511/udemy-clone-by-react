import React , { useState } from 'react'
import style from './cssModules/Main.module.css'
import Figure from './Figure'
import Course from './Course'
import { Link } from 'react-router-dom'
import coursesContext from '../App'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';

function Main({courses}) { 
    const [x , setX] = useState(0) ;
    const [rightButton , setRightButton] = useState('') ;
    const [leftButton , setLeftButton] = useState('hidden') ;

    const rightButtonHandler = ()=>{
        if (x-270 == -270*(courses.length-4))
            setRightButton('hidden')
        setLeftButton('')
        setX(x-270); 
    }
    
    const leftButtonHandler = ()=>{
        if (x== -270)
            setLeftButton('hidden')
        setRightButton('')
        setX(x+270)
    }
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
            
            <div 
              className={`${style.slider} ${style.left} ${leftButton==='hidden' ? style.hidden : ''}`} 
              onClick={leftButtonHandler}
            >
                <ArrowBackIosIcon />
            </div>
            <div 
              className={`${style.slider} ${style.right} ${ rightButton === 'hidden' ? style.hidden: '' }`} 
              onClick={rightButtonHandler}
            >
                <ArrowForwardIosIcon />
            </div>
           
            <div className={style.courses}>
                {courses.map(el=> <Link key={el.id} to={`/courses/${el.id}`}>
                    <Course img={el.image} title={el.title}  author={el.instructor.name} x={x}/>
                </Link>) }
            </div>
        </div>
        <h2>Top Category</h2>
        <div className={style['top-cat']}>
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg" title="Design" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg" title="Development" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg" title="Marketing" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg" title="IT and Software" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg" title="Personal Development" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg" title="Photography" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg" title="Besiness" />
            <Figure img="https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg" title="Music" />
        </div>
    </main>
  )
}

export default Main