import { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import api from "../../api/disease";
import userApi from "../../api/users";
import { useSelector } from "react-redux";
import DoctorSuggestion from "../../components/doctorSuggestion/doctorSuggestion.component";

import { selectUser } from "../../redux/features/users/userSlice";

import {
  HomeDiv,
  HomeHeading,
  HomeContent,
  HomeLeftDiv,
  HomeRightDiv,
  FileInput,
  DoctorSuggestionDiv,
} from "./homePage.style";

const HomePage = () => {
  const user = useSelector(selectUser);
  const [disease, setDisease] = useState("");
  const [diseaseImage, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [doctors, setDoctors] = useState([]);

  const handleChange = (event) => {
    setDisease(event.target.value);
  };

  const fileSelectedHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const handleSubmitHandler = (evt) => {
    evt.preventDefault();
    console.log(disease, diseaseImage);
    const getResult = async () => {
      const formData = new FormData();
      formData.append("image", diseaseImage);
      formData.append("disease", disease);
      const currDate = new Date();
      const response = await api.post("/predict", formData);
      const res = await userApi.post(`/addreport/${user.email}`, {
        testedFor: disease,
        testDate: currDate,
        result: response.data.result,
        imageName: diseaseImage.name,
      });
      const relatedDoc = await userApi.get(`/doc/${disease}`);
      console.log(relatedDoc);
      setDoctors(relatedDoc.data);
      console.log(response.data.result, res);
      setResult(response.data.result);
    };
    getResult();
  };

  return (
    <HomeDiv>
      <HomeHeading>Upload your details - </HomeHeading>
      <HomeContent>
        <HomeLeftDiv>
          <form
            sx={{ width: "100%", my: "2em" }}
            onSubmit={handleSubmitHandler}
          >
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
              sx={{ marginLeft: "auto", marginRight: "auto" }}
            >
              Upload
            </Button>
          </form>
        </HomeLeftDiv>
        <HomeRightDiv>
          {
            <>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{ fontSize: "2.5em", fontWeight: "500" }}
              >
                Result
              </Typography>
              <Typography variant="body1" gutterBottom>
                {result}
              </Typography>
            </>
          }
        </HomeRightDiv>
      </HomeContent>
      {!!doctors.length&&<DoctorSuggestionDiv>
        <Typography variant="h4" gutterBottom>
          Suggested Doctors -
        </Typography>
        <div>
          {doctors.map((doc) => (
            <DoctorSuggestion key={doc._id} {...doc} />
          ))}
        </div>
      </DoctorSuggestionDiv>}
    </HomeDiv>
  );
};

export default HomePage;
