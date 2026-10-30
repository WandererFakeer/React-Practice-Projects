import range from "../utils.js";

function Graph({ from, to }) {
  const fullRange = range(from, to, 10);

  return (
    <figure>
      <div className="scale-line"></div>
      <ul>
        {fullRange.map((peg) => {
          return (
            <li key={peg} className="peg">
              {peg}
            </li>
          );
        })}
      </ul>
    </figure>
  );
}

export default Graph;
