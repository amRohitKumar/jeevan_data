import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';  
import { HeroDiv, MainTitle, MainHeading, LoginButton, DoctorImg } from "./hero.styles";

import DoctorImage from '../../assets/svg/doctorImage.svg';
import HeroPageDivider from '../../assets/svg/heroPageDivider.svg';

const Hero = () => {
    return(
        <>
            <HeroDiv>
                <MainTitle> The best privacy online </MainTitle>
                <MainHeading>3x faster than Chrome. Better protection from Google and Big Tech.</MainHeading>
                <LoginButton startIcon={<HealthAndSafetyIcon />} size="large" >Login</LoginButton>
                <DoctorImg src={DoctorImage} alt="Medical consultation" />
                <img src={HeroPageDivider} alt="Divider"/>
            </HeroDiv>
        </>
    );
}

export default Hero;