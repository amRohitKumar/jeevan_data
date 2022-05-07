import { styled } from "@mui/system";

export const FooterDiv = styled('div')({
    // flexDirection: 'column',
    backgroundColor: '#2c2c35',
    marginTop: '3em',
    // position: 'fixed',
    // bottom: '0',
    // left: '0',
    width: '100%',
    '& img': {
        overflow: 'hidden',  
    }
});

export const FooterContent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    height: '2em',
    color: 'white',
    padding: '0 3em',
    fontSize: '1.5em',
    paddingBottom: '0.5em',
});