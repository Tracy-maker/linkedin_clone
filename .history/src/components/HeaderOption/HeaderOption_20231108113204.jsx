import styled from "styled-components";
import { Avatar } from "@material-ui/core";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";

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

function HeaderOption({ avatar, Icon, title, onClick }) {
  const user = useSelector(selectUser);
  return (
    <HeaderOptionContainer onClick={onClick}>
      {Icon && <HeaderOptionIcon as={Icon} />}
      {avatar && <Avatar src={user?.photoUrl} />}
      <HeaderOptionTitle>{title}</HeaderOptionTitle>
    </HeaderOptionContainer>
  );
}

export default HeaderOption;
