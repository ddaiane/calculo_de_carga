import { useState } from 'react'
import './assets/css/App.css'

import Container from 'react-bootstrap/Container'
import Stack from 'react-bootstrap/Stack'

import LigaFinalDefinition from './components/LigaFinalDefinition'
import ListaMateriais from './components/ListaMateriais'

import { ligas } from './constants/ligas'

function App() {
    const [ligaFinal, setLigaFinal] = useState(null)
    const [pesoFinal, setPesoFinal] = useState(null)

    const apresentaMateriais = () => (
        <ListaMateriais ligas={ligas} ligaFinal={ligaFinal} />
    )

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
                            {ligaFinal && pesoFinal && apresentaMateriais()}
                        </div>
                    </Stack>
                </Stack>
            </Container>
        </>
    )
}
export default App
