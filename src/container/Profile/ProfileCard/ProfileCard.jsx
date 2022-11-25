/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */


import React from 'react'
import './ProfileCard.css'

const ProfileCard = (props) => {
    return (
        <div>
            <div className='profile'>
                <div className='profile_image'>
                    <img src={props.img} alt="" />
                </div>

                <div className='profile_name'>{props.name}</div>
                <div className='profile_description'>{props.description}</div>

                <div className='profile_skills'>
                    <div className='skill'>{props.skills}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileCard