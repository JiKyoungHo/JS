// 비동기 처리를 할 때 promise를 더욱 쉽게 async, await
// function sleep(ms ) {
//   return new Promise(resolve => setTimeout(resolve, ms));
// }
// //특정 ms 이후 resilve가 호출되서 끝나게 된다.

// async function process() {
//   console.log('Hi');
//   await sleep(1000);   //sleep(ms)가 Promise가 된다.
//   console.log('반갑다');
//   return true;
// } //Hi 1초후 반갑다.
// //async 사용시 반환 값은 Promise();

// process().then(value  => {
//   console.log(value);
// });

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function makeError() {
  await sleep(1000);
  const error = new Error();
  throw error;
}
//1초뒤 에러 발생 에러 잡기 try catch
async function process() {
  try {
    await makeError();
  } catch (e) {
    //e 는 throw된 error객체
    console.error(e);
  }
  console.log("Hi");
  await sleep(1000);
  console.log("반갑다");
  return true;
}

process().then(value => {
  console.log(value);
});
