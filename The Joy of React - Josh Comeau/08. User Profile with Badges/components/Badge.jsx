function Badge({ array }) {
  return (
    <>
      {array.length > 0 && (
        <ul className={array.length > 2 ? "golden badges" : "badges"}>
          {array.map(({ slug, label }) => {
            return (
              <li key={slug} className="badge">
                {label}
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
}

export default Badge;
