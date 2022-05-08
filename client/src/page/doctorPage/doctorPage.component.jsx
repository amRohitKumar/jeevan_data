import { useState } from "react";
import {
  DoctorPageDiv,
  DoctorPageHeading,
  DoctorPageContent,
} from "./doctorPage.style";

import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import api from '../../api/users';

const DoctorPage = () => {
  let [name, setName] = useState("");
  let [email, setEmail] = useState("");
  let [specialization, setSpecialization] = useState("");
  let [address, setAddress] = useState("");

  const handleNameChange = (evt) => {
    setName(evt.target.value);
  };

  const handleEmailChange = (evt) => {
    setEmail(evt.target.value);
  };

  const handleSpecializationChange = (evt) => {
    setSpecialization(evt.target.value);
  };

  const handleAddressChange = (evt) => {
    setAddress(evt.target.value);
  };

  const handleSubmit = async(evt) => {
    const doctorObj = {name, email, specialization, address}; console.log(doctorObj);
    const res = await api.post('/create/doc', {doctorObj});
    if(res.statusText === "OK"){
      setName(''); setEmail(''); setAddress(''); setSpecialization('');
    }
  };

  return (
    <DoctorPageDiv>
      <DoctorPageHeading>Connect with us -</DoctorPageHeading>
      <DoctorPageContent>
        <FormControl varient="standard">
          <InputLabel id="specilization" sx={{ mt: "15px" }}>
            Specialization
          </InputLabel>
          <Select
            labelId="specilization"
            id="specilization-select"
            value={specialization}
            label="Specialization"
            onChange={handleSpecializationChange}
            sx={{ width: "14em", my: "1em" }}
          >
            <MenuItem value="Covid-19">Covid-19</MenuItem>
            <MenuItem value="Pneumonia">Pneumonia</MenuItem>
            <MenuItem value="Skin_Cancer">Skin Cancer</MenuItem>
            <MenuItem value="Retinal_Disease">Retinal Disease</MenuItem>
          </Select>
          <TextField
            label="Name"
            variant="outlined"
            value={name}
            onChange={handleNameChange}
            sx={{ margin: "1em 0.5em" }}
          />
          <TextField
            label="Email"
            type="email"
            variant="outlined"
            value={email}
            onChange={handleEmailChange}
            sx={{ margin: "1em 0.5em" }}
          />
          <TextField
            label="Address"
            type="text"
            variant="outlined"
            value={address}
            onChange={handleAddressChange}
            sx={{ margin: "1em 0.5em" }}
            multiline
          />
          <Button
            variant="contained"
            onClick={handleSubmit}
            color="secondary"
            sx={{ my: "1em" }}
          >
            Submit
          </Button>
        </FormControl>
      </DoctorPageContent>
    </DoctorPageDiv>
  );
};

export default DoctorPage;
