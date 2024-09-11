import {useCodeDisplay} from '../utils/useCodeDisplay'
import * as Styled from './styled'
import {useEffect, useMemo, useRef, useState} from 'react'

const TypeComponent = () => {
  const {codeMap} = useCodeDisplay()
  const filesContentList = [...codeMap.values()]
  const randomCode = useMemo(() => filesContentList[Math.floor(Math.random() * filesContentList.length)], [codeMap])

  const [errorIndex, setErrorIndex] = useState<number | null>(null)
  const contentRef = useRef<HTMLTextAreaElement>(null)
  
  const verifyInput = (symbol: string | null, index: number) => {
    if (!!errorIndex && index === errorIndex - 1 && !symbol) {
      return setErrorIndex(null)
    }

    if (!symbol || !!errorIndex) return

    if (randomCode[index] !== symbol) {
      const selection = window.getSelection()
      const range = selection?.getRangeAt(0)
      console.log(range)
      // const rect = range?.getClientRects()[0]
      // console.log(rect)

      setErrorIndex(index)
    }
  }

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    let newVal = e.currentTarget.value
    const cursorPosition = e.currentTarget.selectionStart || 0

    verifyInput((e.nativeEvent as InputEvent).data, cursorPosition - 1)
    if (randomCode.slice(cursorPosition, cursorPosition + 2) === '  ') {
      e.currentTarget.value = newVal + '  '
      e.currentTarget.selectionStart = cursorPosition + 2
      e.currentTarget.selectionEnd = cursorPosition + 2
    }
  }

  return (
    <Styled.Wrapper>
      <Styled.TextWindow ref={contentRef} onInput={handleInput} spellCheck={false} cols={120}/>
      <Styled.BackText>{randomCode}</Styled.BackText>
    </Styled.Wrapper>
  )
}

export default TypeComponent
