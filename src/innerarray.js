const todos = [
  {
    id: 1,
    text: "js",
    done: true
  },
  {
    id: 2,
    text: "function",
    done: true
  },
  {
    id: 3,
    text: "객체",
    done: true
  },
  {
    id: 4,
    text: "array",
    done: false
  }
];
const tasksNotDone = todos.filter(todo => todo.done === true);
//todo.done   -> true 값 출력   !todo.done -> flase 값 출력
//todo라는 함수 파라미터로 가져와서 todo.done 값으로 새로운 배열 생성
console.log(tasksNotDone);
//저 배열 중 done 값이 true인거만 출력

const num = [1, 2, 3, 4, 5];
const index = num.indexOf(3); //탐색의 대상의 index -> 3은 num[2]
console.log(index);
// 지우고 싶은 index의 위치

num.splice(1, 2, "a", "b"); // 배열의 [1]위치부터 2개 추출하고 a,b 삽입
console.log(num); //기존 배열 값 바뀜

const num2 = [10, 20, 30, 40];
const u = num2.slice(0, 2);
console.log(u);

const num3 = [1, 2, 3, 4, 5];
const value = num3.shift(); //value에 첫번째값을 빼고 value에 넣는다
console.log(num3.shift()); //첫번째 값을 출력
console.log(value); //1을 뺏다.
console.log(num3); //변경된 배열 num3

const num5 = [1, 2, 3, 4, 5];
const value3 = num5.unshift(10); // 앞에 추가
console.log(value3);
console.log(num5.unshift(111));
console.log(num5);

const num4 = [1, 2, 3, 4, 5];
const value2 = num4.pop(); // 뒤에서 뺀다
console.log(value2);
console.log(num4.pop());
console.log(num4);

const num6 = [1, 2, 3, 4, 5];
const value4 = num6.push(100); // 뒤에서 추가
console.log(value4);
console.log(num6.push(111));
console.log(num6.pop());
console.log(num6);

const arr1 = [1, 2, 3];
const arr2 = [10, 20, 30];

const concated = arr1.concat(arr2);
console.log(concated);

const joined = arr1.join();
console.log(joined);
console.log(arr1.join(""));

const num7 = [1, 2, 3, 4, 5, 6, 7, 8];
let sum = 0;
console.log(num7.length);
num7.forEach(n => {
  sum += n;
});
console.log(sum);

const sum1 = num7.reduce((accumulator, current) => accumulator + current, 0);
// 0은 초기 accumulator  -> 누적된 값
// acuumulator는 1이  되고 current는 2 accumulator 3 current 4 -7,4...
console.log(sum1);

const avg = num7.reduce((accumulator, current, index, array) => {
  if (index === array.length - 1) {
    // 7 === 8-1
    return (accumulator + current) / array.length;
  }
  return accumulator + current;
}, 0); // accumulator 의 기본 값

console.log(avg);

const alpha = ["a", "b", "c", "d", "e", "a", "a", "b"];
const count = alpha.reduce((accumulator, current) => {
  if (accumulator[current]) {
    accumulator[current] += 1; //acc안에 a,b,c,d,e 가있냐 있으면 +1
  } else {
    accumulator[current] = 1;
  }
  return accumulator;
}, {});
//처음에 acc : 비어있는 객체 current a 객체에 a있는지 확인 -> 1
//acc
console.log(count);
