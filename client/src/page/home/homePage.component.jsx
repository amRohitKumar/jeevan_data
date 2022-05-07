import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

import {
  HomeDiv,
  HomeHeading,
  HomeContent,
  HomeLeftDiv,
  HomeRightDiv,
  FileInput,
} from "./homePage.style";

const HomePage = () => {
  const [disease, setDisease] = useState("");
  const [diseaseImage, setImage] = useState(null);

  const handleChange = (event) => {
    setDisease(event.target.value);
  };

  const fileSelectedHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(disease, diseaseImage);
  };

  return (
    <HomeDiv>
      <HomeHeading>Upload your details - </HomeHeading>
      <HomeContent>
        <HomeLeftDiv>
          <form sx={{ width: "100%", my: "2em" }} onSubmit={handleSubmitHandler}>
            <InputLabel id="disease-select">Disease</InputLabel>
            <Select
              labelId="disease-select"
              id="demo-simple-select"
              value={disease}
              label="Disease"
              onChange={handleChange}
              sx={{ width: "10em" }}
            >
              <MenuItem value="Covid-19">Covid-19</MenuItem>
              <MenuItem value="Pneumonia">Pneumonia</MenuItem>
              <MenuItem value="Skin_Cancer">Skin Cancer</MenuItem>
              <MenuItem value="Retinal_Disease">Retinal Disease</MenuItem>
            </Select>
            <FileInput>
              <label>
                Upload image - 
                <input
                  type="file"
                  accept="image/png, image/jpg, image/jpeg"
                  name="disease-image"
                  onChange={fileSelectedHandler}
                />
              </label>
            </FileInput>
            <Button
              variant="contained"
              color="secondary"
              type="submit"
            >
              Upload
            </Button>
          </form>
        </HomeLeftDiv>
        <HomeRightDiv></HomeRightDiv>
      </HomeContent>
    </HomeDiv>
  );
};

export default HomePage;
