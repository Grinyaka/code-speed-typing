import {useEffect, useState} from 'react'

const separateCode = (code: string) => {
  const codeMap = new Map<string, string>()

  let currentCode = ''
  let currentFileName = ''

  code.split('\n').forEach((line) => {
    if (line.startsWith('<{')) {
      const fileName = line.slice(2, -2)
      if (!!currentFileName && fileName !== currentFileName) {
        codeMap.set(currentFileName, currentCode)
        currentCode = ''
        currentFileName = fileName
      } else {
        currentFileName = fileName
      }
    } else {
      currentCode += line + '\n'
    }
  })

  return codeMap
}

const getCodeFile = async () => {
  const codeText = await fetch('src/assets/code.txt', {
    headers: {
      'Content-Type': 'file/text',
    },
  }).then((res) => res.text())

  return codeText
}

export const useCodeDisplay = () => {
  const [codeMap, setCodeMap] = useState<Map<string, string>>(new Map())

  useEffect(() => {
    getCodeFile().then(separateCode).then(setCodeMap)
  }, [])

  return {
    codeMap,
  }
}
