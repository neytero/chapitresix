import React from 'react';

const HistoryPage = ({ content }) => {
  return (
    <div>
      <h1>{content.title}</h1>
      <p>{content.text}</p>
    </div>
  );
};

export default HistoryPage;
