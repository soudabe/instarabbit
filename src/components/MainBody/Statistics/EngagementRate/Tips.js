import React from 'react'
import Tip from './Tip'

const Tips = () => {
    return (
        <div className="proscons__container MuiGrid-container MuiGrid-justify-xs-center">
            <div className="proscons__item MuiGrid-item MuiGrid-grid-xs-12 MuiGrid-grid-sm-10 MuiGrid-grid-md-10 MuiGrid-grid-lg-6">
                <h3>Tips to Improve Your Engagement Rate </h3>
                <Tip tip="Use more hashtags" />
                <Tip tip="Bio can be improved" />
                <Tip tip="Not a Business Page" />
                <Tip tip="Longer Captions" />
                <Tip tip="Regular stories (Use stickers to engage followers)" />
                <Tip tip="High quality pictures" />
                <Tip tip="Relevant hashtags (maximum 8 hashtags)" />
                <Tip tip="Tag relevant people in the posts" />
                <Tip tip="Check your insights to know which time is the best get the most engagement" />
                <Tip tip="Check your insights to know the content your audience love to see from you" />
                <a href="https://instarabbit.co/instagram-engagement-guide" target="_blank" className="learnmore">Learn more</a>
            </div>
        </div>
    )
}

export default Tips