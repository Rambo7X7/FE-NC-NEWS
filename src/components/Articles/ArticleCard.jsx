import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
  return (
    <div>
      <h3>{article.title}</h3>
      <p>Author: {article.author}</p>
      <p>{article.comment_count} comments</p>
      <Link to={`/articles/${article.article_id}`}>Read more</Link>
    </div>
  );
};

export default ArticleCard;
