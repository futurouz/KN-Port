import React from 'react'
import * as styles from '../styles'

function Skill() {
  return (
    <div style= {styles.SkillStyle}>
      <div className='row'>
        <div className='col-md-12 text-center'>
        <h1 style={ styles.h1Skill } className='wow fadeInUp' data-wow-duration='0.6s' data-wow-delay='0.5s'><b>SKILL.</b></h1>


        <div className='wow fadeInUp' data-wow-duration='0.6s' data-wow-delay='0.7s'>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
            <p>HTML/CSS</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="85"></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
            <p>JAVASCRIPT</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="30"></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
            <p>JAVA</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="65"></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
            <p>PHP</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="15"></div>
              </div>
            </div>
          </div>
          <div className='row'>
            <div className='col-md-4 col-md-offset-4'>
          <p>REACT.JS</p>
              <div className="progress">
                <div className="progress-bar" role="progressbar" data-transitiongoal="25"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Skill
