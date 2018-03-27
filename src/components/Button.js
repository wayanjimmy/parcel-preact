import styled, { css } from 'preact-emotion'

const base = props => css`
  align-items: center;
  border: 1px solid transparent;
  border-radius: 3px;
  display: inline-flex;
  font-size: 1rem;
  height: 2.25em;
  line-height: 1.5;
  padding-bottom: calc(0.375em - 1px);
  padding-top: calc(0.375em - 1px);
  position: relative;
  vertical-align: top;
  user-select: none;
  cursor: pointer;
  justify-content: center;
  padding-left: 0.75em;
  padding-right: 0.75em;
  text-align: center;
  white-space: nowrap;
  ${props.primary && 'background-color: #00d1b2;'};
  ${props.primary && 'color: #fff;'};
`

const Button = styled('button')(base)

export default Button
