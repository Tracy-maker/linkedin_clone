import styled from "styled-components";
import CreateIcon from "@mui/icons-material/Create";
import ImageIcon from "@mui/icons-material/Image";
import SubscriptionsIcon from "@mui/icons-material/Subscriptions";
import EventNoteIcon from "@mui/icons-material/EventNote";
import CalendarViewDayIcon from "@mui/icons-material/CalendarViewDay";
import InputOption from "../InputOption/InputOption";
import Post from "../Post";
import { useEffect, useState } from "react";
import { db } from "../../firebase";
import firebase from "firebase";

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

  const sendPost = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      name: "Rita",
      describe: "This is a article",
      message: input,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
  };

  return (
    <FeedContainer>
      <FeedInputContainer>
        <FeedInput>
          <CreateIcon />
          <form>
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              type="text"
            />
            <button onClick={sendPost} type="submit">
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
