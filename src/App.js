import { h, Component } from 'preact'
import styled from 'preact-emotion'

const SomeComponent = styled('div')`
  display: flex;
  background-color: ${props => props.color};
`

const AnotherComponent = styled('h1')(
  {
    color: 'hotpink'
  },
  props => ({ flex: props.flex })
)

export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <SomeComponent color="#DA70D6">
          <AnotherComponent flex={1}>Jimmy Ganteng</AnotherComponent>
        </SomeComponent>
      </div>
    )
  }
}
