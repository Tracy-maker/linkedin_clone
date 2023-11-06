import React from "react";
import styled from "styled-components";

const HeaderOption = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 20px;
  color: gray;
  cursor: pointer;

  &:hover {
    color: black;
  }
`;

const HeaderOptionTitle = styled.span`
  font-size: 12px;
  font-weight: 400;
`;

const HeaderOptionIcon = styled.img`
  object-fit: contain;
  height: 25px;
  width: 25px;
`;


function HeaderOption(Icon, title) {
  return <div></div>;
}

export default HeaderOption;
