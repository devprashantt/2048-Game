/* eslint-disable prettier/prettier */
/* eslint-disable arrow-body-style */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react'
import ProfileCard from './ProfileCard/ProfileCard'
import './Profile.css'
import ProfileData from './ProfileData'

const Profile = () => {
    return (
        <div className='team'>
            {
                ProfileData.map((item) => {
                    return (
                        <ProfileCard
                            img={item.img}
                            name={item.name}
                            description={item.description}
                            skills={item.skills}
                        />
                    )
                })
            }
        </div>
    )
}

export default Profile