function sample(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function range(start, end, step = 1) {
  const array = [];

  if (typeof end === "undefined") {
    end = start;
    start = 0;
  }

  for (let i = start; i < end; i += step) {
    array.push(i);
  }

  return array;
}

export { sample, range };
