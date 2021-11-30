const content = "\n타자를 모두 치셨네요!! 축하드립니다.\n빨간모자는 늑대에게서 벗어나 \n 덕분에 할머니께 무사히 갈 수 있었어요!";            
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
let audio1 = new Audio("../Asteria-13-Memory Of Kritias.mp3");
audio1.volume = 0.3;
function typing(){
  if(i!=2000){
    let txt = content[i++];
    text.innerHTML += txt=== "\n" ? "<br/>": txt;
    if (i >= content.length) {
      i = 2000;
    }
  }
}
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