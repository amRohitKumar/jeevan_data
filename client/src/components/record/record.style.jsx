import Paper from '@mui/material/Paper';

import styled from "@emotion/styled";

export const RecodComponentDiv = styled(Paper)({
    display: 'flex',
    width: '65%',
    // border: '1px solid red',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2em 2em',
    padding: '2em 2em',
    borderRadius: '5px',
    '@media (max-width:1000px)': {
        flexDirection: 'column !important',
    },
    '@media (max-width:800px)': {
        width: '95%',
    }
});

export const RecordImage = styled('img')({
    width: '250px',
    height: '250px',
    borderRadius: '7px',
});

export const RecordContent = styled('div')({
    // width: '',
    padding: '2em 2em',
    '@media (max-width:550px)': {
        padding: '1em 1em',
    }
});

export const WrapperDiv = styled('div')({
    display: 'flex',
    '@media (max-width:550px)': {
        flexWrap: 'wrap',
    }
})