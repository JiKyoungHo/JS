//특정 값이 여러 값 중에 하나인지 확인

function isAnimal(text) {
  return (
    text === "고양이" || text === "개" || text === "거북이" || text === "너구리"
  );
}

function isAnimal2(text2) {
  const animal = ["고양이", "개", "거북이"];
  return animal.includes(text2); //배열 내장함수
}

const isAnimal3 = text => ["고양이", "개", "거북이"].includes(text);

console.log(isAnimal("개"));
console.log(isAnimal2("고릴라"));
console.log(isAnimal3("개"));

//주어진 결과 값에 따라 다른 결과물을 반환해야 할 때

function getSound(animal) {
  if (animal === "개") return "멍멍";
  if (animal === "고양이") return "야옹";
  if (animal === "고릴라") return "우가우가";
  if (animal === "참새") return "짹짹";
  if (animal === "비둘기") return "구구";
  return "??";
}

function getSound1(animal) {
  const sounds = {
    개: "멍멍",
    고양이: "야옹",
    고릴라: "우가우가",
    참새: "짹짹",
    비둘기: "구구"
  };
  return sounds[animal] || "??";
}
//객체 활용 객체의 원소 값을 비교 할때 객체[]
console.log(getSound1("구구"));

function sound2(animal) {
  const sounds = {
    개: () => {
      console.log("멍멍");
    },
    고양이() {
      console.log("야옹");
    }
  };
  const so = sounds[animal];
  if (!so) {
    console.log("???");
  }
  so();
  //객체 함수 일 때
}

sound2("고양이");

//======>조건에 따라 값이 다 다를 때
