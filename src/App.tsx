import './assets/css/App.css'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

//componentes
import LigaFinalDefinition from './components/LigaFinalDefinition'
import ListaMateriais from './components/ListaMateriais'
import ListaComposicao from './components/ListaComposicao'

//contexts
import { GlobalProvider } from './context/GlobalProvider'

function App() {
  return (
    <>
      <GlobalProvider>
        <Container>
          <Stack gap={4}>
            <div>
              <LigaFinalDefinition />
            </div>
            <Stack direction="horizontal" gap={2} className="mx-auto">
              <div>
                <ListaMateriais />
              </div>
              <div>
                <ListaComposicao compositionType="Composição Resultante" />
              </div>
              <div>
                <ListaComposicao compositionType="Composição Desejada" />
              </div>
            </Stack>
          </Stack>
        </Container>
      </GlobalProvider>
    </>
  )
}
export default App
