import React, { Component } from 'react'
import Footer from '../components/Footer'

class FooterContainer extends Component {
  constructor() {
    super()
    this.state = {
      facebook: 'FACEBOOK',
      twitter: 'TWITTER',
      instagram: 'INSTAGRAM',
      copy: '©COPYRIGHT BY KUNANAN'
    }
  }

  render() {
    return (
      <Footer
        facebook = {this.state.facebook}
        twitter = {this.state.twitter}
        instagram = {this.state.instagram}
        copy = {this.state.copy}  />
    )
  }

}

export default FooterContainer
