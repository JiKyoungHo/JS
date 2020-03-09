//저기서 최대 값을 구해서 출력해라.
function max(...rest) {
  return rest.reduce(
    (acc, current) => (current > acc ? current : acc),
    rest[0]
  );
}

const result = max(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result);

function max1(...rest) {
  let m = 1;
  for (let i = 0; i < rest.length; i++) {
    if (m > rest[i]) {
    } else {
      m = rest[i];
    }
  }
  return m;
}

const result1 = max1(1, 2, 3, 4, 10, 5, 6, 7);
console.log(result1);
