const score_Display = document.querySelector('.score');
const tasu_Display = document.querySelector('.tasu');
const ota_Display = document.querySelector('.ota');
const total_Display = document.querySelector('.total');
const nickname_Display = document.querySelector('#nickname');

let score_1 = 0;
let tasu_1 = 0;
let error_1 = 0;
let total_1 = 0;
let nickname;

if(localStorage.getItem('tasu')){
    tasu_1 = JSON.parse(localStorage.getItem("tasu"));
}
if(localStorage.getItem('score')){
    score_1 = JSON.parse(localStorage.getItem("score"));
}
if(localStorage.getItem('score')){
    error_1 = JSON.parse(localStorage.getItem("error"));
}if(localStorage.getItem('total')){
    total_1 = JSON.parse(localStorage.getItem("total"));
}

nickname_Display.oninput = function() {
    nickname = nickname_Display.value;
  };
function noBack(){window.history.forward();}

function enter(){
    localStorage.setItem("nickname",JSON.stringify(nickname));
    location.replace('../html/Ranking.html');
}

score_Display.innerHTML = score_1;
total_Display.innerHTML = +score_1+ +tasu_1;
tasu_Display.innerHTML = +tasu_1;
ota_Display.innerHTML = +error_1;