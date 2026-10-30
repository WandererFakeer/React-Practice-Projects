function ProfileHeader({ imageSrc, imageAlt, name, joinDate }) {
  return (
    <article className="profile-header">
      <figure>
        <img className="profile-picture" src={imageSrc} alt={imageAlt} />
      </figure>

      <h2 className="name">{name}</h2>
      <p className="join-date">Joined {joinDate}</p>
    </article>
  );
}

export default ProfileHeader;
