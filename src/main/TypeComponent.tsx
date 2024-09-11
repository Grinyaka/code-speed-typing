import styled, {css} from 'styled-components'
import {useCodeDisplay} from '../utils/useCodeDisplay'
import {useMemo, useRef, useState} from 'react'

// make styles as in usual code editor
const TextStyles = css`
  font-family: 'Courier New', Courier, monospace;
  font-size: 1rem;

  text-align: left;

  line-height: 1.5;
  letter-spacing: 1px;
  word-spacing: 1px;
`

const Wrapper = styled.div`
  width: 120ch;
  height: 500px;

  position: relative;
`

const TextWindow = styled.textarea`
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
const BackText = styled.pre`
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
const TypeComponent = () => {
  const {codeMap} = useCodeDisplay()
  const filesContentList = [...codeMap.values()]
  const randomCode = filesContentList[Math.floor(Math.random() * filesContentList.length)]

  const mainComponentRef = useRef<HTMLTextAreaElement>(null)
  const backgroundRef = useRef<HTMLPreElement>(null)
  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    
    let newVal = e.currentTarget.value
    // check if randomCode[cursorPosition] is tab and if yes, add tab to current value
    const cursorPosition = mainComponentRef.current?.selectionStart || 0
    if (randomCode.slice(cursorPosition, cursorPosition + 2) === '  ') {
      e.currentTarget.value = newVal + '  '
      e.currentTarget.selectionStart = cursorPosition + 2
      e.currentTarget.selectionEnd = cursorPosition + 2
    }


    
  }

  return (
    <Wrapper>
      <TextWindow ref={mainComponentRef} onInput={handleInput} />
      <BackText ref={backgroundRef}>{randomCode}</BackText>
    </Wrapper>
  )
}

export default TypeComponent
