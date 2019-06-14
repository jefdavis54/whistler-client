import styled from 'styled-components'

const StyledLogo = styled.h1`
  font-family: 'Bad Script', cursive;
  font-weight: 200;
  font-size: 4rem;
  margin-left: 2rem;
  a {
    border-radius: 10% 30%;
    padding: 1rem 1rem 0rem 1rem;
    background: ${props => props.theme.color.bg_logo};
    color: ${props => props.theme.color.text_logo};
  }
  @media (max-width: ${props => props.theme.maxWidth}) {
    margin: 0;
    text-align: center;
  }
`

export default StyledLogo