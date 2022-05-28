import styled from "@emotion/styled";
import { Paper } from "@mui/material";
import BGImage from '../../assets/images/background2.png';
import BGImage2 from '../../assets/images/background3.png';


export const HomeDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
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
    alignItems: 'center',
    padding: '2em 3em',
    flexDirection: 'column',
});

export const HomeUploadDiv = styled('div')({
    display: 'flex',
    border: '3px dashed #0b64b4',
    padding: '2em 2em',
    width: '60%'
});

export const HomeResultDiv = styled('div')({
    width: '60%', 
    height: '10em',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1em 0',
    padding: '0 2em',
    '&::before' : {
        content: '""',
        backgroundImage: `url(${BGImage2})`,
        width: '100%',
        height: '100%',
        position: 'absolute',
        backgroundRepeat: 'no-repeat',
        top: '0',
        zIndex: '-1',
        opacity: '0.25',
    },
});

export const FileInput = styled('div')({
    // margin: '2em 0',
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '0.5em',
    fontSize: '1.2em',
});

export const DiseaseImg = styled('div')({
    width: '250px',
    height: '250px',
}); 

export const DoctorSuggestionDiv = styled(Paper)({
    margin: "2em 3em",
    padding: '3em 1em',

}); 

export const FileUploadLabel = styled('span')({
    borderRadius: '5px',
    fontWeight: '400',
    padding: '10px 43px',
    fontFamily: "'Open Sans', sans-serif",
    border: '1px solid #1677cb',
    color: '#fff',
    backgroundColor: '#6dace3',
    transition: 'background-color 150ms ease-in',
    cursor: 'pointer',
    '&:hover': {
        backgroundColor: '#3c92dc',
    }
});

export const DropMessageDiv = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
});

export const DropMessageHeaderCSS = {
    fontSize: '22px',
    fontWeight: '600',
    marginTop: '15px',
    marginBottom: '15px',
    letterSpacing: '1.5px',
};

export const PreviewImage = styled('img')({
    width: '40%',
    aspectRatio: '16/9',
    marginBottom: '10px',
})