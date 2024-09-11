import styled, { css } from 'styled-components'

export const TextStyles = css`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;

  text-align: left;

  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 1px;
`

export const Wrapper = styled.div`
  width: 120ch;
  height: 500px;

  position: relative;
`

export const TextWindow = styled.textarea`
  width: inherit;
  height: 100%;

  overflow: scroll;

  margin: 0;
  border: none;
  padding: 10px;
  
  resize: none;

  ${TextStyles}

  &:focus {
    outline: none;
  }
`
export const BackText = styled.pre`
  margin: 0;
  position: absolute;
  top: 0;
  left: 0;

  width: inherit;
  height: 100%;

  overflow: hidden;

  padding: 10px;
  opacity: 0.5;

  pointer-events: none;

  ${TextStyles};
  color: #8d8d8d;
`
