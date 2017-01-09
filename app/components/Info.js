import React, { PropTypes } from 'react'
import * as styles from '../styles'

function Info(props) {
  return (
    <div style= { styles.InfoStyle }>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <h1 style = { styles.h1Info } className='wow fadeInUp' data-wow-delay='0.3s' data-wow-duration="0.5s"> { props.hiTitle }</h1>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s">{ props.name }</p>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s">{ props.duty }</p>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s">{ props.hobby }</p>
        </div>
        <div className='col-md-6 text-center' style = { styles.imgInfo }>
          <img src='app\img\boy.png' className="img-responsive" className='wow fadeIn' data-wow-delay='1s' />
        </div>
      </div>
    </div>
  )
}

Info.propTypes = {
  hiTitle: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  duty: PropTypes.string.isRequired,
  hobby: PropTypes.string.isRequired
}


export default Info;
