import React from 'react'
import style from './Course.module.css'

function Course(props) {
  return (
        <figure className={style.course}>
            <img src={props.img} />
            <p> 
                <b>
                    {props.title}
                </b>
            </p>
            <span>
                    {props.author}
            </span>
        </figure>
  )
}

export default Course