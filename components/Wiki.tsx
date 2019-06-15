import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import GET_WIKI_MUTATION from "../graphql/Mutation/getWikiLocation";
import ErrorMessageNetwork from "./ErrorMessageNetwork";

const AddLocation = () => {
  const [wikiPage, setWikiPage] = useState("");

  return (
    <Mutation mutation={GET_WIKI_MUTATION} variables={{ url: wikiPage }}>
      {(getWikiLocation: any, { loading, error }: any) => (
        <StyledForm
          method="post"
          onSubmit={async e => {
            e.preventDefault();
            console.log("Trying GET_WIKI_MUTATION submit");
            try {
              console.log("wikiPage", wikiPage);
              const wikiResponse = await getWikiLocation();
              console.log(wikiResponse);
            } catch (err) {
              console.log(err);
            }
          }}
        >
          <fieldset disabled={loading} aria-busy={loading}>
            <h2>Load from wiki page</h2>
            <ErrorMessageNetwork error={error} />
            <label htmlFor="wiki">
              Wiki link
              <input
                type="text"
                id="wiki"
                name="wiki"
                placeholder="Full address example: https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art"
                required
                value={wikiPage}
                onChange={e => setWikiPage(e.target.value)}
              />
            </label>
            <button type="submit">Populate</button>
          </fieldset>
        </StyledForm>
      )}
    </Mutation>
  );
};

export default AddLocation;
