/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */

import React from 'react'
// eslint-disable-next-line import/no-unresolved
import './About.css'

const About = () => {
    return (
        <div>
            <p className='about_paragraph'>
                2048 is a single-player sliding block puzzle game designed by Italian web developer
                <strong> Gabriele Cirulli</strong>. The game objective is to slide numbered tiles on a grid to combine
                them to create a tile with the number 2048. However, one can continue to play the
                game after reaching the goal, creating tiles with larger numbers.
            </p>
        </div>
    )
}

export default About