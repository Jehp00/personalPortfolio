import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { FiTwitter } from 'react-icons/fi'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href='https://www.linkedin.com/in/juan-esteban-hernandez-pedraza-254b71234' target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/Jehp00" target="_blank" rel="noreferrer"><BsGithub/></a>
      <a href="https://twitter.com/0110Juanes?t=zVQP_NQVayj4JzjPc0OdQQ&s=09" target="_blank" rel="noreferrer"><FiTwitter/></a>
    </div>
  )
}

export default HeaderSocials