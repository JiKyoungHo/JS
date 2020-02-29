const superheroes = ["아이언맨", "캡틴 아메리카", "토르", "닥터스트레인지"];

function print(hero) {
  console.log(hero);
}
superheroes.forEach(print);

superheroes.forEach(function(hero) {
  console.log(hero);
});

superheroes.forEach(hero => {
  console.log(hero);
});

const items = ["item1", "item2", "item3"];

// 이전
for (let i = 0; i < items.length; i++) {
  console.log(items[i]);
}

// 이후
items.forEach(function(item) {
  console.log(item);
});

const array = [1, 2, 3, 4, 5, 6, 7, 8];
const square = n => n * n;
const squared = array.map(square);
const squared1 = array.map(n => n * n); //변환하고 싶을 때 쓰는 내장함수
console.log(squared);
console.log(squared1);

const todos = [
  {
    id: 1,
    text: "함수",
    done: true
  },
  {
    id: 2,
    text: "배열",
    done: true
  },
  {
    id: 3,
    text: "객체",
    done: true
  },
  {
    id: 4,
    text: "내장함수",
    done: false
  }
];
const todo = todos.findIndex(item => item.id === 2);
console.log(todo);
const tod = todos.find(item => item.id === 3);
console.log(tod);

var aaaa = [1, 2, 3, 4, 5, 6];

aaaa.forEach(function(aaa) {
  console.log(aaa);
});

const arr = ["a", 1, 2, 3, "b"];
const me = {
  name: "JKH",
  age: 2,
  height: 171
};

for (var i in me) {
  console.log(i, me[i]);
}
for (var ii of arr) {
  console.log(ii);
}
