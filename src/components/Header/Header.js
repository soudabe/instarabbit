import React from 'react'
import { ReactComponent as Logo } from '../../assets/images/logo.svg'

import './header.scss'
import ButtonHeader from './ButtonHeader/ButtonHeader'

const Header = () => {
    return (
        <div className="MuiGrid-root statisticsLanding_header_top MuiGrid-item MuiGrid-grid-xs-12">
            <div className="header_top_inner">
                <a href="/">
                    <Logo alt="Instarabbit logo" />
                </a>
                <div className="jss1">
                    <ButtonHeader href="#" buttonClass="jss2" >Login</ButtonHeader>
                    <ButtonHeader href="#" buttonClass="jss3" >Try for Free</ButtonHeader>
                </div>
            </div>
        </div>
    )
}

export default Header