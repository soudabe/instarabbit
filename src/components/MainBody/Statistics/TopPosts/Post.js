
import React from 'react'

const Post = (props) => {

    return (
        <div className="topPost">
            <img src={props.src} alt="" />
            <div>
                <div>
                    <span>Likes</span>
                    <strong>{props.likes}</strong>
                </div>
                <div>
                    <span>Comments</span>
                    <strong>{props.comments}</strong>
                </div>
            </div>
            <div className="ER_section">
                <span>Engagement rate</span>
                <span>6.88%</span>
            </div>
        </div>
    )
}

export default Post