import Table from 'react-bootstrap/Table'

import { IComposicao, IFaixa } from '../interfaces/ligas'

type TProps = {
    compositionType: string
    ligaToShow: IComposicao
}

export default function ListaComposicao(props: TProps) {
    const { ligaToShow, compositionType } = props

    const renderPorcentagem = (porcentagem: IFaixa | number) => {
        return typeof porcentagem == 'object' ? (
            <td>{`${porcentagem.min} - ${porcentagem.max}`}</td>
        ) : (
            <td>{porcentagem}</td>
        )
    }

    const renderRow = (elem: string, porcentagem: IFaixa | number) => {
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
