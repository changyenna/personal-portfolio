import React from 'react'
import { Box } from '@chakra-ui/react'
import { Center, Square, Circle } from '@chakra-ui/react'
import IMG3 from '../../assets/hello-cute.gif'
import './welcome.css'


const Welcome = () => {
  return (
    <div>
        <header id="welcome">
          <div className="container welcome__container"> 
            <Box className="welcome__typewriter">
                <h4>Yenna says, "Hello World!"</h4>
            </Box>

          <a href="#header" className="welcome-cta">
            <div className='w-btn w-btn-primary'>
            <a className='welcome__wave' target = "_blank">👋</a>
            Wave Back
            </div>
          </a>
            
          </div>
        </header>
    </div>
  )
}

export default Welcome
