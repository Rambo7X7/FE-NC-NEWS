import React, { useState, useEffect } from "react";

const TopicList = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("https://back-end-nna.onrender.com/api/topics")
      .then((res) => res.json())
      .then((data) => setTopics(data.topics));
  }, []);

  return (
    <ul>
      {topics.map((topic) => (
        <li key={topic.slug}>{topic.description}</li>
      ))}
    </ul>
  );
};

export default TopicList;
