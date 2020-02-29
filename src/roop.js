const numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number, numbers[number - 1]);
}

for (let i = 0; i < numbers.length; i++) {
  console.log(numbers[i]);
}

const dog = {
  name: "멍이",
  sound: "멍",
  age: 2
};

//객체를 배열로써 받는 방법
console.log(Object.entries(dog));
console.log(Object.keys(dog));
console.log(Object.values(dog));

for (let key in dog) {
  console.log(`${key}: ${dog[key]}`);
}

for (let i in dog) {
  console.log(i, dog[i]);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    continue; //특정조건만족시 다음 작업 실행 ->2출력 x
  }
  console.log(i);
  if (i === 5) {
    break;
  }
}
