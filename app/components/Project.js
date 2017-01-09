import React, { PropTypes } from 'react'
import * as styles from '../styles'

function Project(props) {
    return (
        <div style={styles.ProjectStyle}>
            <div className='col-md-12 text-center'>
                <h1 style={styles.h1Project} className='wow fadeInUp' data-wow-delay='0.5s' data-wow-duration='0.3s'>
                    { props.title }
                </h1>
            </div>
            <div className='row'>
                <div className='col-md-6 text-center wow zoomIn' data-wow-delay='1s' data-wow-duration='0.3s'>
                    <figure>
                        <img src="app\img\wippo.png" alt="Thumb" width="400" height="300"/>
                        <figcaption>
                            <div>{ props.wip }</div>
                        </figcaption>
                    </figure>
                </div>
                <div className='col-md-6 text-center wow zoomIn' data-wow-delay='1.2s' data-wow-duration='0.3s'>
                  <figure>
                      <img src="app\img\sign.PNG" alt="Thumb" width="400" height="300"/>
                      <figcaption>
                          <div>{ props.sign }</div>
                      </figcaption>
                  </figure>
                </div>
            </div>
        </div>
    )
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  wip: PropTypes.string.isRequired,
  sign: PropTypes.string.isRequired
}

export default Project;
