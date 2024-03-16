export type TElementRange = {
  min: Number
  max: Number
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
  C: Number
  Mn: Number
  Si: Number
  Cr: Number
  Ni: Number
  Cu: Number
  Mo: Number
  Nb: Number
  W: Number
  V: Number
  Al: Number
}

export type TMateriaPrima = {
  composicao: TCompositionRange
}


