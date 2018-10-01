import React, { Component, Fragment } from 'react'
import { answers } from './answers'
import { AnswerStyled, Link, Container, Text, ContainerButtons, Button } from './styled'

class App extends Component {

  state = {
    answer: 'Deu branco na hora de dar aquele feedback?',
  }

  randomAnswer = () => {
    const total = answers.length
    const feedback = Math.floor(Math.random() * total)
    const answer = answers[feedback]
    this.setState({ answer })
  }

  copyFeedback = () => {
    const feedback = document.getElementById("feedback")
    feedback.select()
    document.execCommand('copy')
  }

  render() {
    const { answer } = this.state

    return (
      <Fragment>
        <Link href="https://github.com/evertondenis/feedback-generator">
          GIT HUB
        </Link>
        <Container>
          <div>
            <AnswerStyled>
              <Text id="feedback"
                onChange={() => null}
                value={answer}
                rows="7"
              />
            </AnswerStyled>
          </div>
          <ContainerButtons>
            <Button onClick={this.randomAnswer}>
              GERAR FEEDBACK
            </Button>
            <Button onClick={this.copyFeedback}>
              COPIAR
            </Button>
          </ContainerButtons>
        </Container>
      </Fragment>
    )
  }
}

export default App
