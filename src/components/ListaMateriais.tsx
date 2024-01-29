import Table from 'react-bootstrap/Table'
import { IFaixa } from '../interfaces/ligas'

const printRow = (materialName: string) => {
    return (
        <tr>
            <td>{materialName}</td>
            <td>add peso</td>
        </tr>
    )
}

const checkIfRelevant = (ligas: any, ligaFinal: string, materiaPrima:string ) => {
    if(materiaPrima === ligaFinal) return false;
    
    const ligaFinalComposicao: [string, IFaixa][] = Object.entries(ligas[ligaFinal].composicao)
    const materiaPrimaComposicao = ligas[materiaPrima].composicao

    //para ser relevante, a materia prima não deve ter componente que não tem na liga final desejada
    return ligaFinalComposicao.every(([componente, faixa]) => {
        if(faixa.max == 0) {
            return materiaPrimaComposicao[componente].max === 0 ?
            true : false;
        }
        return true
    })
}

export default function ListaMateriais(props: any) {
    const { ligas, ligaFinal } = props
    return (
        <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>Matéria Prima</th>
                        <th>Peso</th>
                    </tr>
                </thead>
                <tbody>
                    {Object.keys(ligas).map(liga => {
                        return checkIfRelevant(ligas, ligaFinal, liga) ?
                        printRow(liga) : null;
                    })}
                </tbody>
            </Table>
        </>
    )
}
