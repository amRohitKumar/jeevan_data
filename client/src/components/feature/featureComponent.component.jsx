import { FeatureDiv, FeatureContent, FeatureImg } from "./features.style"

const FeatureComponent = ({content, imageUrl}) => {
    return(
        <FeatureDiv>
            <FeatureImg src={imageUrl} alt="feature"/>
            <FeatureContent>
                {content}
            </FeatureContent>
        </FeatureDiv>
    )
}

export default FeatureComponent;