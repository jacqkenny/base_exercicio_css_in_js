import { FormEvent, useState } from 'react'
import { BotaoPequisar, Input, FormDasVagas } from './styles'

type Props = {
  aoPesquisar: (termo: string) => void
}

const FormVagas = ({ aoPesquisar }: Props) => {
  const [termo, setTermo] = useState<string>('')

  const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    aoPesquisar(termo.toLocaleLowerCase())
  }

  return (
    <FormDasVagas onSubmit={aoEnviarForm}>
      <Input
        placeholder="Front-end, fullstack, node, design"
        onChange={(e) => setTermo(e.target.value)}
        type="search"
      />
      <BotaoPequisar type="submit">Pesquisar</BotaoPequisar>
    </FormDasVagas>
  )
}
export default FormVagas
