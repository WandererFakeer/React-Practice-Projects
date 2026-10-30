function Avatar({ src, alt }) {
  return (
    <button className="avatar-button" type="button">
      <img className="avatar" src={src} alt={alt} />
    </button>
  );
}

export default Avatar;
