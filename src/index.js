//버튼으로 1 더하고 빼고를 실행.
const number = document.getElementById('number');
const increase =document.getElementById('increase');
const decrease = document.getElementById('decrease');
console.log(number.innerText);
console.log(increase.offsetTop);
console.log(decrease.id)
//만약 id 값이 지정이 안되 있는 것을 찾고 싶다 불러 내고싶다면.
//const buttons = document.querySelectorAll('button');
//const [increase, decrease] = buttons;
increase.onclick = () =>{
  const current = parseInt(number.innerText, 10);
  //현재 문자열 형태로 들어가 있는데 그 안에 텍스트를 int로 받아 온다. 몇진수로 할거냐 ? 10진수.

  number.innerText = current +1;
}
decrease.onclick = () => {
  const current = parseInt(number.innerText, 10);
  number.innerText = current -1;
}
//모달 : 열고 닫을 수 있는 userinterface 음 안내창 ?

