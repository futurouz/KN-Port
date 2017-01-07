import React from 'react'
import * as styles from '../styles'

function Info() {
  return (
    <div style= { styles.InfoStyle }>
      <div className='row'>
        <div className='col-md-6 text-center'>
          <h1 style = { styles.h1Info } className='wow fadeInUp' data-wow-delay='0.3s' data-wow-duration="0.5s">Hi.</h1>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s">My name is Ou, I'm a student at KMUTT </p>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s">/ Front-End Developer in Thailand, I love taking pictures  </p>
          <p style = { styles.pInfo } className='wow fadeInUp' data-wow-delay='0.8s' data-wow-duration="0.3s"> / create  website and web for mobile devices</p>
        </div>
        <div className='col-md-6 text-center' style = { styles.imgInfo }>
          <img src='app\img\boy.png' className="img-responsive" className='wow fadeIn' data-wow-delay='1s' />
        </div>
      </div>
    </div>
  )
}

export default Info;
