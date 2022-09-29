import React from 'react'
import './experience.css'
import { Box, HStack, VStack } from '@chakra-ui/react'

const Experience = () => {
  return (
    <section id='experience'>
      
      <div className = "container experience__container">
        <div class="scoop1"></div>
        <div class="scoop2"></div>
        <div class="scoop3"></div>
        <div class="scoop4">
          <Box className="scoop4-top"></Box>
          <Box className="scoop4-bottom"></Box>
          <Box className="scoop4-left"></Box>
          <Box className="scoop4-right"></Box>
          <div className='scoop-dot1'></div>
          <div className='scoop-dot2'></div>
          <h1><i class="fa-solid fa-star"></i>Experience<i class="fa-solid fa-star"></i></h1>
          <Box className='resume-content'>
            <h3>Current</h3>
              <ul>
                <li><strong>Full-time Psychology and Computer Science Student @ UCR</strong></li>
                <li><strong>College of Humanities, Arts, and Social Sciences Peer Educator @ UCR</strong></li>
              </ul> 
            <h3>Past</h3>
            <ul>
              <li>
              <strong>Treatment Coordinator & Hiring Manager @ Smile Creator Dentistry </strong> 
              <u>- Leveraging insurance and financial options amongst 20+ patients weekly, 
                managing hygiene schedules, and maintaining optimal staffing levels by initiating recruitment</u>
              </li>
              <li>
              <strong>Vice President Panhellenic Delegate @ Alpha Chi Omega Iota Xi Chapter</strong> 
              <u>- Representing the university chapter at Panhellenic weekly meetings and
                assisting the chapter to ensure philanthropic goals are met, 
                providing consistent donations to organizations supporting survivors of domestic violence</u>
              </li>
            </ul> 
          </Box>
        </div>
      </div>  
    </section>
  )
}

export default Experience

// {/* <section id='experience' className = "container experience__container">
// <Box className="window">
//   <ul>
//   <li><a class="active" href="#welcome">Welcome</a></li>
//     <li><a href="#header">About</a></li>
//     <li><a href="#portfolio">Projects</a></li>
//     <li><a href="#experience">Experience</a></li>
//   </ul>
//   <HStack className = "tab-toggle">

//     <Box className='minimize'>
//       <div className='rec'></div>
//     </Box>
//     <Box className='full'>
//       <div className='square'></div>
//     </Box>
//     <Box className='close'>
//       <div className='x1'></div>
//       <div className='x2'></div>
//     </Box>
//   </HStack>
// </Box>
  
// <Box className="bookmarks"></Box>

// <Box className='bottom-bar'>
//   <Box className='bottom-scroll'></Box>
//   <div className='l-arrow'></div>
//   <div className='r-arrow'></div>
// </Box>

// <Box className='right-bar'>
//   <Box className='right-scroll'>
//   </Box>
//   <div className="corner"></div>
//   <div className='u-arrow'></div>
//   <div className='d-arrow'></div>
// </Box>


// </section> */}