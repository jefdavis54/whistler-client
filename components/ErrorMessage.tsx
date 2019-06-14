import StyledError from "../styles/ErrorMessage";
import { Error } from "../lib/typsescriptInterfaces";

const DisplayError = ({ error }: any) => {
  if (!error || !error.message) return null;
  if (
    error.networkError &&
    error.networkError.result &&
    error.networkError.result.errors.length
  ) {
    return error.networkError.result.errors.map((error: Error, i: number) => (
      <StyledError key={i}>
        <p data-test="graphql-error">
          <strong>Error:</strong>
          {error.message.replace("GraphQL error: ", "")}
        </p>
      </StyledError>
    ));
  }
  return (
    <StyledError>
      <p data-test="graphql-error">
        <strong>Error:</strong>
        {error.message.replace("GraphQL error: ", "")}
      </p>
    </StyledError>
  );
};

export default DisplayError;
