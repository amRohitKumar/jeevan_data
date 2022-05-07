import styled from "@emotion/styled";
import BGImage from '../../assets/images/background2.png';


export const HomeDiv = styled('div')({

});

export const HomeHeading = styled('div')({
    color: '#fff',
    backgroundImage: `url(${BGImage}), linear-gradient(142deg,#00a0f8 1%,#052675 100%)`,
    padding: '1.2em 3.5em',
    fontSize: '2.8em',
    fontWeight: 'bold',
    letterSpacing: '1.5px',
    backgroundPosition: 'center',
    '@media (max-width:580px)': {
        padding: '0.5em, 1.5em',
        fontSize: '2em',
        letterSpacing: '1.1px',
    }
});

export const HomeContent = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    padding: '2em 3em',
});

export const HomeLeftDiv = styled('div')({
    width: '40%',
});

export const HomeRightDiv = styled('div')({
    width: '45%',   
});

export const FileInput = styled('div')({
    // margin: '2em 0',
    display: 'flex',
    gap: '2em',
    fontSize: '1.2em',
    '& label': {
        margin: '20px 0',
        letterSpacing: '1.1px',
    }
});