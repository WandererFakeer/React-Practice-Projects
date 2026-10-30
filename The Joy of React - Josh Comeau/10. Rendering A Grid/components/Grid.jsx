import range from "../utils.js";

function Grid({ numRows, numCols }) {

const rangeArray = range(numRows, numCols);

  return (
    <div className="container">
      {rangeArray.map((row, outerIndex) => {
        return (
          <div key={outerIndex} className="row">
            {row.map((_, innerIndex) => {
              return <div key={innerIndex} className="column" />;
            })}
          </div>
        );
      })}
    </div>
  );
}

export default Grid;
