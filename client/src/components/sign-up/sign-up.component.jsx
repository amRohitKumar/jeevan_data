import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import {createUserWithEmailAndPassword, auth} from '../../firebase';
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import api from '../../api/users'

import {
  setUserLoginDetails,
} from "../../redux/features/users/userSlice";

import { SignUpDiv, ButtonDiv } from "./sign-up.style";

const SignUp = ({isDoctor}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConffPassword] = useState('');

  const handleName = (evt) => {
    setName(evt.target.value);
  }

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  }

  const handleConfirmPassword = (evt) => {
    setConffPassword(evt.target.value);
  }

  const handleSignUp = async () => {
    if(password !== confPassword) return;
    createUserWithEmailAndPassword(auth, email, password)
    .then(async (userCredential) => {
      // const user = userCredential.user;
      const res = await api.post('/create/user', {name: name, email: email});
      return res.data.userId;
    })
    .then((userId) => {
      dispatch(
        setUserLoginDetails({
          name: name,
          email: email,
          id: userId,
          isDoctor: isDoctor,
        })
      );
    })
    .then(() => isDoctor?navigate('/doctors'):navigate('/home'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("error in sign up", errorCode, errorMessage);
      window.alert("Error in sign up " + errorCode + errorMessage);
    });
  }

  return (
    <SignUpDiv>
      <h2>I do not have a account.</h2>
      <span style={{ marginBottom: "2em" }}>
        Sign up with your email and password
      </span>
      <form>
        <TextField
          label="Disply Name"
          name="displayName"
          varient="outlined"
          type="text"
          value={name}
          onChange={handleName}
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePassword}
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          label="Confirm Password"
          name="confirmPassword"
          variant="outlined"
          value={confPassword}
          onChange={handleConfirmPassword}
          sx={{ marginBottom: "1.2em" }}
          type="password"
          required
          error={password!==confPassword?true:false}
        />
        <ButtonDiv>
          <Button variant="contained" type="button" sx={{ backgroundColor: '#3d0ba9'}} onClick={handleSignUp}>
            Sign Up
          </Button>
        </ButtonDiv>
      </form>
    </SignUpDiv>
  );
};

export default SignUp;
