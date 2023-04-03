import styled from 'styled-components'

export const FormContainer = styled.form`
  display: flex;
  align-items: center;
  justify-content: center; // centers horizontally
  margin-top: 20px;
  width: 33.33%;
`

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc; // adds a 1px border with a light gray color
  border-radius: 5px;
  margin-right: 10px;
  flex: 1;
`

export const Button = styled.button`
  padding: 10px;
  background-color: #4caf50;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`
