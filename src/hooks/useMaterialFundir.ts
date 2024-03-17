import { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalProvider'
import { IGlobalContext } from '../context/interfaces'
import { useCalculoDeCarga } from './useCalculoDeCarga'

export const useMaterialFundir = () => {
  const { calculoDeCarga } = useCalculoDeCarga()
  const { materiaisUsados, setMateriaisUsados } =
    useContext<IGlobalContext>(GlobalContext)

  useEffect(() => {
    calculoDeCarga() //refaz o calculo de carga toda vez que sao modificados os materias usados
  }, [materiaisUsados])

  function setMaterialUsado(materialName: string, peso: number) {
    let newMateriaisUsados = materiaisUsados.filter(
      (material) => material.name != materialName && material.peso > 0
    )
    newMateriaisUsados.push({ name: materialName, peso: peso })
    setMateriaisUsados(newMateriaisUsados)
  }

  return {
    setMaterialUsado,
  }
}
