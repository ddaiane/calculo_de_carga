import Form from 'react-bootstrap/Form'
import Stack from 'react-bootstrap/Stack'

import { useContext } from 'react'

import { GlobalContext } from '../context/GlobalProvider'
import { IGlobalContext } from '../context/interfaces'

export default function LigaFinalDefinition() {
  const {
    ligas,
    ligaDesejadaName,
    setLigaDesejadaName,
    pesoFinalDesejado,
    setPesoFinalDesejado,
    setShowMaterialsAndComposition,
  } = useContext<IGlobalContext>(GlobalContext)

  setShowMaterialsAndComposition(false)
  if (ligaDesejadaName && pesoFinalDesejado) setShowMaterialsAndComposition(true)

  return (
    <Stack direction="horizontal" gap={5} className="mx-auto">
      <Form.Group controlId="ligaFinal">
        <Form.Label>Escolha a liga que deseja produzir:</Form.Label>
        <Form.Select
          aria-label="Escolha a liga que gostaria de produzir"
          onChange={(e) => setLigaDesejadaName(e.target.value)}
        >
          <option value={''}>Selecione</option>
          {Object.keys(ligas).map((liga) => (
            <option value={liga}>{liga}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group controlId="pesoFinal">
        <Form.Label>Peso em quilos que deseja produzir:</Form.Label>
        <Form.Control
          required
          type="number"
          name="pesoFinal"
          onChange={(e) => setPesoFinalDesejado(Number(e.target.value))}
        />
      </Form.Group>
    </Stack>
  )
}
