import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import InputOption from "../InputOption/InputOption";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import { useEffect, useState } from "react";
import { addPost, getPost } from "../../firebase";
import Post from "../Post/Post";

const FeedContainer = styled.div`
  flex: 0.6;
  margin: 0 20px;
`;

const FeedInputContainer = styled.div`
  background-color: white;
  padding: 10px;
  padding-bottom: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
`;

const FeedInput = styled.div`
  border: 1px solid lightgray;
  border-radius: 30px;
  display: flex;
  padding: 10px;
  color: gray;
  padding-left: 15px;

  form {
    display: flex;
    width: 100%;
  }

  form input {
    border: none;
    flex: 1;
    margin-left: 10px;
    outline: 0;
    font-weight: 600;
  }

  form button {
    display: none;
  }
`;

const FeedInputOptions = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

function Feed() {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  
  return (
    <FeedContainer>
      <FeedInputContainer>
        <FeedInput>
          <CreateIcon />
          <form>
            <input
              type="text"
             
            />
            <button  type="submit">
              Send
            </button>
          </form>
        </FeedInput>
        <FeedInputOptions>
          <InputOption Icon={ImageIcon} title="Photo" color="#70BFF9" />
          <InputOption Icon={SubscriptionsIcon} title="Video" color="#E7A33E" />
          <InputOption Icon={EventNoteIcon} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDayIcon}
            title="Write article"
            color="#7FC15E"
          />
        </FeedInputOptions>
      </FeedInputContainer>
      {posts.map(({ id, data: { name, description, photoUrl, message } }) => (
        <Post
          key={id}
          name={name}
          description={description}
          photourl={photoUrl}
          message={message}
        />
      ))}
    </FeedContainer>
  );
}

export default Feed;
