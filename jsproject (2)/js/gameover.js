const content = "\n 용사는 최대한 빨간 모자를 구하려고 애썼지만 \n결국.... 빨간모자는 늑대에게 잡아먹히고 말았습니다....\n도르마무 다시 도전하여 빨간 모자를 살려주세요!";
const text = document.querySelector(".text");
let i = 0;
let cnt = 0;

window.addEventListener("keydown", (e) => {
  text.innerHTML = "";
  if(localStorage.getItem('cnt')){
    cnt = localStorage.getItem("cnt");
    imgbtn();
  }
  setInterval(typing, 100)
});
function typing(){
  if(i!=2000){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i >= content.length) {
      i = 2000;
    }
  }
}
let audio1 = new Audio("../저작권없는 절망적인브금.mp3");
audio1.volume = 1;
function imgbtn(){
  if(cnt%2==1){
    //document.getElementById("musicbtn").src="../images/false.png";
    cnt = 1;
    audio1.pause(); 
  }else{
    //document.getElementById("musicbtn").src="../images/true.png";
    cnt = 0;
    audio1.play(); 
  }
  localStorage.setItem("cnt",cnt);
  cnt++;
}
