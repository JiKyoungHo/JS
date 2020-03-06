console.log(!0);
console.log(!undefined);
console.log(!NaN);
console.log(!"");
console.log(!null);
//falsy 한 값들
//---------------논리 계산

const dog = {
  name: "멍멍이"
};

function Animal(animal) {
  /*//dog변수에 들어가 있는 객체를 넣어줌
  if (animal) {
    return console.log(animal.name);
  }else { 
    return undefined;

  }*/
  return animal && animal.name;
}
const name = Animal(dog);
//dog 를 안보내주면 undefined
console.log(name);

//---------------&&연산 and---------------
console.log("&&연산---------------");
console.log(true && false);
console.log(false && true);

console.log("aa" && "bb"); //'aa'가 truedy한 값이므로 뒤에까지
console.log("aa" && true);
console.log(true && "aa"); // 앞에 오는게 true면 뒤에 걸 보고 실행

console.log(null && "aa"); //falsy 한 값 null
console.log(0 && "1");
console.log(false && "aa"); // 앞에 false 가 오면 뒤에는 보지도 않음
// --------특정 값이 유효 할때 어떤 값을 조회해야 할 때 사용

//----------------------||연산 or ------------------
console.log("||연산------------");
console.log(false || "aa");
//and 와 반대로 앞이 true면 두ㅏ애룰 안본다. 앞이 false 이면 뒤에 실행

const dog1 = {
  name: ""
};

function Animal1(animal) {
  const name = animal && animal.name; //animal값이 존재할 때만 name값을 조회하겠다.
  console.log(!name); // true !name > falsy 한 값
  /*if (!name) {  
    return '이름이 없는 동물';
  } else {
    return name;
  }*/
  // 위 코드를 줄이면
  return name || "이름 없음";
}
const name1 = Animal1(dog1);
//dog 를 안보내주면 undefined
console.log(name1);

console.log("-----------함수 파라미터-------");
function cal(r) {
  return Math.PI * r * r;
}

const radius = cal(4);
console.log(radius);

//파라미터가 없을 경우 cal()

const radius1 = cal();
console.log(radius1); //NaN

function cal1(r) {
  const radius = r || 1; //r에 받는 값이 없으면 1로 쓰겠다.
  return Math.PI * radius * radius;
}

const radius2 = cal1();
console.log(radius2);

function cal3(r = 3) {
  //기본 값을 3으로 지정 하겠다.
  return Math.PI * r * r;
}
const radius3 = cal3();
console.log(radius3);

const cal4 = (r = 3) => Math.PI * r * r;
//화살표 함수를 써서도 할 수 있다.
//매개 변수 (r = 3)
//this를 정의 하지 않음. 익명으로.

const radius4 = cal4();
console.log(radius4);
