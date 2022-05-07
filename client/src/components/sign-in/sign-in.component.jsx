import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";

import { SignInDiv, ButtonDiv } from "./sign-in.style";

const SignIn = () => {
  return (
    <SignInDiv>
      <h2>I already have an account.</h2>
      <span style={{ marginBottom: "2em" }}>
        Sign in with your email and password
      </span>

      <form onSubmit="">
        <TextField
          id="outlined-basic"
          label="Email"
          name="email"
          variant="outlined"
          sx={{ marginBottom: "1.5em" }}
          required
        />
        <TextField
          id="outlined-basic"
          label="Password"
          name="password"
          variant="outlined"
          type="password"
          sx={{ marginBottom: "1.5em" }}
          required
        />
        <ButtonDiv>
          <Button variant="contained" type="submit" sx={{ backgroundColor: '#3d0ba9'}}>
            Sign In
          </Button>
          <Button
            variant="contained"
            startIcon={<GoogleIcon />}
            type="button"
            sx={{ marginLeft: "1.5em", backgroundColor: '#3d0ba9' }}
          >
            Sign In with Google
          </Button>
        </ButtonDiv>
      </form>
    </SignInDiv>
  );
};

export default SignIn;
