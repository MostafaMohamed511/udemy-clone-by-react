import React from 'react'
import style from './Figure.module.css'
function Figure(props) {
  return (
    <figure className={style.Category}>
        <img src={props.img} />
        <h3>{props.title}</h3>
    </figure>
  )
}

export default Figure
