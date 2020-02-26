import React from 'react'
import Rate from './Rate'

const Rates = () => {
    return (
        <div className="statisticsLanding_ER_header MuiGrid-container MuiGrid-justify-xs-center">
            <Rate title="Engagement rate" rate="3.12 %" />
            <Rate title="Quality rate" rate="75/100" />
        </div>
    )
}

export default Rates