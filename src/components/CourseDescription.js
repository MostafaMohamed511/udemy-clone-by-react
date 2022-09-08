import React from 'react'
import style from './cssModules/CourseDescription.module.css'
import CheckIcon from '@mui/icons-material/Check';
import Review from './Review';

function CourseDescription({course}) {
  return (
    <div className={style.container}>
      <div className={style.objectives}>
        <h2>What you'll learn</h2>
        <ul>
          {/* <li><CheckIcon />Have an intermediate skill level of Python programming.</li>
          <li><CheckIcon />Use the numpy library to create and manipulate arrays.</li>
          <li><CheckIcon />Learn how to work with various data formats within python, including: JSON,HTML, and MS Excel Worksheets.</li>
          <li><CheckIcon />Have a portfolio of various data analysis projects.</li>
          <li><CheckIcon />Use the Jupyter Notebook Environment.</li>
          <li><CheckIcon />Use the pandas module with Python to create and structure data.</li>
          <li><CheckIcon />Create data visualizations using matplotlib and the seaborn modules with python.</li> */}
          {
            course.overview.map( (el , index) => <li key={index}><CheckIcon />{el}</li> )
          }
        </ul>
      </div>
      <div className={style.require} >
      <h2>Requirements</h2>
      <ul>
        {/* <li>Basic math skills.</li>
        <li>Basic to Intermediate Python Skills</li>
        <li>Have a computer (either Mac, Windows, or Linux)</li>
        <li>Desire to learn!</li> */}
        {
          course.requirements.map( (el , index) => <li key={index}>{el}</li> )
        }
      </ul>
      </div>
      <div className={style.instructor}>
        <h2>instructor</h2>
        <h3 style={{color:'blue'}}>Jose Portilla</h3>
        <h3 style={{color:'grey'}}>position - Head of Data Science at Pierian Training</h3>
        <div className={style.imgContainer}>
          <img src={course.instructor.Image } />
          <ul style={{listStyle: 'none'}}>
            <li>Instructor Rating {course.instructor.Rating} </li>
            <li>{course.instructor.reviewsNumber} Reviews</li>  
            <li>{course.instructor.studentNumber} Students</li>
            <li>{course.instructor.coursesNumber} Courses</li>
          </ul>
        </div>
        <p>{course.instructor.description }</p>
      </div>
      {
        // course.reviews.map( (el , index) => <Review key={index} name={el.name} content={el.content } /> )
        course.reviews.map( (el , index) => <Review key={index} rev={el} /> )
      }

        
    </div>

  )
}

export default CourseDescription