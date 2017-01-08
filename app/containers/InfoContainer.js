import React, { Component } from 'react'
import Info from '../components/Info'

class InfoContainer extends Component {
  constructor() {
    super()
    this.state = {
      hiTitle: 'Hi.',
      name: 'My name is Ou, I\'m a student at KMUTT',
      duty: '/ Front-End Developer in Thailand, I love taking pictures ',
      hobby: '/ create  website and web for mobile devices'
    }
  }

  render() {
    return (
      <Info
        hiTitle = {this.state.hiTitle}
        name = {this.state.name}
        duty = {this.state.duty}
        hobby = {this.state.hobby}
      />
    )
  }

}


export default InfoContainer
