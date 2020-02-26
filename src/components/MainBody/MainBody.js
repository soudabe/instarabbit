import React from 'react'

import './mainBody.scss'
import MainInput from './MainInput/MainInput'
import Statistics from './Statistics/Statistics'

const MainBody = () => {
    return (
        <div className="statisticsLanding MuiGrid-container">
            <div className="MuiGrid-root statisticsLanding_header MuiGrid-container MuiGrid-justify-xs-center">

                <MainInput />
            </div>
            <Statistics />
        </div>
    )
}

export default MainBody