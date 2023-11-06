import styled from 'styled-components';
import { Avatar } from '@mui/material';
import InputOption from '../InputOption/InputOption';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import SendIcon from '@mui/icons-material/Send';

const PostContainer = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 10px;
  border-radius: 10px;
`;

const PostHeader = styled.div`
  display: flex;
  margin-bottom: 10px;
  align-items: center;
`;

const PostInfo = styled.div`
  margin-left: 10px;
  font-size: 16px;

  p {
    font-size: 12px;
    color: gray;
  }
`;

const PostBody = styled.div`
  overflow-wrap: anywhere;
`;

const PostButton = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Post({ name, description, message, photourl }){
  return (
    <PostContainer>
      <PostHeader>
        <Avatar src={photourl} />
        <PostInfo>
          <h2>{name}</h2>
          <p>{description}</p>
        </PostInfo>
      </PostHeader>
      <PostBody>
        <p>{message}</p>
      </PostBody>
      <PostButton>
        <InputOption Icon={ThumbUpOffAltIcon} title="Like" color="gray" />
        <InputOption Icon={ChatBubbleOutlineIcon} title="Comment" color="gray" />
        <InputOption Icon={ShareIcon} title="Share" color="gray" />
        <InputOption Icon={SendIcon} title="Send" color="gray" />
      </PostButton>
    </PostContainer>
  );
};

export default Post;
