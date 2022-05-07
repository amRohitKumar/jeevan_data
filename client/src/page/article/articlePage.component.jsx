import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";

import NewsComponent from "../../components/newsComponent/news.component";
import { ArticlePageDiv, ArticleSection } from "./articlePage.style";

const ArticlePage = () => {
  const [news, setNews] = useState([]);
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_7159bd3ae98027ca718bda53d01c37af40cd&country=in&category=health&language=en";

  useEffect(() => {
    fetch(url)
      .then(response => response.json())
      .then((response) => {
        setNews(response.results);
      });
  }, []);

  return (
    <ArticlePageDiv>
      <Typography
        variant="h2"
        component="div"
        sx={{ mb: "10px", ml: "1.5em", fontWeight: "400" }}
      >
        Latest health articles -
      </Typography>
      <ArticleSection>
        {news.length ? (
          news.map((obj, ind) => (
            <NewsComponent
              key={ind}
              newsObject={obj}
            />
          ))
        ) : (
          <CircularProgress />
        )}
      </ArticleSection>
    </ArticlePageDiv>
  );
};

export default ArticlePage;
