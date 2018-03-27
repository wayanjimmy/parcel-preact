import { h, Component } from 'preact'
import styled from 'preact-emotion'

import Button from './components/Button'

const H1 = styled('h1')`
  color: hotpink;
`

export default class App extends Component {
  render() {
    return (
      <div>
        <H1>Lengeh</H1>
        <Button primary>Test</Button>
      </div>
    )
  }
}
