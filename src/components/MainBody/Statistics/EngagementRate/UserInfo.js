import React from 'react'

const UserInfo = (props) => {
    return (
        <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 MuiGrid-grid-lg-2">
            <span>{props.title}</span>
            <strong>{props.count}</strong>
        </div>
    )
}

export default UserInfo