import React from 'react'
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import { useAuth } from '../hooks/useAuth.jsx'
import { Link } from 'react-router-dom'
import {
  HeaderWrapper,
  NavList,
  NavItem,
  AboutTooltip,
} from './Header.styles.jsx'

function Header() {
  const { user } = useAuthContext()
  const { logout } = useAuth()

  return (
    <HeaderWrapper>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            {!user ? (
              <Link to="/login">Login</Link>
            ) : (
              <Link to="/" onClick={() => logout()}>
                Logout
              </Link>
            )}
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <AboutTooltip>
            <span>About</span>
            <div className="tooltip">
              This message app has a React frontend and uses Express with custom
              authentication middleware. User information is stored in a mongoDB
              database. Session IDs are stored in localStorage in order to keep
              users logged in through multiple sessions.
              <br />
              <br />
              Anonymous messages may be posted, but only registered users can
              read messages from other registered users. Registered users may
              also see anonymous messages.
            </div>
          </AboutTooltip>
        </ul>
      </nav>
    </HeaderWrapper>
  )
}

export default Header
