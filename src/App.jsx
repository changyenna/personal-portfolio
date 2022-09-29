import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Welcome from './components/welcome/Welcome'
import Header from './components/header/Header'
import Experience from './components/experience/Experience'
import Portfolio  from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Scroll from './components/scroll'



const App = () => {

  return (
    <ChakraProvider>
        <Welcome /> 
        <Header />
        {/* <Scroll showBelow={900} /> */}
        <Portfolio />
        <Experience />
        <Footer />
    </ChakraProvider>

  )
}

export default App

