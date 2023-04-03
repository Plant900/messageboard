import React, { useState } from 'react'
import axios from 'axios'
import { FormContainer, Input, Button } from './MessageForm.styles.jsx'
import { useAuthContext } from '../hooks/useAuthContext.jsx'

function MessageForm(props) {
  const getMessages = props.getMessages
  const [text, setText] = useState('')
  const { user } = useAuthContext()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const response = await axios.post(
      '/api/newMessage',
      { text },
      {
        headers: {
          Authorization: `Bearer ${user?.sessionID}`,
        },
      }
    )
    getMessages()
  }

  return (
    <FormContainer onSubmit={handleSubmit}>
      <Input
        type="text"
        value={text}
        onChange={(event) => setText(event.target.value)}
      />
      <Button type="submit">Send</Button>
    </FormContainer>
  )
}

export default MessageForm
