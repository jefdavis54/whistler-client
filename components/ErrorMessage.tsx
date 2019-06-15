import StyledError from "../styles/ErrorMessage";

type Props = {
  title: string;
  errorMsgArr: string[];
};

const DisplayError = ({ title = "", errorMsgArr }: Props) => {
  if (errorMsgArr.length === 0) return null;
  return (
    <StyledError>
      <p>
        {title.length > 0 ? title + " " : ""}Error{errorMsgArr.length > 1 ? "s" : ""}:
      </p>
      {errorMsgArr.map((msg: string, i: number) => (
        <li key={i}>{msg}</li>
      ))}
    </StyledError>
  );
};

export default DisplayError;
