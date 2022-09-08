import React from 'react'
import style from './cssModules/Review.module.css'
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

function Review({rev}) {
  const {name , rate , content} = rev
  return (
    <div className={style.review}>
      <img 
        src='https://img-c.udemycdn.com/user/200_H/9685726_67e7_4.jpg'
        className={style.photo} />
      <div>
        <h4>{name}</h4>
        <div className={style.rates}>
            <div>
              <StarIcon style={{color:'gold'}} />
              <StarIcon style={{color:'gold'}} />
              <StarIcon style={{color:'gold'}} />
              <StarBorderIcon style={{color:'gold'}} />
              <StarBorderIcon style={{color:'gold'}} />
            </div>
            <div style={{color:'grey'}}>
              a week ago
            </div>
        </div>
        <p>
          {content}
        </p>
        <span style={{color:'grey'}}>
          Was this review helpful ?
        </span>
        <div className={style.flex}>
          <div className={style.feedBack}>         
            <ThumbUpIcon />
          </div>
          <div className={style.feedBack}>         
            <ThumbDownIcon />
          </div>
          <b><u>Report</u></b>
        </div>
      </div>
    </div>
  )
}

export default Review