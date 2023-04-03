import { useEffect, useState } from 'react'
import { useAuth } from '../hooks/useAuth.jsx'
import Header from '../components/Header.jsx'

export const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { signup, isLoading } = useAuth()

  const handleSubmit = async (e) => {
    e.preventDefault()
    await signup(email, password)
  }

  return (
    <div>
      <Header />
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}
