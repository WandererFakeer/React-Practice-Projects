import movieData from "../data.js";

import Movie from "./Movie.jsx";

function App() {
  return (
    <main>
      {movieData.map(({ id, posterSrc, title, synopsis, rating }) => {
        return (
          <Movie
            key={id}
            posterSrc={posterSrc}
            title={title}
            synopsis={synopsis}
            rating={rating}
          />
        );
      })}
    </main>
  );
}

export default App;
