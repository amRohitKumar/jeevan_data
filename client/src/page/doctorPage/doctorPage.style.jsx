import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

export const DoctorPageDiv = styled('div')({
    // display: 'flex',
    // flexDirection: 'column',
    // alignContent: 'center',
    // justifyContent: 'center',
});

export const DoctorPageHeading = styled('div')({
    background: 'linear-gradient(74.52deg,#3900B8 -8.12%,#950D6F 80.5%)',
    padding: '1em 2em 2em 1em',
    width: '100%',
    color: 'rgba(255,255,255,1)',
    fontSize: '3em',
    letterSpacing: '1.5px',
    fontWeight: '500',
});

export const DoctorPageContent = styled(Paper)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    width: '60%',
    margin: '3em auto',
    
});