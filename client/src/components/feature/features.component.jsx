import { FeaturesDiv, FeatureHeading, FeaturesSection } from "./features.style";
import FeatureComponent from "./featureComponent.component";
import { featuresArray } from "./features";

const Features = () => {
    return(
        <FeaturesDiv>
            <FeatureHeading>
                Features - 
            </FeatureHeading>
            <FeaturesSection>
                {
                    featuresArray.map(feature => <FeatureComponent {...feature} />)
                }
            </FeaturesSection>
        </FeaturesDiv>
    )
}

export default Features;