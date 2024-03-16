import { useState } from 'react'
import './assets/css/App.css'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

//componentes
import LigaFinalDefinition from './components/LigaFinalDefinition'
import ListaMateriais from './components/ListaMateriais'
import ListaComposicao from './components/ListaComposicao'

//constantes
import { ligas, ligaModel } from './constants/ligas'

//interfaces
import { IComposicao } from './interfaces/ligas'

function App() {
  const [ligaFinal, setLigaFinal] = useState<string>('')
  const [pesoFinal, setPesoFinal] = useState<number | null>(null)
  const [ligaResultante, setligaResultante] = useState<IComposicao>(ligaModel.composicao)

  return (
    <>
      <Container>
        <Stack gap={4}>
          <div>
            <LigaFinalDefinition
              ligas={ligas}
              setLigaFinal={setLigaFinal}
              setPesoFinal={setPesoFinal}
            />
          </div>
          <Stack direction="horizontal" gap={2} className="mx-auto">
            <div>
              {ligaFinal && pesoFinal && (
                <ListaMateriais
                  ligas={ligas}
                  ligaFinal={ligaFinal}
                  setligaResultante={setligaResultante}
                />
              )}
            </div>
            <div>
              {ligaFinal && pesoFinal && (
                <ListaComposicao
                  ligaToShow={ligaResultante}
                  compositionType="Composição Resultante"
                />
              )}
            </div>
            <div>
              {ligaFinal && pesoFinal && (
                <ListaComposicao
                  ligaToShow={ligaDesejada}
                  compositionType="Composição Desejada"
                />
              )}
            </div>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}
export default App
