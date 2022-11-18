import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub, FaKeyboard } from 'react-icons/fa'
import { FiDribbble } from 'react-icons/fi'

const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://github.com/matthewmics" target="_blank"><FaGithub /></a>
            <a href="https://data.typeracer.com/misc/badge?user=micsmatthew77" target="_blank"><FaKeyboard /></a>
            {/* <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://dribble.com" target="_blank"><FiDribbble /></a> */}
        </div>
    )
}

export default HeaderSocials