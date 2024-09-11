import {useState} from 'react'

let timeoutId: ReturnType<typeof setTimeout> | null

export const useDebounce = <T>(value: T, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  if (timeoutId) {
    clearTimeout(timeoutId)
  }

  timeoutId = setTimeout(() => {
    setDebouncedValue(value)
  }, delay)

  return debouncedValue
}
