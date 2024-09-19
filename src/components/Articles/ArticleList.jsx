import React, { useEffect, useState } from "react";
import ArticleCard from "./ArticleCard";
import axios from "axios";

const ArticleList = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://back-end-nna.onrender.com/api/articles")
      .then((response) => {
        setArticles(response.data.articles);
        setIsLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <p>Loading articles...</p>;
  }

  if (!articles || articles.length === 0) {
    return <p>No articles available.</p>;
  }

  return (
    <div>
      {articles.map((article) => (
        <ArticleCard key={article.article_id} article={article} />
      ))}
    </div>
  );
};

export default ArticleList;
