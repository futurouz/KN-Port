import React from 'react'
import * as styles from '../styles'

function Cover() {
  return (
      <div style= {styles.coverStyle}>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 style = { styles.h1Style } className='wow fadeInUp' data-wow-delay='0.3s'><b>KN</b>-PORT</h1>
            <p style = { styles.pStyle } className='wow fadeInUp' data-wow-delay='1.5s' data-wow-duration="0.3s">Student & a little Front-End Developer</p>
          </div>
        </div>
        <div className='row wow fadeIn' data-wow-delay='2s'>
          <div className='col-md-12 text-center'>
            <img src='app\img\scroll_down.png' className='wow pulse infinite'  width='75px' height='75px' style = { styles.imgCover }/>
          </div>
        </div>
      </div>
  )
}

export default Cover;
