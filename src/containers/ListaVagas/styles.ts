import styled from 'styled-components'

export const ListaDasVagas = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 42px;
  row-gap: 42px;
  margin-top: 42px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
`
