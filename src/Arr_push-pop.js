const arr = [1, 2, 3, 4];

let push = arr.push(5);
console.log(push);
console.log(arr);
console.log("arr의 길이는" + arr.length);

const arrr = [1, 2, [1], "aa"];
var push1 = arrr.push({
  name: "JKH"
});

console.log(push1); //push1의 index
console.log(arrr[4]);
console.log(arrr);

var pop1 = arrr.pop();
console.log(pop1); //pop한 index의 정보
console.log(arrr);
