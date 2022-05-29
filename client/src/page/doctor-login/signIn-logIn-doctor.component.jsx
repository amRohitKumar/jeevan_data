import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

import { SignInLogInDiv } from "../login/signIn-logIn.style";

const SignInAndSignUpPageDoctor = () => (
    <SignInLogInDiv>
        <SignIn isDoctor={true}/>
        <SignUp isDoctor={true}/>
    </SignInLogInDiv>
 
)

export default SignInAndSignUpPageDoctor;