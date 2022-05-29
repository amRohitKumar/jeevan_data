import { useNavigate } from "react-router-dom";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import {
  HeroDiv,
  MainTitle,
  MainHeading,
  LoginButton,
  DoctorImg,
} from "./hero.styles";

import DoctorImage from "../../assets/svg/doctorImage.svg";
import HeroPageDivider from "../../assets/svg/heroPageDivider.svg";
import ButtonGroup from "@mui/material/ButtonGroup";

const Hero = () => {
  const navigate = useNavigate();
  return (
    <>
      <HeroDiv>
        <MainTitle> Your online doctor </MainTitle>
        <MainHeading>
          All digonosis are done on high level made ML model with an accuracy of
          over 90%
        </MainHeading>
        <ButtonGroup sx={{gap: '1em'}}>
            <LoginButton
            startIcon={<HealthAndSafetyIcon />}
            size="large"
            onClick={() => navigate("/loginuser")}
            >
            Login as User
            </LoginButton>
            <LoginButton
            startIcon={<LocalHospitalIcon />}
            size="large"
            onClick={() => navigate("/logindoctor")}
            >
              Login as Doctor
            </LoginButton>
        </ButtonGroup>
        <DoctorImg src={DoctorImage} alt="Medical consultation" />
        <img src={HeroPageDivider} alt="Divider" />
      </HeroDiv>
    </>
  );
};

export default Hero;
