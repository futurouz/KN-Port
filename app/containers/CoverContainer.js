import React, { Component } from 'react'
import Cover from '../components/Cover'

class CoverContainer extends Component {

  constructor() {
    super()
    this.state = {
      title: 'KN - PORT',
      subTitle: 'Student & a little Front-End Developer'
    }
  }
  render() {
    return (
      <Cover
        title = {this.state.title}
        subTitle = {this.state.subTitle} />
    )
  }
}

export default CoverContainer
