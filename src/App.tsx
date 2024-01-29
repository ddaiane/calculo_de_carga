import { useState } from 'react'
import './assets/css/App.css'

import LigaFinalDefinition from './components/LigaFinalDefinition'

import { ligas } from './constants/ligas'

function App() {
    const [ligaFinal, setLigaFinal] = useState(null)
    const [pesoFinal, setPesoFinal] = useState(null)

    const apresentaMateriais = () => <p>mostra materiais relevantes</p>
    const nada = () => <p></p>

    return (
        <>
            <div>
                <LigaFinalDefinition
                    ligas={ligas}
                    setLigaFinal={setLigaFinal}
                    setPesoFinal={setPesoFinal}
                />
            </div>
            <div>{ligaFinal && pesoFinal ? apresentaMateriais() : nada()}</div>
        </>
    )
}
export default App
