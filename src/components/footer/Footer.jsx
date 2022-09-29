import React from 'react'
import './footer.css'
import {ImLinkedin} from 'react-icons/im'
import {FaGithubAlt} from 'react-icons/fa'
import {FaSpotify} from 'react-icons/fa'


const Footer = () => {
  return (
      <footer>
        <div className='footer__socials'>
          <a href="https://www.linkedin.com/in/yenna-chang/" target = "_blank"><ImLinkedin/></a>
          <a href="https://github.com/changyenna" target = "_blank"><FaGithubAlt/></a>
          <a href="https://open.spotify.com/user/ngudrakijnemftbwbqgmk6fjb?si=81db9039d1a542ad" target = "_blank"><FaSpotify/></a>
        </div>
      </footer>
  )
}

export default Footer