import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from './useAuthContext.jsx'
import axios from 'axios'

export const useAuth = () => {
  const [isLoading, setIsLoading] = useState(null)
  const navigate = useNavigate()
  const { dispatch } = useAuthContext()

  const signup = async (email, password) => {
    const response = await axios.post('/api/signup', { email, password })
    dispatch({ type: 'LOGIN', payload: response.data })
    if (response.data.user) {
      localStorage.setItem('sessionID', response.data.user.sessionID)
      navigate('/')
    }
  }

  const login = async (email, password) => {
    const response = await axios.post('/api/login', { email, password })
    dispatch({ type: 'LOGIN', payload: response.data })
    if (response.data.user) {
      localStorage.setItem('sessionID', response.data.user.sessionID)
      navigate('/')
    }
  }

  const loginWithSessionID = async (sessionID) => {
    const response = await axios.post('/api/loginWithSessionID', { sessionID })
    dispatch({ type: 'LOGIN', payload: response.data })
    if (response.data.user) {
      navigate('/')
    }
  }

  const logout = () => {
    dispatch({ type: 'LOGOUT' })
    localStorage.removeItem('sessionID')
    navigate('/')
  }

  return { signup, login, loginWithSessionID, logout, isLoading }
}
