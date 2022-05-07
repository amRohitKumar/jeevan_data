import Typography from "@mui/material/Typography";
import { FeatureDiv, FeatureContent, FeatureImg } from "./features.style"

const FeatureComponent = ({content, imageUrl, heading}) => {
    return(
        <FeatureDiv>
            <FeatureImg src={imageUrl} alt="feature"/>
            <FeatureContent>
            <Typography variant="h4" gutterBottom component="div" sx={{letterSpacing: '1.5px'}}>
                {heading}
            </Typography>
                {content}
            </FeatureContent>
        </FeatureDiv>
    )
}

export default FeatureComponent;