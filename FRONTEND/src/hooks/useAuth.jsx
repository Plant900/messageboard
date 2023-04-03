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
      navigate('/')
    }
  }

  const login = async (email, password) => {
    const response = await axios.post('/api/login', { email, password })
    dispatch({ type: 'LOGIN', payload: response.data })
    if (response.data.user) {
      navigate('/')
    }
  }

  return { signup, login, isLoading }
}
