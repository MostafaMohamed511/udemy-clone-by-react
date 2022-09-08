import React from 'react'
import { useParams } from 'react-router-dom'
import PCover from "./PCover";
import RightSlider from "./RightSlider";
import CourseDescription from './CourseDescription'

function CoursePage({courses}) {
    const params = useParams() ;
    const {id} = params
    const myCourse = courses[id-1]
    return (
    <>
      <PCover course={myCourse} />
      <RightSlider course={myCourse} />
      <CourseDescription course={myCourse} />
      
    </>
  )
}

export default CoursePage