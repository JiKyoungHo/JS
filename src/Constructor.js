/*function Animal (type, name, sound) {
  this.type = type;
  this.name =name;
  this.sound =sound;
  //1번 
  /*this.say = function() {
    console.log(this.sound);
  }
}
//2번
Animal.prototype.say = function () {
  console.log (this.sound);
}

const dog = new Animal('개','왈왈','멍멍이스'); 
const cat = new Animal ('고양이','야옹','야옹이스');   //new 함수 사용
dog.say(); //dog를 실행하면서 Animal객체가 호출되고 .say라는 생성자 속 함수가 호출된다.
cat.say();

//---------프로토타입--------------------------------------------------
/*
//객체를 두개를 사용하고 싶은데 두번 선언하고 만들기 번거로움
function Dog (name, sound) {
  this.type = '개';
  this.name = name;
  this.sound = sound;
}

function Cat (name, sound) {
  this.type = '고양';
  this.name = name;
  this.sound = sound;
}
  
Dog.prototype.say = function (){
  console.log(this.sound);
}
Cat.prototype.say = function () {
  console.log(this.sound)
}

const dog1 = new Dog('멍멍스','멍멍')
const cat1 = new Cat('야옹스','양옹')
dog1.say();
cat1.say();
*/
//---------------------------------불편하다

function Animal(type, name, sound) {
  this.type = type;
  this.name = name;
  this.sound = sound;
}
//new 로 호출했을때
Animal.prototype.say = function() {
  console.log(this.sound);
};

function Dog(name, sound) {
  Animal.call(this, "개", name, sound);
  //call 함수는 이 객체 생성자 함수 에서의 this,  Animal 파라미터
}
function Cat(name, sound) {
  Animal.call(this, "고양", name, sound);
}

Dog.prototype = Animal.prototype;
Cat.prototype = Animal.prototype;
//어떠한 공유되는 함수나 값을 설정하는 것이 prototype
//객체를 new를 사용해 호출하는 거 -> 객체 생성자
const dog1 = new Dog("멍멍스", "멍멍");
const cat1 = new Cat("야옹스", "양옹");
dog1.say();
cat1.say();
