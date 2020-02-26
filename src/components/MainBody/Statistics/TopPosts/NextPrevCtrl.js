import React from 'react'

const NextPrevCtrl = (props) => {
    return (
        <div className="jss158">
            <div className="jss159" onClick={props.clickHandler}>›</div>
            <div className="jss160" onClick={props.clickHandler}>‹</div>
        </div>
    )
}

export default NextPrevCtrl