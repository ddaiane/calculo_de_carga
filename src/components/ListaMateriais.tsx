import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalProvider'
import { IGlobalContext } from '../context/interfaces'

import { TElementRange } from '../interfaces/ligas'
import { TLigas } from '../constants/interfaces'

export default function ListaMateriais() {
  const { ligas, ligaDesejadaName, ligaDesejadaComposicao, showMaterialsAndComposition } =
    useContext<IGlobalContext>(GlobalContext)

  const [showOnlyRelevant, setShowOnlyRelevant] = useState(true)

  if(!showMaterialsAndComposition) return null

  const printRow = (materialName: string) => {
    return (
      <tr>
        <td>{materialName}</td>
        <td>add peso</td>
      </tr>
    )
  }

  const checkIfRelevant = (materiaPrima: keyof TLigas) => {
    if (materiaPrima === ligaDesejadaName) return false

    const ligaDesejadaElems: [string, TElementRange][] = Object.entries(ligaDesejadaComposicao)
    const materiaPrimaComposicao = ligas[materiaPrima].composicao

    //para ser relevante, a materia prima não deve ter componente que não tem na liga final desejada
    return ligaDesejadaElems.every(([componente, faixa]) => {
      if (faixa.max == 0) {
        //@ts-ignore
        return materiaPrimaComposicao[componente].max === 0 ? true : false
      }
      return true
    })
  }

  const showRelevantMaterials = (liga: keyof typeof ligas) => {
    return checkIfRelevant(liga) ? printRow(liga) : null
  }

  const renderAllOrRelevantButton = () => {
    const buttonText = showOnlyRelevant ? 'Mostrar todos' : 'Mostrar apenas relevantes'
    return (
      <Button
        variant="secondary"
        size="sm"
        onClick={() => setShowOnlyRelevant(!showOnlyRelevant)}
      >
        {buttonText}
      </Button>
    )
  }

  return (
    <Stack gap={0}>
      <div>
        <Table responsive striped bordered hover>
          <thead>
            <tr>
              <th>Matéria Prima</th>
              <th>Peso</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(ligas).map((liga: string) => {
              return showOnlyRelevant
                ? showRelevantMaterials(liga as keyof TLigas)
                : printRow(liga)
            })}
          </tbody>
        </Table>
      </div>
      <div>{renderAllOrRelevantButton()}</div>
    </Stack>
  )
}
