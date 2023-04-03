import React from 'react'
import { Link } from 'react-router-dom'
import { HeaderWrapper, NavList, NavItem } from './Header.styles.jsx'

function Header() {
  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
