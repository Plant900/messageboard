import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f2f2f2;
`

export const WelcomeContainer = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

export const MessageList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  list-style: none;
  margin-top: 10px;
  padding: 0;
  width: 100%;
`

export const MessageListItem = styled.li`
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
  padding: 10px;
  width: 50%;
`

export const MessageText = styled.strong`
  font-size: 16px;
  margin-right: 10px;
`

export const MessageUser = styled.span`
  color: #777;
  font-size: 14px;
  font-style: italic;
`
