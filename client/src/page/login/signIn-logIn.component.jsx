import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInLogInDiv } from "./signIn-logIn.style";

const SignInAndSignUpPage = () => (
    <SignInLogInDiv>
        <SignIn />
        <SignUp />
    </SignInLogInDiv>
 
)

export default SignInAndSignUpPage;