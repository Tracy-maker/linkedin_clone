import React from "react";
import styled from "styled-components";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";

const WidgetsContainer = styled.div`
  position: sticky;
  top: 80px;
  flex: 0.2;
  background-color: white;
  border-radius: 10px;
  border: 1px solid lightgray;
  height: fit-content;
  padding-bottom: 10px;
`;

const WidgetsHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
`;

const HeaderTitle = styled.h2`
  font-size: 16px;
  font-weight: 400;
`;

const WidgetsArticle = styled.div`
  display: flex;
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: whitesmoke;
  }
`;

const ArticleLeft = styled.div`
  color: #0177b7;
  margin-right: 5px;

  & > .MuiSvgIcon-root {
    font-size: 15px;
  }
`;

const ArticleRight = styled.div`
  flex: 1;

  & > h4 {
    font-size: 14px;
  }

  & > p {
    font-size: 12px;
    color: gray;
  }
`;

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <WidgetsArticle>
      <ArticleLeft>
        <FiberManualRecordIcon />
      </ArticleLeft>
      <ArticleRight>
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </ArticleRight>
    </WidgetsArticle>
  );

  return (
    <WidgetsContainer>
      <WidgetsHeader>
        <HeaderTitle>LinkedIn News</HeaderTitle>
        <InfoIcon />
      </WidgetsHeader>
      {newsArticle("React is back", "Top news - 9 readers")}
      {newsArticle("Vue.js is back", "Top news - 909 readers")}
      {newsArticle("React-Redux is back", "Top news - 999 readers")}
      {newsArticle("Java is back", "Top news - 90 readers")}
      {newsArticle("Next.js is back", "Top news - 99 readers")}
      {newsArticle("Tailwind css is back", "Top news - 9099 readers")}
    </WidgetsContainer>
  );
}

export default Widgets;
