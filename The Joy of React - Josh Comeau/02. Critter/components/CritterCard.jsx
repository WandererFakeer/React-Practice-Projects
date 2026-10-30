function CritterCard({
  avatar,
  avatarDescription,
  handle,
  name,
  messageContent, 
  rawDate,
  formattedDate,
}) {
  return (
    <article>
      <header>
        <img src={avatar} alt={avatarDescription} className="avatar" />
        <a href={handle} className="handle">
          {name}
        </a>
      </header>

      <p>{messageContent}</p>

      <footer>
        Posted {}
        <time dateTime={rawDate}>{formattedDate}</time>
      </footer>
    </article>
  );
}

export default CritterCard;
