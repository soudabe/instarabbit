
import React from 'react'
import './engagementRate.scss'
import Rates from './Rates'
import Tips from './Tips'
import AllUserInfo from './AllUserInfo'

const EngagementRate = () => {
    return (
        <div className="statisticsLanding_ER MuiGrid-container">
            <Rates />

            <Tips />

            <AllUserInfo />
        </div>
    )
}

export default EngagementRate


