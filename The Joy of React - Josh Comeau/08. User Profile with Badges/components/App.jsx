import userProfiles from "../data.js";

import ProfileHeader from "./ProfileHeader.jsx";

import Badge from "./Badge.jsx";

function App() {
  return (
    <ul className="profiles">
      {userProfiles.map(
        ({ id, imageSrc, imageAlt, name, joinDate, badges }) => {
          return (
            <li key={id} className="profile-card">
              <ProfileHeader
                imageSrc={imageSrc}
                imageAlt={imageAlt}
                name={name}
                joinDate={joinDate}
              />
              <Badge array={badges} />
            </li>
          );
        },
      )}
    </ul>
  );
}

export default App;
