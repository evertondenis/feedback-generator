import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  text-align: center;
`

export const Smithers = styled.img`
  align-self: flex-end;
`

export const Text = styled.p`
  font-size: 2em;
`

export const Button = styled.button`
  border: 0;
  background-color: tomato;
  color: #000;
  padding: 15px 20px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: papayawhip;
    transition: all .2s ease;
  }
`

export const Link = styled.a`
  position: absolute;
  padding: 10px;
  font-size: 1.4em;
  text-decoration: none;
  color: #000;

  &:hover {
    color: tomato;
  }
`