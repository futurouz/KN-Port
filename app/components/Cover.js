import React, { PropTypes } from 'react'
import CoverContainer from '../containers/CoverContainer'
import * as styles from '../styles'

function Cover(props) {
  return (
      <div style= {styles.coverStyle}>
        <div className='row'>
          <div className='col-md-12 text-center'>
            <h1 style = { styles.h1Style } className='wow fadeInUp' data-wow-delay='0.3s'>{props.title}</h1>
            <p style = { styles.pStyle } className='wow fadeInUp' data-wow-delay='1.5s' data-wow-duration="0.3s">{props.subTitle}</p>
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

Cover.propTypes = {
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string.isRequired
}

export default Cover;
