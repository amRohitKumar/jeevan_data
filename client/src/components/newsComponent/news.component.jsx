import { useNavigate } from "react-router-dom";

import Typography from "@mui/material/Typography";
import { NewsComponentDiv, NewsImage, NewsContent } from "./news.style";

const NewsComponent = ({ newsObject }) => {
  const navigate = useNavigate();
  return (
    <NewsComponentDiv
      sx={{ cursor: "pointer" }}
      onClick={() => navigate("/showarticle", {state: newsObject})}
    >
      <NewsImage imageUrl={newsObject.image_url} />
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
  );
};

export default NewsComponent;
