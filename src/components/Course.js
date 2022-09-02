import React from 'react'
import style from './Course.module.css'
import StarIcon from '@mui/icons-material/Star';

function Course(props) {
  return (
        <figure className={style.course} style={{transform : `translateX(${props.x}px)`}}>
            <img src={props.img} />
            <p> 
                <b>
                    {props.title}
                </b>
            </p>
            <span>
                    {props.author}
            </span>
            {/* <p>
                <StarIcon className={style.star}/>
            </p>
            <p> 
                <b>
                    E&euro;1299.99
                </b>
            </p> */}
        </figure>
  )
}

export default Course