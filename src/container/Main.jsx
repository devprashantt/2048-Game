import React from 'react'

import About from './About/About'
import Header from './Header/Header'
import Profile from './Profile/Profile'

import './Main.css'

const Main = () => {
    return (
        <div>
            <div className='main'>
                <Header />
                <About />
                <Profile />
            </div>
        </div>
    )
}

export default Main