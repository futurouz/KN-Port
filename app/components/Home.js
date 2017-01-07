import React from 'react'
import CoverContainer from '../containers/CoverContainer'
import Info from './Info'
import Skill from './Skill'
import Project from './Project'
import Footer from './Footer'


function Home(props) {
  return (
    <div>
      <CoverContainer title = { props.title } subTitle = { props.subTitle } />
      <Info />
      <Skill />
      <Project />
      <Footer />
    </div>
  )
}

export default Home;
