import Table from 'react-bootstrap/Table'
import { useContext } from 'react'

import { TElementRange } from '../interfaces/ligas'
import { GlobalContext } from '../context/GlobalProvider'
import { IGlobalContext } from '../context/interfaces'

type TProps = {
  compositionType: string
}

export default function ListaComposicao(props: TProps) {
  const { compositionType } = props
  const {
    showMaterialsAndComposition,
    ligaResultanteComposicao,
    ligaDesejadaComposicao,
  } = useContext<IGlobalContext>(GlobalContext)

  if (!showMaterialsAndComposition) return null

  const ligaToShowByCompositionType = () => {
    switch (compositionType) {
      case 'Composição Resultante':
        return ligaResultanteComposicao
      case 'Composição Desejada':
        return ligaDesejadaComposicao
      default:
        return null
    }
  }
  const ligaToShow = ligaToShowByCompositionType()

  if (!ligaToShow) return null

  const renderPorcentagem = (porcentagem: TElementRange | number) => {
    return typeof porcentagem == 'object' ? (
      <td>{`${porcentagem.min} - ${porcentagem.max}`}</td>
    ) : (
      <td>{porcentagem}</td>
    )
  }

  const renderRow = (elem: string, porcentagem: TElementRange | number) => {
    return (
      <tr>
        <td>{elem}</td>
        <td>{renderPorcentagem(porcentagem)}</td>
      </tr>
    )
  }
  return (
    <div>
      <Table responsive striped bordered hover>
        <thead>
          <tr>
            <th colSpan={2}>{compositionType}</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(ligaToShow).map(([elem, porcentagem]) =>
            renderRow(elem, porcentagem)
          )}
        </tbody>
      </Table>
    </div>
  )
}
