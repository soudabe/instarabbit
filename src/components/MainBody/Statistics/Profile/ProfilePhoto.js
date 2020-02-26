
import React, { useState, useEffect } from 'react'
import axios from 'axios'

const ProfilePhoto = () => {

    const [profilePhoto, profilePhotoSet] = useState('')
    const [fullName, fullNameSet] = useState('')
    const [username, usernameSet] = useState('')

    useEffect(() => {
        axios.get('https://www.instagram.com/cristiano/?__a=1')
            .then((res) => {
                profilePhotoSet(res.data.graphql.user.profile_pic_url_hd)
                fullNameSet(res.data.graphql.user.full_name)
                usernameSet(res.data.graphql.user.username)
            })
            .catch(e => console.log(e))
    }, [])

    return (
        <div className="statisticsLanding_userInfo_header_userInfo MuiGrid-item MuiGrid-grid-xs-12">
            <div className="statisticsLanding_userInfo_header_userPic MuiGrid-item MuiGrid-grid-xs-5">
                <img src={profilePhoto} alt="" />
            </div>
            <h2>{fullName}</h2>
            <span>@{username}</span>
        </div>
    )
}

export default ProfilePhoto