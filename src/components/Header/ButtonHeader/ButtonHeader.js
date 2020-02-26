import React from 'react'
import './buttonHeader.scss'

const ButtonHeader = (props) => {
    let classes = ["MuiButton-root", "MuiButton-text"]
    props.buttonClass === "jss3" ? classes.push("jss3") : classes.push("jss2")
    return (
        <a href={props.href} target="__blank">
            <button className={classes.join(' ')} tabIndex="0" type="button">
                <span className="MuiButton-label jss4">{props.children}</span>
                <span className="MuiTouchRipple-root"></span>
            </button>
        </a>
    )
}
export default ButtonHeader