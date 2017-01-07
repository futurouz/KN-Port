import React from 'react'
import * as styles from '../styles'

function Footer()  {
  return (
    <div style = { styles.footerStyle } >
      <div className='row'>
        <div className='col-md-8 col-md-offset-2 text-center'>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='https://www.facebook.com/kunanan.tassuwan' target='_blank' style = { styles.aFooter }>Facebook</a></p>
          </div>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='https://twitter.com/Kunananz' target='_blank' style = { styles.aFooter }>Twitter</a></p>
          </div>
          <div className='col-md-4'>
            <p style = { styles.pFooter }><a href='#' target='_blank' style = { styles.aFooter }>Instagram</a></p>
          </div>
        </div>
      </div>
      <div className='row'>
        <div className='col-md-12 text-center'>
            <p style= { styles.copyFooter }>&copy;Copyright by Kunanan</p>
        </div>
      </div>
    </div>
  )
}


export default Footer
