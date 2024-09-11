import styled from 'styled-components'
import TypeComponent from './main/TypeComponent'

const AppWrapper = styled.main`
  background-color: #3f3f3f;
  color: #ffffff;
  width: 100dvw;
  height: 100dvh;
  overflow: hidden;
`

const App = () => {
  return (
    <AppWrapper>
      <TypeComponent />
    </AppWrapper>
  )
}

export default App
