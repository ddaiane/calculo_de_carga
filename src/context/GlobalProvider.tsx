import { createContext, useState } from 'react'

import { IGlobalContext } from './interfaces'
import { materiaPrimaDefault, composicaoResultanteInicial } from '../defaults/ligas'
import { ligas } from '../constants/ligas'

export const GlobalContext = createContext({} as IGlobalContext)

export const GlobalProvider = ({ children }: { children: React.ReactNode }) => {
  const [ligaDesejadaComposicao, setLigaDesejadaComposicao] = useState(materiaPrimaDefault.composicao)
  const [ligaResultanteComposicao, setLigaResultanteComposicao] = useState(composicaoResultanteInicial)
  const [ligaDesejadaName, setLigaDesejadaName] = useState('')
  const [pesoFinalDesejado, setPesoFinalDesejado] = useState(0)

  const [showMaterialsAndComposition, setShowMaterialsAndComposition] = useState(false)

  const context: IGlobalContext = {
    ligaDesejadaComposicao,
    setLigaDesejadaComposicao,
    ligaDesejadaName,
    setLigaDesejadaName,
    pesoFinalDesejado,
    setPesoFinalDesejado,
    ligaResultanteComposicao,
    setLigaResultanteComposicao,
    ligas,
    showMaterialsAndComposition,
    setShowMaterialsAndComposition
  }

  return <GlobalContext.Provider value={context}>{children}</GlobalContext.Provider>
}
