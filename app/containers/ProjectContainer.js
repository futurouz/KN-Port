import React, { Component } from 'react'
import Project from '../components/Project'

class ProjectContainer extends Component  {
  constructor() {
    super()
    this.state = {
      title: 'PROJECT',
      wip: 'WIP CAMP#8 SIT KMUTT / FRONT-END',
      sign: 'SIGN UP SIT KMUTT / BACK-END'
    }
  }

  render() {
   return (
     <Project
      title = {this.state.title}
      wip = {this.state.wip}
      sign = {this.state.sign}
     />
   )
  }
}

export default ProjectContainer
