import { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const StyledMarkdown = styled(ReactMarkdown)`
  font-size: 16px;
  padding: 2em;
  h1 {
    font-size: 2em;
  }
  p {
    font-size: 18px;
  }
  ul {
    //dotted list
    list-style: disc;
  }
  li {
    //dotted list
    list-style: disc;
  }
`;

function Readme() {
  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch('../README.md')
      .then((response) => response.text())
      .then((text) => setMarkdown(text));
  }, []);

  return <StyledMarkdown>{markdown}</StyledMarkdown>;
}

export default Readme;