import React, { Component } from 'react'
import { answers } from './answers'
import './App.css'
import { Container, Text, Button, Smithers } from './styled'
import smithers from './core/assets/images/smithers1.jpg'

class App extends Component {

  state = {
    answer: "Let's Go!",
  }

  randomAnswer = () => {
    const total = answers.length
    const feedback = Math.floor(Math.random() * total)
    const answer = answers[feedback]
    this.setState({ answer })
  }

  render() {
    const { answer } = this.state

    return (
      <Container>
        <div>
          <Text>
            {answer}
          </Text>
          <Button onClick={this.randomAnswer}>
            GENERATE FEEDBACK
          </Button>
        </div>
          {/* <Smithers src={smithers} alt="smithers" /> */}
      </Container>
    )
  }
}

export default App
