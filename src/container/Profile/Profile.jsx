import React from 'react'

import ProfileCard from './ProfileCard/ProfileCard'
import ProfileData from './ProfileData'

import './Profile.css'

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