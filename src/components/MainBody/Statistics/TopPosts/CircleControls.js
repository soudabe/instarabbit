import React from 'react'

const CircleControls = (props) => {

    let class1 = ''
    let class2 = ''
    if (props.ariaHidden) {
        class1 = "jss163"
        class2 = "jss163 jss164"
    } else {
        class1 = "jss163 jss164"
        class2 = "jss163"
    }

    return (
        <div className="MuiBox-root jss162">
            <div className={class1} onClick={props.clickHandler}></div>
            <div className={class2} onClick={props.clickHandler}></div>
        </div>
    )
}

export default CircleControls