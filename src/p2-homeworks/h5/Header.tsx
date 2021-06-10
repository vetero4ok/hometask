import React from 'react'
import {NavLink} from 'react-router-dom'
import {PATH} from './Routes';

function Header() {
    return (
        <div>
            <span>
                <NavLink to={PATH.PRE_JUNIOR}>PreJunior</NavLink>
            </span>
            <span>
                <NavLink to={PATH.JUNIOR}>Junior</NavLink>
            </span>
            <span>
                <NavLink to={PATH.JUNIOR_PLUS}>Junior+</NavLink>
            </span>
        </div>
    )
}

export default Header
