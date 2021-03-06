import styled from "styled-components";

const StyledError = styled.div`
  padding: 2rem;
  background: ${props => props.theme.color.bg_main};
  margin: 2rem 0;
  border: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 5px solid ${props => props.theme.color.border_error};
  p {
    margin: 0;
    font-weight: 100;
  }
  strong {
    margin-right: 1rem;
  }
`;

export default StyledError;
