/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */

import React from 'react'
import { Link } from 'react-router-dom'


import logo2048 from "../../assets/2048game.png"
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div className='header_left'>
                <div className='header_left-heading'>Project 2048 AL/ML</div>
                <div className='header_left-subheading'>Using AI/ML to beat Game 2048</div>
                <div className='header_left-paragraph'>
                    The game was written by Italian web developer
                    Gabriele Cirulli and published on GitHub.
                </div>
                <div className='header_left-buttons'>
                    <div className='button'>
                        <a href="https://devprashantt.github.io/2048-AI/">
                            Play AI
                        </a>
                    </div>
                    <Link to='/player' className='link'><div className='button'>Play</div></Link>
                </div>
            </div>
            <div className='header_right'>
                <img src={logo2048} alt="2048" />
            </div>
        </div>
    )
}

export default Header