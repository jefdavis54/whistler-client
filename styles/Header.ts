import styled from 'styled-components'

const StyledHeader = styled.header`
  .bar {
    border-bottom: 10px solid ${props => props.theme.color.bg_logo};
    display: grid;
    grid-template-columns: auto 1fr;
    justify-content: space-between;

    @media (max-width: ${props => props.theme.maxWidth}) {
      grid-template-columns: 1fr;
  }
  }
  .sub-bar {
    display: grid;
    grid-template-columns: 1fr auto;
    border-bottom: 1px solid ${props => props.theme.color.border_main}
  }
`

export default StyledHeader