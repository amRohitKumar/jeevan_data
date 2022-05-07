import { useState, useEffect } from "react";

import Typography from "@mui/material/Typography";
import CircularProgress from "@mui/material/CircularProgress";
import Pagination from "@mui/material/Pagination";

import NewsComponent from "../../components/newsComponent/news.component";
import { ArticlePageDiv, ArticleSection } from "./articlePage.style";

const ArticlePage = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(0);
  const url =
    "https://newsdata.io/api/1/news?apikey=pub_7159bd3ae98027ca718bda53d01c37af40cd&country=in&category=health&language=en";

  useEffect(() => {
    fetch(url + `&page=${page}`)
      .then((response) => response.json())
      .then((response) => {
        setNews(response.results);
      });
  }, [page]);

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
      <Pagination
        count={10}
        color="secondary"
        sx={{ mx: "auto", mt: "2em" }}
        onChange={(e, v) => {
          setPage(v - 1);
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      />
    </ArticlePageDiv>
  );
};

export default ArticlePage;
