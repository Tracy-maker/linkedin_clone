import styled from "styled-components";
import { Avatar } from "@material-ui/core";

const HeaderOptionContainer = styled.div`
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

const HeaderOptionTitle = styled.h3`
  font-size: 12px;
  font-weight: 400;
`;

const HeaderOptionIcon = styled.img`
  margin-top: 5px;
  object-fit: contain;
  height: 25px;
  width: 25px;
`;

const HeaderOption = ({ avatar, Icon, title }) => {
  return (
    <HeaderOptionContainer>
    <HeaderOptionIcon as={Icon} />
      {avatar && <Avatar src={avatar} />}
      <HeaderOptionTitle>{title}</HeaderOptionTitle>
    </HeaderOptionContainer>
  );
};

export default HeaderOption;
