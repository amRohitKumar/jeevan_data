import { styled } from "@mui/system";
import Button from '@mui/material/Button';
import HeroPageBackground from '../../assets/svg/browser-embellishments.svg';


export const HeroDiv = styled('div')({
    height: 'max-content',
    backgroundImage: 'linear-gradient(121.55deg,#3C0BA9 17.34%,#930FA8 113.19%)',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginBottom: '10px',
    overfloX: 'hidden',
    position: 'relative',
    top: '0',
    '&::before' : {
        content: '""',
        backgroundImage: `url(${HeroPageBackground})`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        top: '300px',
    }
});

export const MainTitle = styled('div')({
    fontSize: '4em',
    fontWeight: '700',
    color: 'white',
    letterSpacing: '1.5px',
    marginTop: '6rem',
    padding: '0 1em',
    '@media (max-width:580px)': {
        fontSize: '3em',
        letterSpacing: '1px',
        marginTop: '3rem',
    }
});

export const MainHeading = styled('div')({
    fontSize: '1.8em',
    fontWeight: '500',
    color: 'white',
    letterSpacing: '1.5px',
    marginTop: '10px',
    padding: '0 1em',
    '@media (max-width:580px)': {
        fontSize: '1.2em',
        letterSpacing: '1px',
    }
});

export const LoginButton = styled(Button)({
    cursor: 'pointer',
    margin: '50px 0',
    padding: '10px 15px',
    fontSize: '15px',
    color: 'white',
    backgroundColor: '#a440fc4b',
    borderRadius: '5px',
    letterSpacing: '2px',
});

export const DoctorImg = styled('img')({
    height: '500px',
    marginBottom: '50px',
    zIndex: '2',
    padding: '0 1em',
    '@media (max-width:580px)': {
        height: '250px',
        letterSpacing: '1px',
    }
})