import React from 'react'
import CoverContainer from '../containers/CoverContainer'
import Info from './Info'
import Skill from './Skill'
import Project from './Project'
import FooterContainer from '../containers/FooterContainer'


function Home(props) {
  return (
    <div>
      <CoverContainer title = { props.title } subTitle = { props.subTitle } />
      <Info />
      <Skill />
      <Project />
      <FooterContainer facebook = {props.facebook} twitter = {props.twitter} instagram = {props.instagram} copy = {props.copy} />
    </div>
  )
}

export default Home;
