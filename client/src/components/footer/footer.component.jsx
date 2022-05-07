import { FooterDiv, FooterContent } from "./footer.style"; 
import FooterDivider from '../../assets/svg/footerDivider.svg';

const Footer = () => {
    return(
        <FooterDiv>
            <img src={FooterDivider} alt="Divider"/>
            <FooterContent>
                Jeevan.Data 👩‍⚕️
            </FooterContent>
        </FooterDiv>
    )
};

export default Footer;