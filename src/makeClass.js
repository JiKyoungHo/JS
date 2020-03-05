class Animal {
  constructor(type, name, sound) {
    this.type = type;
    this.name = name;
    this.sound = sound;
  }
  //따로 say() 를 class 내부에 등록
  say() {
    console.log(this.sound);
  }
}
console.log(Animal.prototype.say);
//prototype이 함수에 설정되어 있는걸 볼 수 있다.
//상속의 상황에서 더 쉽ㄱ게 할 수 있다.
//extends 가 특정 class를 상속받는다.
class Dog extends Animal {
  constructor(name, sound) {
    super("개", name, sound);
    //자신이 상속받은 클래스의 constructor를 호출합니다.
  }
}
class Cat extends Animal {
  constructor(name, sound) {
    super("고양이", name, sound);
    //자신이 상속받은 클래스의 constructor를 호출합니다.
  }
}
const dog = new Animal("개", "개이름", "멍멍");
const cat = new Animal("고양이", "이름", "야옹");
dog.say();
cat.say();

const dog2 = new Dog("개이름2", "멍멍2");
const cat2 = new Cat("고양이름2", "야옹2");
const dog3 = new Dog("개이름3", "멍멍3");
dog.say();
cat.say();
dog2.say();
