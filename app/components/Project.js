import React from 'react'
import * as styles from '../styles'

function Project() {
    return (
        <div style={styles.ProjectStyle}>
            <div className='col-md-12 text-center'>
                <h1 style={styles.h1Project} className='wow fadeInUp' data-wow-delay='0.5s' data-wow-duration='0.3s'>
                    <b>PRO</b>JECT
                </h1>
            </div>
            <div className='row'>
                <div className='col-md-6 text-center wow zoomIn' data-wow-delay='1s' data-wow-duration='0.3s'>
                    <figure>
                        <img src="app\img\wippo.png" alt="Thumb" width="400" height="300"/>
                        <figcaption>
                            <div>WIP CAMP#8 SIT KMUTT / FRONT-END</div>
                        </figcaption>
                    </figure>
                </div>
                <div className='col-md-6 text-center wow zoomIn' data-wow-delay='1.2s' data-wow-duration='0.3s'>
                  <figure>
                      <img src="app\img\sign.PNG" alt="Thumb" width="400" height="300"/>
                      <figcaption>
                          <div>SIGN UP SIT KMUTT / BACK-END</div>
                      </figcaption>
                  </figure>
                </div>
            </div>
        </div>
    )
}

export default Project;
