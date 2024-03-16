import React from 'react'
import { TCompositionRange, TCompositionFinal } from '../interfaces/ligas'
import { TLigas } from '../constants/interfaces'

export interface IGlobalContext {
  ligaDesejadaComposicao: TCompositionRange
  setLigaDesejadaComposicao: React.Dispatch<React.SetStateAction<TCompositionRange>>
  ligaResultanteComposicao: TCompositionFinal
  setLigaResultanteComposicao: React.Dispatch<React.SetStateAction<TCompositionFinal>>
  ligaDesejadaName: string
  setLigaDesejadaName: React.Dispatch<React.SetStateAction<string>>
  ligas: TLigas
  pesoFinalDesejado: number
  setPesoFinalDesejado: React.Dispatch<React.SetStateAction<number>>
  showMaterialsAndComposition: boolean
  setShowMaterialsAndComposition: React.Dispatch<React.SetStateAction<boolean>>
}
