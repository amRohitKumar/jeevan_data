import Typography from "@mui/material/Typography";
import { useLocation } from "react-router-dom";
import {
  StyledDiv,
  ShwoHeading,
  ArticleDetils,
  ShowImage,
} from "./articleShow.style";

const ArticleShowPage = () => {
  const location = useLocation();
  const newsObj = location.state;
  return (
    <StyledDiv elevation={3}>
      <ShwoHeading> {newsObj.title}</ShwoHeading>
      <ArticleDetils>
        <Typography variant="overline" display="block" gutterBottom>
          Updated At: {newsObj.pubDate}
          <br />
          Category: {newsObj.category}
        </Typography>
      </ArticleDetils>
      {newsObj.image_url && (
        <ShowImage src={newsObj.image_url} alt="Article Image" />
      )}
      <Typography varient="body1" display="block" sx={{my: '2em'}}>
        {newsObj.content || newsObj.description}
      </Typography>
    </StyledDiv>
  );
};

export default ArticleShowPage;
