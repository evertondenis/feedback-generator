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

export const Text = styled.textarea`
  border: 0;
  height: auto;
  background: transparent;
  font-size: 2.4em;
  outline: none;
  resize: none;
  overflow: auto;
  overflow: hidden;
`

export const ContainerButtons = styled.div`
  width: 224px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Button = styled.button`
  border-radius: 20px;
  overflow: hidden;
  border: 2px solid black;
  background: transparent;
  font-size: 1em;
  color: black;
  padding: 10px;
  cursor: pointer;
  transition: all .2s ease;

  &:hover {
    background-color: white;
    color: black;
  }
`

export const Link = styled.a`
  position: absolute;
  left: 10px;
  top: 10px;
  padding: 10px;
  font-size: 1.4em;
  text-decoration: none;
  color: #000;

  &:hover {
    color: tomato;
  }
`

export const AnswerStyled = styled.div`
  width: 200px;
  height: auto;
  margin: 40px auto;
  padding: 10px;
  border: 2px solid black;
  display: flex;

  p {
    margin: 0;
    padding: 0;
    text-align: left;
  }
`