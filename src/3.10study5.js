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

async function process() {
  const first = await Promise.race([getDog(), getBird(), getCat()]);
  console.log(first);
}

//가장 빠른거 하나 만 출력
//가장 빠른게 에러가 아니고 다른게 에러이면 가장 빠른거 실행 문제 x
//가장 빨리 끝난게 에러일때만 에러로 간주

process();
