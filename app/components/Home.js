import React from 'react'
import CoverContainer from '../containers/CoverContainer'
import InfoContainer from '../containers/InfoContainer'
import SkillContainer from '../containers/SkillContainer'
import ProjectContainer from '../containers/ProjectContainer'
import FooterContainer from '../containers/FooterContainer'


function Home(props) {
  return (
    <div>
      <CoverContainer title = { props.title } subTitle = { props.subTitle } />
      <InfoContainer  hiTitle = { props.hiTitle } name = { props.name } duty = { props.duty } hobby = { props.hobby } />
      <SkillContainer title = { props.header } />
      <ProjectContainer title = {props.title } wip = { props.wip } sign = { props.sign } /> 
      <FooterContainer facebook = {props.facebook} twitter = {props.twitter} instagram = {props.instagram} copy = {props.copy} />
    </div>
  )
}

export default Home;
