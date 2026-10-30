function range(numRows, numCols, step = 1) {
  const rangeArray = [];

  for (let i = 1; i <= numRows; i += step) {
    const columnArray = [];

    for (let j = 1; j <= numCols; j += step) {
      columnArray.push(j);
    }

    rangeArray.push(columnArray);
  }

  return rangeArray;
}

export default range;
