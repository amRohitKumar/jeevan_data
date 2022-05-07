import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';  
import { HeroDiv, MainTitle, MainHeading, LoginButton, DoctorImg } from "./hero.styles";

import DoctorImage from '../../assets/svg/doctorImage.svg';
import HeroPageDivider from '../../assets/svg/heroPageDivider.svg';

const Hero = () => {
    return(
        <>
            <HeroDiv>
                <MainTitle> Your online doctor </MainTitle>
                <MainHeading>All digonosis are done on high level made ML model with an accuracy of over 90%</MainHeading>
                <LoginButton startIcon={<HealthAndSafetyIcon />} size="large" >Login</LoginButton>
                <DoctorImg src={DoctorImage} alt="Medical consultation" />
                <img src={HeroPageDivider} alt="Divider"/>
            </HeroDiv>
        </>
    );
}

export default Hero;