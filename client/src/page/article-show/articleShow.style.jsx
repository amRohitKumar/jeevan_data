import styled from "@emotion/styled";
import Paper from "@mui/material/Paper";

export const StyledDiv = styled(Paper)({
    padding: '2em 3em',
    margin: '1em 2em', 
    display: 'flex',
    flexDirection: 'column',
});

export const ShwoHeading = styled('div')({
    fontSize: '3em',
    textAlign: 'center',
    fontWeight: '500',
    '@media (max-width:750px)': {
        fontSize: '2em',  
    }
});

export const ArticleDetils = styled('div')({
    margin: '2em 0',
});

export const ShowImage = styled('img')({
    margin: '1em 1em',
    height: '350px',
    marginRight: 'auto',
    marginLeft: 'auto',
    '@media (max-width:750px)': {
        height: '150px',  
    }
});
