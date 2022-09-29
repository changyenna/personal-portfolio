import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/stair-pic.jpg'
import HeaderSocial from './HeaderSocials'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'

const Header = () => {
  return (

    <section id='header'>
      <div className = "container header__container">
        <Box className="window">
        <ul>
        <li><a class="active" href="#welcome">Welcome</a></li>
          <li><a href="#header">About</a></li>
          <li><a href="#portfolio">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
        <HStack className = "tab-toggle">

          <Box className='minimize'>
            <div className='rec'></div>
          </Box>
          <Box className='full'>
            <div className='square'></div>
          </Box>
          <Box className='close'>
            <div className='x1'></div>
            <div className='x2'></div>
          </Box>
        </HStack>
      </Box>
        
      <Box className="bookmarks"></Box>

      <Box className='main-box'></Box>

      <VStack>
          <HStack>
            <Box className="header__nametag">
              <h2>Hello, my name is</h2>
              <h1>Yenna Chang</h1>
              <h2>Psychology + Computer Science Student @ UCR</h2>
              <CTA />
            </Box>


            <Box className="header__img">
              <img src = {ME} alt = "me" />
            </Box>
            
          </HStack>
            <Box className = "header__bio">
                <h1 className='sub-title'>About Me</h1>
                <h2>While studying psychology at UCR, I decided to pursue
                  a minor in computer science and have spent the past two years diligently developing my skills in various
                  programming languages. I've always been the kind of person who is passionate about making 
                  creative ideas come to life and have found a love for building projects with my colleagues. 
                 My goal is to utilize both psychology and computer science to build projects that benefit the lives of others. 
                  {/* When i'm not coding, I enjoy discovering new music, skiing, and building keyboards!  */}
                </h2>
              </Box>
      </VStack>
        {/* <HeaderSocial/> */}
        <a href="#contact" className= "scroll__down">Scroll Down</a>


        <Box className='bottom-bar'>
          <Box className='bottom-scroll'></Box>
          <div className='l-arrow'></div>
          <div className='r-arrow'></div>
        </Box>

        <Box className='right-bar'>
          <Box className='right-scroll'>
          </Box>
          <div className="corner"></div>
          <div className='u-arrow'></div>
          <div className='d-arrow'></div>
        </Box>
      </div>
  </section>

  )
}

export default Header
