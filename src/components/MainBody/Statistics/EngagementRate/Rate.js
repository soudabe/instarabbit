import React from 'react'

const Rate = (props) => {
    return (
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-6 MuiGrid-grid-lg-4">
            <span>{props.title}</span>
            <strong>{props.rate}</strong>
        </div>
    )
}

export default Rate