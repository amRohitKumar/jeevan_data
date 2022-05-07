import Paper from "@mui/material/Paper";

import styled from "@emotion/styled";

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

export const NewsImage = styled('img')({
    maxHeight: '200px',
    maxWidth: '200px',
    marginBottom: '1em',
});

export const NewsContent = styled('div')({
});