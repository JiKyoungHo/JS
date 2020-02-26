//Getter,Setter함수
//Getter : 특정 값을 조회, Setter : 특정 값을 설정.
const numbers1 = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum함수 실행");
    return this.a + this.b;
  }
};

console.log(numbers1.sum);
numbers1.b = 5; //값 변환
console.log(numbers1.sum);
//특정 값을 조회하려고 할 때 getter 실행

const dog = {
  myname: "멍멍이",
  set name(value) {
    console.log("이름 바꾸기" + value);
    this.myname = value;
  }
};
console.log(dog.myname);
dog.name = "망망이";
console.log(dog.myname);

const numbers = {
  _a: 1,
  _b: 2,
  sum: 3,
  cal() {
    console.log("계산");
    this.sum = this._a + this._b;
  },
  get a() {
    return this._a;
  },
  get b() {
    return this._b;
  },
  set a(value) {
    this._a = value;
    this.cal();
  },
  set b(value) {
    this._b = value;
    this.cal();
  }
};

console.log(numbers.sum);
numbers.a = 5;
// setter 함수의 value가 this._a가 가지게 되고 _a가 설정이된다
// 그리고 this.cal()이 실행 된다. => 계산출력, sum값 업데이트
console.log(numbers.sum); // 값이 바뀔때만 계산 실행
console.log(numbers.sum);

//----조회할때 마다 계산 실행 되게 하려면
/*
const numbers = {
  a : 1,
  b : 2,
  get sum() {
    console.log('계산');
    return this.a + this.b;
  }
};

console.log(numbers.sum);
numbers.a = 5; 
console.log(numbers.sum);
console.log(numbers.sum);
console.log(numbers.sum);*/
