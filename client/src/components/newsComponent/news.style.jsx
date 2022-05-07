import Paper from "@mui/material/Paper";

import styled from "@emotion/styled";
import Logo from '../../assets/images/jeevan-data-logo.png';


export const NewsComponentDiv = styled(Paper)({
    width: '300px',
    height: '450px',
    margin: '1em 2em',
    padding: '0.5em 1em',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
});

export const NewsImage = styled('div')(({imageUrl}) => {
    let val = 1;
    if(!imageUrl){
        imageUrl = Logo;
        val = 0.5;
    }
    return {
        height: '200px',
        width: '200px',
        marginBottom: '1em',
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: `${val}`,
    }
});

export const NewsContent = styled('div')({
});