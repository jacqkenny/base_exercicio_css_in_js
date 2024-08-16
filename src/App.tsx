import { ThemeProvider } from 'styled-components'

import Hero from './components/Hero'
import ListaVagas from './containers/ListaVagas'
import EstiloGlobal, { Container } from './styles'
import themeColor from './Theme/styles'
import Cabecalho from './components/Cabecalho'

function App() {
  return (
    <ThemeProvider theme={themeColor}>
      <EstiloGlobal></EstiloGlobal>
      <Cabecalho />
      <Hero />
      <Container>
        <ListaVagas />
      </Container>
    </ThemeProvider>
  )
}

export default App
