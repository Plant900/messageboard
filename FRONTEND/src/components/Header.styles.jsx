import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50px;
  background-color: #f8f8f8;
  width: 100%;

  ul {
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 600px;
    width: 100%;
    margin: 0;
    padding: 0;
    list-style-type: none;

    li {
      margin: 0 10px;
    }

    a {
      color: #000;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
`

export const NavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: space-between;
  width: 300px;
`

export const NavItem = styled.li`
  & > a {
    color: #333;
    text-decoration: none;
    font-weight: bold;
    transition: color 0.2s ease-in-out;

    &:hover {
      color: #666;
    }
  }
`
