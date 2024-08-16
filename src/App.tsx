import { ThemeProvider } from 'styled-components'

import Header from './components/Cabecalho/index'
import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import GlobalStyle, { Container } from './styles'
import temaLight from './theme/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <GlobalStyle />
      <Header />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
