import { useState } from 'react'
import logo from './assets/logo.svg'
import { Container } from './components/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <aside>
        <img src={logo} alt="Logo do PoupApp" />
      </aside>
    </Container>
  )
}

export default App
