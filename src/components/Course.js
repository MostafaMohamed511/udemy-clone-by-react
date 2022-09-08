import React from 'react'
import style from './cssModules/Course.module.css'
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

function Course(props) {
  return (
        <figure className={style.course} style={{transform : `translateX(${props.x}px)`}}>
            <img src={props.img} />
            <div className={style.courseTitle}>
              <b>
                {props.title}
              </b>
            </div>
            <span>
                {props.author}
            </span>
            <p>
                <StarIcon className={style.star} />
                <StarIcon className={style.star} />
                <StarIcon className={style.star} />
                <StarHalfIcon className={style.star} />
                <StarBorderIcon className={style.star} />
            </p>
            <p> 
                <b>
                    E&euro;1299.99
                </b>
            </p>
        </figure>
  )
}

export default Course