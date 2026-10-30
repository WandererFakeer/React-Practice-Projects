import formatDate from "../helperFunctions/formatDate.js";
import message from "../data.js";

import CritterCard from "./CritterCard";

const profile = `/users/${message.author.handle}`;

function App() {
  return (
    <CritterCard
      avatar={message.author.avatarSrc}
      avatarDescription={message.author.avatarDescription}
      handle={profile}
      name={message.author.name}
      messageContent={message.content}
      rawDate={message.published}
      formattedDate={formatDate(message.published)}
    />
  );
}

export default App;
