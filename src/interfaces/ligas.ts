export interface IFaixa {
    min: number
    max: number
}

export interface IComposicao {
    C: IFaixa | number,
    Mn: IFaixa | number,
    Al: IFaixa | number
}
