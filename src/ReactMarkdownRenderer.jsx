import React from 'react';
import { marked } from 'marked';

const ReactMarkdownRenderer = ({ markdown }) => {
  const getMarkdownText = () => {
    const rawMarkup = marked(markdown, { sanitize: true });
    return { __html: rawMarkup };
  };

  return <div dangerouslySetInnerHTML={getMarkdownText()} />;
};

export default ReactMarkdownRenderer;
