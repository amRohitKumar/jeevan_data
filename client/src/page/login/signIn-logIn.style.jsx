import styled from "@emotion/styled"

export const SignInLogInDiv = styled('div')({
    width: '60%',
    display: 'flex',
    justifyContent: 'space-around',
    margin: '2em auto',     
    '@media (max-width:1000px)': {
        flexDirection: 'column',
    } 
});