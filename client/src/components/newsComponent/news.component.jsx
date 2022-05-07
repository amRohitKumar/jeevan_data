import Typography from "@mui/material/Typography";
import { NewsComponentDiv, NewsImage, NewsContent } from "./news.style";

import Logo from '../../assets/images/jeevan-data-logo.png';

const NewsComponent = ({newsObject}) => {
    return(
        <NewsComponentDiv>
            <NewsImage src={newsObject.image_url|| Logo} /> 
            <NewsContent>
                <Typography variant="h6" gutterBottom component="div">
                    {newsObject.title}
                </Typography>
                <br />
                <Typography variant="caption" display="block" gutterBottom>
                    {newsObject.pubDate}
                </Typography>
            </NewsContent>
        </NewsComponentDiv>
    )
};

export default NewsComponent;