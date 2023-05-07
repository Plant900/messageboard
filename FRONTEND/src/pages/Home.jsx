import { useEffect, useState } from 'react'
import axios from 'axios'
import { useAuthContext } from '../hooks/useAuthContext.jsx'
import { useAuth } from '../hooks/useAuth.jsx'
import Header from '../components/Header.jsx'
import MessageForm from '../components/MessageForm.jsx'
import {
  AppContainer,
  WelcomeContainer,
  MessageList,
  MessageListItem,
  MessageText,
  MessageUser,
} from './Home.styles.jsx'

export const Home = () => {
  const [messages, setMessages] = useState([])
  const { user } = useAuthContext()
  const { loginWithSessionID, isLoading } = useAuth()

  const getMessages = async () => {
    const response = await axios.get('/api/messages', {
      headers: {
        Authorization: `Bearer ${user?.sessionID}`,
      },
    })
    setMessages(response.data)
  }

  useEffect(() => {
    getMessages()
  }, [user])

  useEffect(() => {
    if (user) {
      console.log(
        'User logged in. Will not try to log in with sessionID: ',
        user
      )
      return
    }

    const sessionID = localStorage.getItem('sessionID')
    if (sessionID) {
      loginWithSessionID(sessionID)
    }
  }, [])

  return (
    <AppContainer>
      <Header />
      {user ? (
        <WelcomeContainer>Welcome, {user.email}</WelcomeContainer>
      ) : (
        <></>
      )}
      <MessageForm getMessages={getMessages} />
      <MessageList>
        {messages.map((message) => (
          <MessageListItem key={message._id}>
            <MessageText>{message.text}</MessageText>
            {message.user && (
              <MessageUser>posted by {message.user}</MessageUser>
            )}
          </MessageListItem>
        ))}
      </MessageList>
    </AppContainer>
  )
}
