import { useState } from 'react'
import logo from './assets/logo.svg'
import { Container } from './components/Container'
import { Aside } from './components/Aside'
import { SearchInput } from './components/SearchInput'
import { Main } from './components/Main'
import { Typography } from './components/Typography'
import Card from './components/Card'
import { DailyBudget } from './components/DailyBudget'
import { SavingStats } from './components/SavingStats'
import styles from './app.module.css'
import { Transactions } from './components/Transactions'
import { Banks } from './components/Banks'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Container>
      <Aside />
      <Main>
        <div className={styles.container}>
          <SearchInput />
          <div>
            <Typography variant="h1">
              Olá, Vinny!
            </Typography>
            <Typography variant="body">
              Veja como estão suas finanças hoje.
            </Typography>
          </div>
          <section className={styles.grid}>
            <Card>
              <Card.Header>
                Orçamento diário disponível:
              </Card.Header>
              <Card.Body>
                <DailyBudget value={200} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Progresso da meta financeira
              </Card.Header>
              <Card.Body>
                <SavingStats percent={40} />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Movimentação financeira
              </Card.Header>
              <Card.Body>
                <Transactions />
              </Card.Body>
            </Card>
            <Card>
              <Card.Header>
                Minhas contas
              </Card.Header>
              <Card.Body>
                <Banks />
              </Card.Body>
            </Card>
          </section>
        </div>

      </Main>
    </Container>
  )
}

export default App
