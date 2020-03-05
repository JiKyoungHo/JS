//숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.
function countBiggerThanTen(numbers) {
  /* 구현해보세요 */
  //1번 방법 foreach()
  /*
  let count = 0;
  numbers.forEach(n => {
    if (n > 10) {
      console.log(n)
      count++;

    }
  });
  return count;
  */

  //2번 방법 filter()
  /*
  let arr = numbers.filter(m => (m > 10) )
  console.log(arr)
return arr.length;

}*/
  //3번 reduce()
  //함수에 reduce 사용하여 리턴값 자체가 된다.
  // acc는 0부터 10보다 크면 1씩 증가 하고 acc를 return
  return numbers.reduce((acc, current) => {
    if (current > 10) {
      console.log(acc, current);
      return acc + 1;
    } else {
      return acc;
    }
  }, 0);
}
const count = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count); // 5

export default countBiggerThanTen;
