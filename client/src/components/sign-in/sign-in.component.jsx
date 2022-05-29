import { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
// import GoogleIcon from "@mui/icons-material/Google";
import { signInWithEmailAndPassword ,auth } from "../../firebase";
import { useDispatch } from "react-redux";

import {
  setUserLoginDetails,
} from "../../redux/features/users/userSlice";

import { SignInDiv, ButtonDiv } from "./sign-in.style";
import { useNavigate } from "react-router-dom";

const SignIn = ({isDoctor}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmail = (evt) => {
    setEmail(evt.target.value);
  }

  const handlePassword = (evt) => {
    setPassword(evt.target.value);
  }

  const handleEmailPasswordSignIn = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      dispatch(
        setUserLoginDetails({
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          id: user.uid,
          isDoctor: isDoctor,
        })
      );
    })
    .then(() => isDoctor?navigate('/doctors'):navigate('/home'))
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log("Login unsuccessfull ", errorCode, errorMessage);
      window.alert("Error in login " + errorCode + errorMessage);
    });
  }

  
  return (
    <SignInDiv>
      <h2>I already have an account.</h2>
      <span style={{ marginBottom: "2em" }}>
        Sign in with your email and password
      </span>

      <form>
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          value={email}
          onChange={handleEmail}
          sx={{ marginBottom: "1.5em" }}
          required
        />
        <TextField
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          value={password}
          onChange={handlePassword}
          sx={{ marginBottom: "1.5em" }}
          required
        />
        <ButtonDiv>
          <Button variant="contained" sx={{ backgroundColor: '#3d0ba9'}} onClick={handleEmailPasswordSignIn}>
            Sign In
          </Button>
          {/* <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            type="button"
            sx={{ marginLeft: "1.5em", backgroundColor: '#3d0ba9' }}
          >
            Sign In with Google
          </Button> */}
        </ButtonDiv>
      </form>
    </SignInDiv>
  );
};

export default SignIn;
