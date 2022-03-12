import React from 'react'
import {BsLinkedin , BsGithub, BsInstagram} from 'react-icons/bs'

function HeaderSocial() {
  return (
    <div className='header__socials'>
        <a href="http://linkedin.com" target='_blank'> <BsLinkedin/> </a>
        <a href="http://github.com"  target='_blank'> <BsGithub/> </a>
        <a href="http://instagram.com" target='_blank'> <BsInstagram/></a>
    </div>
  )
}

export default HeaderSocial