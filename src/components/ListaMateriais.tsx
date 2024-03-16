import Table from 'react-bootstrap/Table'
import Button from 'react-bootstrap/Button'
import Stack from 'react-bootstrap/Stack'

import { useState } from 'react'

import { IFaixa } from '../interfaces/ligas'

export default function ListaMateriais(props: any) {
    const { ligas, ligaFinal, setligaResultante } = props
    const [showOnlyRelevant, setShowOnlyRelevant] = useState(true)

    //apenas setando uma hardcoded para teste
    setligaResultante(ligas.material5.composicao)

    const printRow = (materialName: string) => {
        return (
            <tr>
                <td>{materialName}</td>
                <td>add peso</td>
            </tr>
        )
    }

    const checkIfRelevant = (materiaPrima: string) => {
        if (materiaPrima === ligaFinal) return false

        const ligaFinalComposicao: [string, IFaixa][] = Object.entries(
            ligas[ligaFinal].composicao
        )
        const materiaPrimaComposicao = ligas[materiaPrima].composicao

        //para ser relevante, a materia prima não deve ter componente que não tem na liga final desejada
        return ligaFinalComposicao.every(([componente, faixa]) => {
            if (faixa.max == 0) {
                return materiaPrimaComposicao[componente].max === 0
                    ? true
                    : false
            }
            return true
        })
    }

    const showRelevantMaterials = (liga: string) => {
        return checkIfRelevant(liga) ? printRow(liga) : null
    }

    const renderAllOrRelevantButton = () => {
        const buttonText = showOnlyRelevant
            ? 'Mostrar todos'
            : 'Mostrar apenas relevantes'
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
                        {Object.keys(ligas).map((liga) => {
                            return showOnlyRelevant
                                ? showRelevantMaterials(liga)
                                : printRow(liga)
                        })}
                    </tbody>
                </Table>
            </div>
            <div>{renderAllOrRelevantButton()}</div>
        </Stack>
    )
}
