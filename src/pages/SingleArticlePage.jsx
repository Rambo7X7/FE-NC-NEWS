import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ArticleContent from "../components/ArticlePage/ArticleContent";
import CommentsSection from "../components/ArticlePage/CommentsSection";

const SingleArticlePage = () => {
  const { articleId } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    fetch(`https://back-end-nna.onrender.com/api/articles/${articleId}`)
      .then((res) => res.json())
      .then((data) => setArticle(data.article));
  }, [articleId]);

  return (
    <div>
      {article ? (
        <>
          <ArticleContent article={article} />
          <CommentsSection articleId={articleId} />
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default SingleArticlePage;
