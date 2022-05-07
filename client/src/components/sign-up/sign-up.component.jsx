import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

import { SignUpDiv, ButtonDiv } from "./sign-up.style";

const SignUp = () => {
  return (
    <SignUpDiv>
      <h2>I do not have a account.</h2>
      <span style={{ marginBottom: "2em" }}>
        Sign up with your email and password
      </span>
      <form>
        <TextField
          id="outlined-basic"
          label="Disply Name"
          name="displayName"
          varient="outlined"
          type="text"
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          sx={{ marginBottom: "1.2em" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Confirm Password"
          name="confirmPassword"
          variant="outlined"
          sx={{ marginBottom: "1.2em" }}
          type="password"
          required
        />
        <ButtonDiv>
          <Button variant="contained" type="submit" sx={{ backgroundColor: '#3d0ba9'}}>
            Sign Up
          </Button>
        </ButtonDiv>
      </form>
    </SignUpDiv>
  );
};

export default SignUp;
