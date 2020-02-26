import React from 'react'
import BackImages from './Profile/BackImages'
import ProfilePhoto from './Profile/ProfilePhoto'
import './statistics.scss'
import EngagementRate from './EngagementRate/EngagementRate'
import TopPosts from './TopPosts/TopPosts'

const Statistics = () => {
    return (
        <div className="MuiGrid-item MuiGrid-grid-xs-12">
            <div className="statisticsLanding_userInfo">
                <div className="statisticsLanding_userInfo_header MuiGrid-container">
                    <BackImages />
                    <ProfilePhoto />
                </div>
                <EngagementRate />
                <TopPosts />
            </div>
        </div>
    )
}

export default Statistics