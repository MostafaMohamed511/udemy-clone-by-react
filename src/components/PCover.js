import React from 'react'
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import ClosedCaptionOffIcon from '@mui/icons-material/ClosedCaptionOff';
import LanguageIcon from '@mui/icons-material/Language';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import style from './cssModules/PCover.module.css'

function PCover({course}) {
  return (
    <div className={style.cover}>
      <div className={style.container}>
        <h1>{course?.title}</h1>
        <p> {course?.Introduction}</p>
        <div className={style.ratings}>
          <StarIcon className={style.star} />
          <StarIcon className={style.star} />
          <StarIcon className={style.star} />
          <StarHalfIcon className={style.star} />
          <StarBorderIcon className={style.star} />
          (13,0000 rating)
          200,000 student
        </div> 
        <div> Created by {course?.author}</div> 
        <div className={style.icons}>
          <span> <NewReleasesIcon />Last updated </span> 
          <span> <LanguageIcon />language </span>
          <span> <ClosedCaptionOffIcon />subtitles </span>
        </div>
      </div>
    </div>
  )
}

export default PCover