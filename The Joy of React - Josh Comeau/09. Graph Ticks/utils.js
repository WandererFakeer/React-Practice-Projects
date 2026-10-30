function range(start, stop, step = 1) {
  const rangeArray = [];

  for (let i = start; i <= stop; i += step) {
    rangeArray.push(i);
  }

  return rangeArray;
}

export default range;
