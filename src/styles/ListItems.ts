import styled from 'styled-components'

const StyledItemsList = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 3rem;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`

export default StyledItemsList