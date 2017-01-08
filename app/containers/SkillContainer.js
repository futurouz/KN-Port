import React, { Component } from 'react'
import Skill from '../components/Skill'

class SkillContainer extends Component {
  constructor() {
    super()
    this.state = {
      title: 'SKILL.'
    }
  }
  render() {
    return (
      <Skill
        title = { this.state.title }
      />
    )
  }

}

export default SkillContainer
