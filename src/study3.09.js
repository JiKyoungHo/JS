//객체 비구조화할당

const object = { a: 1, b: 2 };
const { a, b } = object;
console.log(a);
console.log(b);

//비구조 할당 문법을 함수의 파라미터에서 사용가능
function print({ a, b }) {
  console.log(a);
  console.log(b);
}
print(object);

const object2 = { a: 1 }; //b값을 주어지지 않으면 undefined
function print2({ a, b = 2 }) {
  //b의 기본 값 줄 때
  console.log(a);
  console.log(b); // b || 2  비가 false 니까 2를 쓸래
}

print2(object2);

const animal = {
  name: "멍멍ㅇㅇ",
  type: "개"
};

const nickname = animal.name;
console.log(nickname);

//비구조화 할당 법   - 이름 바꿔주기 가능
const { type: mytype } = animal;
console.log(mytype);

console.log("배열 비구조화 할당 ---------");

const arr = [1, 2];
const a0 = arr[0];
const b0 = arr[1];
console.log(a0);
console.log(b0);

//배열 값 바깥으로 꺼내져서 a1,b1
const [a1, b1] = arr;
console.log(a1);

//객체 속 깊숙히 있는 값 찾기
console.log("객체 속 깊은 값 찾기");
const deepObject = {
  state: {
    information: {
      name: "JKH",
      languages: ["korean", "eng", "chi"]
    }
  },
  value: 5
};
//1 방법
// const {name, languages : [a,b] } = deepObject.state.information;
// const {value} = deepObject;

const {
  state: {
    information: {
      name,
      languages: [fir, sec]
    }
  },
  value
} = deepObject;

const ext = {
  name,
  fir,
  sec,
  value
};
//특정 key 이름으로 선언 된 값이 이미 있다면 값 입력을 생략해 주어도 된다.
console.log(ext);
