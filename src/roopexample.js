function sum(num) {
  let sum = 0;
  for (let i = 0; i < num.length; i++) {
    sum += num[i];
  }
  return sum;
}
const result = sum([1, 2, 3, 4, 5]);
console.log(result);

//배열 원소 중에 3보다 큰거를 새로운 배열로 출력
function biggerThanThree(numbers) {
  var j = 0;
  var jj = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
      jj[j] = numbers[i];
      j++;
    }
  }
  return jj;
}

const numbers = [1, 2, 3, 4, 5, 6, 7];
console.log(biggerThanThree(numbers)); // [4, 5, 6, 7]

export default biggerThanThree;
