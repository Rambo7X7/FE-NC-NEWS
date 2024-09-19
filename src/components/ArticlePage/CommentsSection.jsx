import React, { useState, useEffect } from "react";

const CommentsSection = ({ articleId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(
      `https://back-end-nna.onrender.com/api/articles/${articleId}/comments`
    )
      .then((res) => res.json())
      .then((data) => setComments(data.comments));
  }, [articleId]);

  return (
    <div>
      <h3>Comments</h3>
      {comments.length > 0 ? (
        comments.map((comment) => (
          <div key={comment.comment_id}>
            <p>{comment.body}</p>
            <small>
              by {comment.author} on{" "}
              {new Date(comment.created_at).toLocaleDateString()}
            </small>
            <hr />
          </div>
        ))
      ) : (
        <p>No comments yet.</p>
      )}
    </div>
  );
};

export default CommentsSection;
