function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const getDog = async () => {
  await sleep(1000);
  return "멍멍이";
};

const getBird = async () => {
  await sleep(700);
  return "참새";
};

const getCat = async () => {
  await sleep(3000);
  return "고양이";
};

// async function process() {
//   const dog = await getDog();
//   console.log(dog);
//   const bird = await getBird();
//   console.log(bird);
//   const cat = await getCat();
//   console.log(cat);
// }
// 지금은 하나끝나고 하나 시작 하나끝나고 하나시작 =>
//동시에 시작할 거다 Promise all

// async function process () {
//   const result =  await Promise.all([getDog(),getBird(),getCat()]);
//   console.log(result);
//   //걸린시간 3초
// }
//모두 시작 모두 끝나면 반환값은 각각 반환값이 resul에 들어가 있다.

async function process() {
  try {
    const [dog, bird, cat] = await Promise.all([getDog(), getBird(), getCat()]);
    console.log(dog);
    console.log(bird);
    console.log(cat);
  } catch (e) {
    console.log(e);
  }
  //각각 꺼내고 싶을때는 배열비구조화할당을 해주면 된다..
  //걸린시간 3초
  //저 배열 중 하나가 에러가 발생하면 다음으로 못넘어감
}

process();
