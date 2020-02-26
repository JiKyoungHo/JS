const ironMan = {
  name: "토니",
  actor: "주니어",
  alias: "아이언맨"
};

const man = {
  name: "로저스",
  actor: "에반스",
  alias: "아메리카"
};

console.log(man);

function print(hero) {
  const { alias, name, actor } = hero;
  const text = `${alias}(${name})역할을 맡은 배우는 ${actor}`;

  console.log(text);
}

print(ironMan);
print(man);

const JKH = {
  name: "지경호",
  phone: "01098114418",
  age: 2,
  height: 171,
  weight: 80,
  address: "seoul",
  sound: "왈왈",
  say: function say() {
    console.log(this.sound);
  }
};
JKH.say();

function print1(human) {
  const text = `${human.name}의 전화번호는 ${human.phone}이고 나이 ${
    human.age
  }`;

  console.log(text);
}
print1(JKH);

function print2(human) {
  const { name, phone, age } = human;
  const text = `${name}의 전화번호는 ${phone} 나이는${age}`;
  console.log(text);
}
print2(JKH);

function print3({ name, age, phone }) {
  const text = `${name}의 전화번호는 ${phone} 나이는 ${age}`;
  console.log(text);
}
print3(JKH);

const { name } = JKH;
console.log(name);

const dog = {
  name: "멍멍이",
  sound: "멍멍",
  say: function() {
    console.log(this.sound);
  }
};

const cat = {
  name: "야옹이",
  sound: "야옹"
};

cat.say = dog.say;
dog.say();
cat.say();
//dog.say에서 가르키던 this.sound가 cat 객체에 들어가면서
//this.sound는 cat.sound를 가르키게 되어 야옹출력
