import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.instagram.com/mrgyaneshwerjha/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/gyaneshwer-jha-233871206/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/GyaneshwerJha" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials