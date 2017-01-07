import React, { PropTypes } from 'react'
import * as styles from '../styles'

function Footer(props)  {
  return (
    <div style = { styles.footerStyle } >
      <div className='row'>
        <div className='col-md-8 col-md-offset-2 text-center'>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='https://www.facebook.com/kunanan.tassuwan' target='_blank' style = { styles.aFooter }> { props.facebook } </a></p>
          </div>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='https://twitter.com/Kunananz' target='_blank' style = { styles.aFooter }>{ props.twitter }</a></p>
          </div>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='#' target='_blank' style = { styles.aFooter }>{ props.instagram }</a></p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
            <p style= { styles.copyFooter }>{ props.copy }</p>
        </div>
      </div>
    </div>
  )
}


Footer.propTypes = {
  facebook: PropTypes.string.isRequired,
  twitter: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  copy: PropTypes.string.isRequired
}

export default Footer
