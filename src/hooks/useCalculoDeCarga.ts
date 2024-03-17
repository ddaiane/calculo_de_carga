import { useContext } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { IGlobalContext } from '../context/interfaces'
import { TLigas } from '../constants/interfaces'
import { TMateriaPrima, TElementRange } from '../interfaces/ligas'

interface IMateriaPrimaCalculo extends TMateriaPrima {
  pesoUsado?: number
}

type TElementsCalculo = {
  name: string
  pesoUsado: number
  range: TElementRange
}

export const useCalculoDeCarga = () => {
  const { materiaisUsados, ligas, setLigaResultanteComposicao } =
    useContext<IGlobalContext>(GlobalContext)

  function calculoDeCarga() {
    const selecionaUsadasEPeso = () => {
      return materiaisUsados.map((material) => {
        let liga: IMateriaPrimaCalculo = ligas[material.name as keyof TLigas]
        liga ? (liga.pesoUsado = material.peso) : null
        return liga
      })
    }

    const elements = createElementsDict(selecionaUsadasEPeso())
    let composicaoFinal: any = {}
    for (const element in elements) {
      const elementFinalComposition = calculateEachElement(elements[element])
      composicaoFinal[element] = elementFinalComposition
    }

    setLigaResultanteComposicao(composicaoFinal)
  }

  return {
    calculoDeCarga,
  }
}

const calculateEachElement = (element: TElementsCalculo[]) => {
  const elementNoMaterialUsado = (material: TElementsCalculo) => {
    return material.pesoUsado * material.range.max
  }

  let somaPorcentagensMateriais = 0
  let pesoTotal = 0

  element.forEach((material) => {
    pesoTotal += material.pesoUsado
    somaPorcentagensMateriais += elementNoMaterialUsado(material)
  })
  return somaPorcentagensMateriais / pesoTotal
}

const createElementsDict = (ligasUsadas: IMateriaPrimaCalculo[]) => {
  let elementsDict: any = {}
  ligasUsadas.forEach((liga) => {
    for (const elem in liga?.composicao) {
      if (!elementsDict[elem]) {
        elementsDict[elem] = []
      }
      elementsDict[elem].push({
        pesoUsado: liga.pesoUsado,
        name: liga.name,
        range: liga.composicao[elem as keyof typeof liga.composicao],
      })
    }
  })
  return elementsDict
}
