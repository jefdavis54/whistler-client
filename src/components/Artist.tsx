import { useState } from "react";
import { Mutation } from "react-apollo";
import StyledForm from "../styles/Form";

const AddArtist = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <StyledForm method="post">
      <h2>Add an Artist.</h2>
      <fieldset>
        <label htmlFor="title">
          Title
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Title"
            required
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
        </label>
      </fieldset>
    </StyledForm>
  );
};

export default AddArtist;
