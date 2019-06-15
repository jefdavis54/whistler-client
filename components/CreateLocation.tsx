import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";
import CREATE_LOCATION_MUTATION from "../graphql/Mutation/createLocation";
import GET_WIKI_MUTATION from "../graphql/Mutation/getWikiLocation";
import { ArtworkLocation } from "../lib/typsescriptInterfaces";
import ErrorMessageNetwork from "./ErrorMessageNetwork";
import flattenGrapghql from "../util/flattenGraphql";

const initialLocation: ArtworkLocation = {
  easyId: "",
  isPublished: false,
  wikiPage: "",
  wikiPhoto: "",
  imageLink: "",
  name: "",
  nickname: "",
  description: "",
  dateFirstOpened: "",
  streetAddress: "",
  city: "",
  state: "",
  postalCode: "",
  country: "",
  coorE: 0,
  coorN: 0,
  website: "",
  isMuseum: false,
};

const AddLocation = () => {
  const [location, setLocation] = useState(initialLocation);
  const [wikiPage, setWikiPage] = useState(
    "https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art",
  );
  const [wikiLoading, setWikiLoading] = useState(false);

  const handleChange = (e: any) => {
    const { name, type, value, checked } = e.target;
    switch (type) {
      case "number":
        const parsed = parseFloat(value);
        if (!isNaN(parsed)) {
          setLocation({ ...location, [name]: parsed });
        }
        break;
      case "checkbox":
        setLocation({ ...location, [name]: checked });
        break;
      default:
        setLocation({ ...location, [name]: value });
    }
  };

  return (
    <>
      <p>https://en.wikipedia.org/wiki/Metropolitan_Museum_of_Art</p>
      <Mutation mutation={GET_WIKI_MUTATION} variables={{ url: wikiPage }}>
        {(getWikiLocation: any, { loading, error }: any) => (
          <StyledForm
            method="post"
            onSubmit={async e => {
              e.preventDefault();
              setWikiLoading(true);
              // fetch(wikiPage)
              //   .then(response => {
              //     console.log("zJED: got response:", response.ok);
              //     setWikiLoading(false);
              //   })
              //   .catch(err => {
              //     console.log("zJED: fecth error", err);
              //     setWikiLoading(false);
              //   });
              try {
                const wikiResponse = await getWikiLocation();
                const { errors, data } = flattenGrapghql(wikiResponse, "getWikiLocation");
                //zJED TODO Do somthing if errors are returned. Should probably flesh out ErrorMessage to support these as well.
                if (errors.length > 0) {
                  console.log(errors);
                } else {
                  console.log("wikiResponse data:", data);
                }
              } catch (err) {
                console.log(err);
              }
              setWikiLoading(false);
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
      <Mutation mutation={CREATE_LOCATION_MUTATION} variables={location}>
        {(createArtworkLocation: any, { loading, error }: any) => {
          return (
            <StyledForm
              onSubmit={async e => {
                e.preventDefault();
                const response = await createArtworkLocation(location);
                console.log(response);
                // Router.push({
                //   pathname: `/item`,
                //   query: { id: response.data.createArtworkLocation.data.id }
                // });
              }}
            >
              <h2>Add a Location:</h2>
              <ErrorMessageNetwork error={error} />
              <fieldset disabled={loading || wikiLoading} aria-busy={loading || wikiLoading}>
                <label htmlFor="easyId">
                  EasyId
                  <input
                    type="text"
                    id="easyId"
                    name="easyId"
                    placeholder="Easy to remember name or abreviation."
                    required
                    value={location.easyId}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="coorN">
                  Latitude N to S: 90 to -90
                  <input
                    type="number"
                    id="coorN"
                    name="coorN"
                    placeholder="Map Coordinate N S"
                    value={location.coorN}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="coorE">
                  Longitude E to W: 180 to -180
                  <input
                    type="number"
                    id="coorE"
                    name="coorE"
                    placeholder="Map Coordinate E W"
                    value={location.coorE}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="isPublished">
                  Visible to All Users?
                  <input
                    type="checkbox"
                    id="isPublished"
                    name="isPublished"
                    checked={location.isPublished}
                    onChange={handleChange}
                  />
                </label>
                <label htmlFor="description">
                  Description
                  <textarea
                    id="description"
                    name="description"
                    value={location.description}
                    onChange={handleChange}
                  />
                </label>
                <button type="submit">Submit</button>
              </fieldset>
            </StyledForm>
          );
        }}
      </Mutation>
    </>
  );
};

export default AddLocation;
