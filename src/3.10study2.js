//1초마다 1씩 증가하는 함수를 setTimeout()으로
// function print (n, callback) {
//   setTimeout (() => {
//     const increased = n + 1;
//     console.log(increased);
//     if (callback) {
//       callback (increased);
//     }
//   }, 1000); //1초 이후 시작
// }

// print(0, n => {
//   print(n, n => {
//     print(n, n => {
//       print(n , n => {
//         print(n, n => {
//           console.log('작업 끝!');
//         })
//       })
//     })
//   })
// })

// console.log('Promise ----------');
// //1초 뒤 성공하는 promise
// const myPromise = new Promise((resolve, reject)=> {
//   //성공 : resolve 실행 실패 : reject
//   setTimeout(()=> {
//     resolve('result');
//   },1000);
// });
// //promise 끝나고 어떤 작업 하고 싶다. then 사용 끝나고 실행의미
// myPromise.then(result => {
//   console.log(result)
// })

// const myPromise1 = new Promise((resolve, reject)=> {
//   //성공 : resolve 실행 실패 : reject
//   setTimeout(()=> {
//     reject(new Error());
//   },1000);
// });
// //promise 끝나고 어떤 작업 하고 싶다. then 사용 끝나고 실행의미
// myPromise1.then(result => {
//   console.log(result)
// }).catch(e => {
//   console.error(e);
// }); //에러 잡을 때

console.log("Promise를 만드는 함수");

function print(n) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const value = n + 1;
      if (value === 5) {
        const error = new Error();
        error.name = "ValueError";
        reject(error);
        return;
      }
      console.log(value);
      resolve(value);
    }, 1000);
  });
}

//1번 방법
print(0)
  .then(n => {
    // console.log('result :' , n);
    return print(n);
  })
  .then(n => {
    return print(n);
  })
  .then(n => {
    return print(n);
  })
  .then(n => {
    return print(n);
  })
  .then(n => {
    return print(n);
  })
  .catch(e => {
    //5일때 에러 걸리게 잡아 놔서 에러 잡아주면 5순서에 에러 실행
    console.error(e);
  });

print(0)
  .then(print)
  .then(print)
  .then(print)
  .then(print)
  .then(print)
  .catch(e => {
    console.error(e);
  });

//에러를 잡을때 어떤 부분에서 에러가난건지 파악 어려움 특정 분기로 나누기도 어려움 => async,await
