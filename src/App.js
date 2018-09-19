import React, { Component, Fragment } from 'react'
import { answers } from './answers'
import './App.css'
import { Link, Container, Text, Button } from './styled'

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
      <Fragment>
        <Link href="https://github.com/evertondenis">
          GIT HUB
        </Link>
        <Container>
          <div>
            <h1>Deu branco na hora de dar aquele feedback?</h1>
            <Button onClick={this.randomAnswer}>
              GENERATE FEEDBACK
            </Button>
          </div>
          <div>
            <Text>
              {answer}
            </Text>
          </div>
        </Container>
      </Fragment>
    )
  }
}

export default App
