const slime = {
  name: "슬라임"
};

const cuteSl = {
  name: "슬라임",
  attribute: "cute"
};

const purpleCuteSl = {
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

console.log(slime);
console.log(cuteSl);
console.log(purpleCuteSl);

const slime2 = {
  name: "슬라임"
};

const cuteSl2 = slime2;
cuteSl2.attribute = "cute";

const purpleCuteSl2 = cuteSl2;
purpleCuteSl2.color = "purple";

console.log(slime2);
console.log(cuteSl2);
console.log(purpleCuteSl2);
//다 똑같이 나온다 --> 이는 다 똑같은 객체를 가르키기 때문이다.

//이 처럼 그 전객체를 참조해서 새로운 객체를 만들고 싶다면
//spread 사용  -> 기존 값을 복사하고 어떤 추가
//변경도 가능하다. 덮어쓰기 불러오기 전에 쓰면 안됨
const slime1 = {
  name: "슬라임"
};

const cuteSl1 = {
  ...slime,
  name: "슬라임",
  attribute: "cute"
};

const purpleCuteSl1 = {
  ...cuteSl,
  name: "슬라임",
  attribute: "cute",
  color: "purple"
};

console.log(slime1);
console.log(cuteSl1);
console.log(purpleCuteSl1);

console.log("배열에서도 사용 할 수 있다. ----");

const animal = ["개", "고양이", "참새"];
const anotherAnimal = [...animal, "고릴라"];
// === cosnt anotherAnimal = animal.concat('고릴라')
console.log(anotherAnimal);

const num = [1, 2, 3, 4, 5];
const spreadNum = [...num, 1000, ...num];
console.log(spreadNum);

console.log("rest 사용법---");

const purpleSlime = {
  name: "slime",
  attribute: "cute",
  color: "purple"
};

const { name, ...rest1 } = purpleSlime;
console.log(rest1);

const { attribute, ...rest2 } = rest1;
console.log(rest2);
//위와 같이 name값을 제외한 값이 들어가 있다.
//이름도 마음대로 지정가능 기능 기법
//배열에서의 rest 가 앞에 올 수 없다. 맨마지막에 와야댐

function sum(a, b, c, d) {
  let result = 0;
  if (a) result += a;
  if (b) result += b;
  if (c) result += c;
  if (d) result += d;
  return result;
}
console.log(sum(1, 2, 3));
//파라미터는 함수에서 사용하는 값
//인자는 보내는 값 사용할 때
function sum1(...rest) {
  return rest.reduce((acc, current) => acc + current, 0);
  //acc 는 0부터 3 , 5 , 8 , 12 한다.
}
//const arr = [1,2,3,4];
//console.log(sum1(...arr));
console.log(sum1(3, 2, 3, 4));

function sub(x, y) {
  return x - y;
}

const n = [1, 2];
console.log(sub(...n));
