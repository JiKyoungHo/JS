//동기적 작업
function work() {
  const start = Date.now();
  for (let i = 0; i < 1000000000; i++) {}
  const end = Date.now();
  console.log(end - start + "ms");
  //Date.now() 가 ms(밀리세컨즈) 단위로 있다 1000ms가 1초
  //얼마나 걸렸는지 알려주는 함수
}

work();
//work함수 끝나고 다음작업 실행.
console.log("다음 작업");

//비동기 형식으로 전환
console.log("비동기형식-------");
function work1(callback) {
  //setTimeout()함수가 백그라운드에서 실행 되므로 다른 코드 실행을 막지않음.
  setTimeout(() => {
    const start = Date.now();
    for (let i = 0; i < 1000000000; i++) {}
    const end = Date.now();
    console.log(end - start + "ms");
    //Date.now() 가 ms(밀리세컨즈) 단위로 있다 1000ms가 1초
    //얼마나 걸렸는지 알려주는 함수
    callback(end - start);
  }, 0);
  //0ms 이후에 실행 하겠다. 실제로는 4ms 이후에 실행된다 브라우저에서 지정한 최소값
}
console.log("작업시작 ");
work1(ms => {
  console.log("작업이 끝남 ");
  console.log(ms + "ms 걸렸다");
  //callback(end-start) 값을 넘겨 받아
});
console.log("다음 작업");
//work함수가 끝난 다음 어떤 행동을 하고싶을 때
//callback 함수 함수파라미터로 값을 넘겨주어
//callback으로 하면 코드가 좀 지저분 해질 수 있다. =>
