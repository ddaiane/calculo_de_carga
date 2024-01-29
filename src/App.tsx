import { useState } from 'react'
import './assets/css/App.css'

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
            <div>
                <LigaFinalDefinition
                    ligas={ligas}
                    setLigaFinal={setLigaFinal}
                    setPesoFinal={setPesoFinal}
                />
            </div>

            <div>{ligaFinal && pesoFinal && apresentaMateriais()}</div>
        </>
    )
}
export default App
