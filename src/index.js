import { h, render } from 'preact'
import 'preact/debug'

import App from './App'

const mountNode = document.getElementById('root')

render(<App />, mountNode, mountNode.lastChild)
