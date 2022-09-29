import React from 'react'
import './portfolio.css'
import {SiDevpost} from 'react-icons/si'
import {FaGithubAlt} from 'react-icons/fa'
import {FaRegHandPointRight} from 'react-icons/fa'
import IMG1 from '../../assets/spotify.ico'
import IMG2 from '../../assets/taskicon.ico'
import IMG3 from '../../assets/mentoring.png'
import { Stack, HStack, VStack } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h1 className="portfolio__header">My Recent Work</h1>
      <div className="container portfolio__container">
        <article className = 'portfolio__item'>
          <HStack spacing='20px' className="project__header">
            <Box className="portfolio__item-image"><img src={IMG1} alt="" /></Box>
            <Box className="project__title">Songnality</Box>
          </HStack>
          <h5>Songnality predicts the user's animal crossing character based on the user's song preferences. 
            Using Spotify's API, our program allows the user to search for songs and then matches the user to a character
            based on audio metric features that are given personalities.</h5>
          <h3>Awards</h3>
          <ul>
            <li>2nd Place Winner @ Rose Hack 2022</li>
          </ul>
          <h3>Skills</h3>
          <ul>
            <li>HTML/CSS</li>
            <li>GitHub workflow</li>
          </ul> 
          <div className="portfolio__item-cta">
            <a href="https://devpost.com/software/songnality" className='effect effect-2' target = "_blank">Explore</a>

          </div>
        </article>

        <article className = 'portfolio__item'>
         <HStack spacing='20px' className="project__header">
            <Box className="portfolio__item-image"><img src={IMG3} alt="" /></Box>
            <Box className="project__title">Ment-To-Be</Box>
          </HStack>
          <h5>Built with 3 other colleagues a website that allows students and professionals in the computer science community 
            to create mentee-mentor relationships with each other. It features a matching system, a chatroom, and an interactive profile dashboard. </h5>
          <h3>Tools</h3>
          <ul>
            <li>MongoDB</li>
            <li>ChakraUI</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>React.js</li>
          </ul>
          <div className="portfolio__item-cta">
          <a href="https://github.com/changyenna/Ment-To-be" className='effect effect-2' target = "_blank">Explore</a>
          </div>
        </article>

        <article className = 'portfolio__item'>
         <HStack spacing='20px' className="project__header">
            <Box className="portfolio__item-image"><img src={IMG2} alt="" /></Box>
            <Box className="project__title">Task Manager</Box>
          </HStack>
          <h5>Along with 4 other colleagues, this task manager was created in hopes to be a useful productivity tool for students
            to visualize their tasks in the form of a comprehensive todo list. It features a menu of editing options and a sort tool by date, priority, or tag. </h5>
          <h3>Tools</h3>
          <ul>
            <li>Valgrind</li>
            <li>Google Testing (CI)</li>
          </ul>
          <h3>Languages</h3>
          <ul>
            <li>C++</li>
          </ul>
          <div className="portfolio__item-cta">
          <a href="https://github.com/changyenna/Task-Manager" className='effect effect-2' target = "_blank">Explore</a>
          </div>
        </article>
      </div>
    </section>
    
  )
}

export default Portfolio