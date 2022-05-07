import { styled } from "@mui/system";

export const FeaturesDiv = styled('div')({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: '0 5em',
});

export const FeatureHeading = styled('div')({
    fontSize: '4em',
    marginRight: 'auto',
    fontWeight: '600',
    letterSpacing: '1.5px',
    marginBottom: '0.5em', 
});

export const FeaturesSection = styled('div')({
    display: 'flex',
    // flexWrap: 'wrap',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
});

export const FeatureDiv = styled('div')({
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: '2em 1em',
    padding: '1em 2em',
    flexDirection: 'row',
    width: '70%',
    backgroundColor: '#e6cdf220',
    borderRadius: '1.5em',
    '&:nth-of-type(2n)': {
        flexDirection: 'row-reverse',
    },
    '@media (max-width:800px)': {
        flexDirection: 'column !important',
    },
});

export const FeatureContent = styled('div')({
    margin: '1em 0',
    textAlign: 'center',
    fontSize: '1em',
    fontWeight: '400',
    width: '55%',
});

export const FeatureImg = styled('img')({
    minHeight: '300px',
    width: '300px',
});