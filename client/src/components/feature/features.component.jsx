import { FeaturesDiv, FeatureHeading, FeaturesSection } from "./features.style";
import FeatureComponent from "./featureComponent.component";

const featuresArray = [
    {
        key: 1,
        content: 'dslfjdslkfj dfdflfd ld lfdlf fdlkfjlk dklfj jlkdfjdkl dfjdkl jdkfj klfjkl jfdlk jdklfjdklfj kldfjdlk jdklf jdlkf jdlk jlkfjdlkf jdkl jkldf dlkfjdlkfd dflkjd lkdsjfkl jld fjdslfj kljdslfj lkjdslk jdsklfj lkfjdklj  lkjfl',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        key: 2,
        content: ' dfdsfdslf fdskfjdlkfj ',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        key: 3,
        content: 'dfdsfdslf fdskfjdlkfj ',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        key: 4,
        content: 'fdskfjdlkfj ',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        key: 5,
        content: 'fdskfjdlkfj ',
        imageUrl: 'https://picsum.photos/200'
    },
    {
        key: 6,
        content: 'fdskfjdlkfj ',
        imageUrl: 'https://picsum.photos/200'
    },
    
]

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