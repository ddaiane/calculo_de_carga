export type TElementRange = {
  min: number
  max: number
}

export type TCompositionRange = {
  C: TElementRange
  Mn: TElementRange
  Si: TElementRange
  Cr: TElementRange
  Ni: TElementRange
  Cu: TElementRange
  Mo: TElementRange
  Nb: TElementRange
  W: TElementRange
  V: TElementRange
  Al: TElementRange
}

export type TCompositionFinal = {
  C: number
  Mn: number
  Si: number
  Cr: number
  Ni: number
  Cu: number
  Mo: number
  Nb: number
  W: number
  V: number
  Al: number
}

export type TMateriaPrima = {
  name: string
  preco: number
  composicao: TCompositionRange
}
