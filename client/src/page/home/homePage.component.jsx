import { useRef, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import FormControl from "@mui/material/FormControl";
import api from "../../api/disease";
import userApi from "../../api/users";
import { useSelector } from "react-redux";
import DoctorSuggestion from "../../components/doctorSuggestion/doctorSuggestion.component";
import UploadImage from "../../assets/images/upload-image.jpg";

import { selectUser } from "../../redux/features/users/userSlice";

import {
  HomeDiv,
  HomeHeading,
  HomeContent,
  HomeUploadDiv,
  HomeResultDiv,
  FileInput,
  DoctorSuggestionDiv,
  FileUploadLabel,
  DropMessageDiv,
  PreviewImage,
  DropMessageHeaderCSS,
} from "./homePage.style";

const HomePage = () => {
  const user = useSelector(selectUser);
  const [disease, setDisease] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [diseaseImage, setImage] = useState(null);
  const [result, setResult] = useState("");
  const [doctors, setDoctors] = useState([]);

  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setDisease(event.target.value);
  };

  const fileSelectedHandler = (files) => {
    if (files.length !== 0) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setImageUrl(e.target.result);
      };
      reader.readAsDataURL(files[0]);
      setImage(files[0]);
    }
  };

  const fileDrop = (evt) => {
    evt.preventDefault();
    const files = evt.dataTransfer.files;
    if (
      files[0].type !== "image/png" &&
      files[0].type !== "image/jpg" &&
      files[0].type !== "image/jpeg"
    )
      return;
    fileSelectedHandler(files);
  };

  const handleSubmitHandler = (evt) => {
    evt.preventDefault();
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
        imageUrl: imageUrl,
      });
      // console.log(res);
      const relatedDoc = await userApi.get(`/doc/${disease}`);
      // console.log(relatedDoc);
      setDoctors(relatedDoc.data);
      setResult(response.data.result);
    };
    getResult();
  };

  return (
    <HomeDiv>
      <HomeHeading>Upload your details - </HomeHeading>
      <HomeContent>
        <HomeUploadDiv>
          <form
            style={{ width: "100%", my: "2em", display: 'flex', flexDirection: 'column', alignItems: 'center' }}
            onSubmit={handleSubmitHandler}
          >
            <FileInput>
              <DropMessageDiv
                onDragOver={(evt) => evt.preventDefault()}
                onDrop={fileDrop}
              >
                {imageUrl ? (
                  <PreviewImage src={imageUrl} alt="Disease Image" />
                ) : (
                  <>
                    <img
                      src={UploadImage}
                      alt="Upload"
                      style={{ width: "150px", height: "150px" }}
                    />
                    <h4 style={DropMessageHeaderCSS}>Drop your image here!</h4>
                  </>
                )}
              </DropMessageDiv>
              <FileUploadLabel onClick={() => fileInputRef.current.click()}>
                Select Image
              </FileUploadLabel>
              <input
                ref={fileInputRef}
                type="file"
                accept="image/png, image/jpg, image/jpeg"
                name="disease-image"
                onChange={(evt) => fileSelectedHandler(evt.target.files)}
                style={{ display: "none" }}
              />
            </FileInput>
            <FormControl sx={{ marginTop: '1em', minWidth: 120 }}>
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
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              sx={{ marginTop: '1em'}}
            >
              Upload
            </Button>
          </form>
        </HomeUploadDiv>
        <HomeResultDiv>
          {
            <>
              <Typography
                variant="h4"
                gutterBottom
                component="div"
                sx={{ fontSize: "2.5em", fontWeight: "500", letterSpacing: '1.5px' }}
              >
                Result
              </Typography>
              <Typography variant="body1" sx={{fontWeight: '400', fontSize: '1.5em'}}>
                {result}
              </Typography>
            </>
          }
        </HomeResultDiv>
      </HomeContent>
      {!!doctors.length && (
        <DoctorSuggestionDiv>
          <Typography variant="h4" gutterBottom>
            Suggested Doctors -
          </Typography>
          <div>
            {doctors.map((doc) => (
              <DoctorSuggestion key={doc._id} {...doc} />
            ))}
          </div>
        </DoctorSuggestionDiv>
      )}
    </HomeDiv>
  );
};

export default HomePage;
