
const wordDisplay1 = document.querySelector('#t1');
const wordDisplay2 = document.querySelector('#t3');
const wordDisplay3 = document.querySelector('#t5');
const wordDisplay4 = document.querySelector('#t7');
const wordDisplay5 = document.querySelector('#t9');

const wordinput1 = document.querySelector('.word-input1');
const wordinput2 = document.querySelector('.word-input2');
const wordinput3 = document.querySelector('.word-input3');
const wordinput4 = document.querySelector('.word-input4');
const wordinput5 = document.querySelector('.word-input5');

const howDisplay=document.querySelector('.how');
const hey=document.querySelector('.hey');
const goal=document.querySelector('.goal');

let words = 0;

let x = 0;

let nana = words.length;

let i = 0;
let y = "";
let start=Date.now(), end = Date.now();
let start1 = Date.now();
let hey_1 = 0;
let tasu= 0;
let tasuAverage = 0;
let goal_1 = 0;
let width = 50;
let width1 = 50;

if(localStorage.getItem('goal')){
    goal_1 = localStorage.getItem("goal");
}
if(localStorage.getItem('words')){
    words = JSON.parse(localStorage.getItem("words"));
    for(let i = 0; i<words.length;i++)
        words[i].trim();
}

let cnt = 1;
let haha = 0;

if(localStorage.getItem('cnt')){
  cnt = localStorage.getItem("cnt");
  imgbtn();
}
function imgbtn(){
  if(cnt%2==1){
    document.getElementById("musicbtn").src="../images/false.png";
    cnt = 1;
    haha = 0;
  }else{
    document.getElementById("musicbtn").src="../images/true.png";
    cnt = 0;
    haha = 1;
  }
  localStorage.setItem("cnt",cnt);
  cnt++;
}
let red = 0;

goal.innerText = goal_1;
let x1 = 0;
function textChange(x){
    if(words[x]!=undefined)
        wordDisplay1.innerText = words[x];
    else{
        wordDisplay1.innerText = "";
    }
    if(words[x+1]!=undefined){
        wordDisplay2.innerText = words[x+1];
    }else{
        wordDisplay2.innerText = "";
    }
    if(words[x+2]!=undefined)
        wordDisplay3.innerText = words[x+2];
        else{
            wordDisplay3.innerText = "";
        }
    if(words[x+3]!=undefined)
        wordDisplay4.innerText = words[x+3];
        else{
            wordDisplay4.innerText = "";
        }
    if(words[x+4]!=undefined)
        wordDisplay5.innerText = words[x+4];
        else{
            wordDisplay5.innerText = "";
        }
    red = Math.floor(Math.random() * 9) + 1;
    if(red%2==0)
        red++;
    changeRed(red);
    wordinput1.focus();
}
function changeRed(red){
    document.getElementById('t1').style.background = "rgba(241, 241, 241, 0.445)";
    document.getElementById('t3').style.background = "rgba(241, 241, 241, 0.445)";
    document.getElementById('t5').style.background = "rgba(241, 241, 241, 0.445)";
    document.getElementById('t7').style.background = "rgba(241, 241, 241, 0.445)";
    document.getElementById('t9').style.background = "rgba(241, 241, 241, 0.445)";
    document.getElementById('t'+red).style.background = "linear-gradient(to right, pink, red)";
}

function back(xo){
    if(xo==parseInt(words.length/2)-1){
        backimg.style.backgroundImage="url('../images/배경_밤.png')";
        if(haha==1){
            wolf.play();
        }
    }
}
let position = 0;
let pos = 0;
let w1 = 0;
let w = 0;
let score = 0;
let chaPos = 730;
let now = 0;
let error = 0;
function changePosition(x,go,tasu){
    if (position == 0) {
        position = 1;
        now = score;
        let elem1 = document.getElementById("myBar");
        let elem = document.getElementById("myBar1");
        let cha = document.getElementById("tree");
        if(words[x]!=go)
            hey.innerText = ++error;
        if(words[x]==go&&tasu>=goal_1){
            document.getElementById("tree").src="../images/빨간모자.png";
            pos = 0;
            if(width>=100){
             w = width;
            }else{
                if(x==Math.round(red/2)-1)
                    w = width+15;
                else
                    w = width+5;
            }
        }else{
            pos = 1; 
            w1 = width1+5;
            document.getElementById("tree").src="../images/빨간모자1.png";
        }
        let id = setInterval(frame, 20);
        function frame() {
        if(pos == 0){ 
          if (width>=w) {
            clearInterval(id);
            position = 0;
          } 
          else {
                width++;
                width1--;
                chaPos+=10.5;
                score+=2;
                }
            }
        else{
          if (width1>=w1) {
            clearInterval(id);
            position = 0;
          } 
          else {
                width--;
                width1++;
                chaPos-=11.5;
                score-=2;
            }
        }
            if(width>width1){
                elem.innerHTML = score+ "점";
                elem1.innerHTML = '';
            }else{
                elem1.innerHTML = score+ "점"; 
                elem.innerHTML = '';
            }
            if(width1>=100){
                location.replace('../html/gameover.html');
            }else if(width>=99){
                elem1.style.width = 1+ "%";
                elem.style.width = 99+ "%";
                cha.style.left = 1260+"px";
            }
            else{
                elem1.style.width = width1+ "%";
                elem.style.width = width+ "%";
                cha.style.left = chaPos+"px";
            }
        }
    }
}
let tasuNow = 0;
let nunu = 1;
function a(){
    end = Date.now(); //시간 끝
    tasuNow = parseInt(60/(((end-start)/i)/1000)); 
    Average();
    howDisplay.innerText = tasuNow;//타수 바꾸기
}

function Average() {
    end = Date.now(); //시간 끝
    tasuAverage = parseInt(60/(((end-start1)/nunu)/1000)); 
    nunu++;
}

function last(){
    start = Date.now();
    x++;
    tasu = 0;
    y.splice(0); //초기화
    i = 0;
}
function reset(){
    audio3.play(); 
    wordinput1.value = "";//초기화
    wordinput2.value = "";//초기화
    wordinput3.value = "";//초기화
    wordinput4.value = "";//초기화
    wordinput5.value = "";//초기화
}


let audio2 = new Audio("../MP_Typewriter And Bell (mp3cut.net) (2).mp3");
let audio1 = new Audio("../MP_Typewriter And Bell (mp3cut.net) (1).mp3");
let audio3 = new Audio("../MP_Typewriter And Bell (mp3cut.net) (3).mp3");
let wolf = new Audio("../[Track 18] Wolf Sound Effect.wav");
let mugic = 0;
audio1.volume = 0.2;
audio2.volume = 0.2;
audio3.volume = 0.2;
wolf.volume = 0.3;
function checkKeyPressed(e){
    if(haha==1){
        if(mugic == 0){
            audio2.play(); 
            mugic = 1;
        }
        else{
            audio1.play(); 
            mugic = 0;
        } 
    }
}
function endPage(){
    location.replace('../html/gamewin.html');
    localStorage.setItem("tasu",JSON.stringify(tasuAverage));
    localStorage.setItem("score",JSON.stringify(score));
    localStorage.setItem("error",JSON.stringify(error));
}



textChange(x);
wordinput1.oninput = function() {
    document.addEventListener("keydown",checkKeyPressed, false);
    let go = wordinput1.value;
    y = (go||"").split("");
    i = go.length;
    if(go==words[x].slice(0,i)){
        a(i);
        wordinput1.style.color = "#228B22"; 
    } else{
    wordinput1.style.color = "#ff0000";
    }
     
if(go==words[x]||i==words[x].length){
    changePosition(x,go,tasuNow);
    back(x);
    if(words[x+1]!=undefined)
        wordinput2.focus();
        else{
            let last = setInterval(endPage, 100);
        }last();
    }
};


    wordinput2.oninput = function() {
        document.addEventListener("keydown",checkKeyPressed, false);
            let go = wordinput2.value;
            y = (go||"").split("");
            i = go.length;
            if(go==words[x].slice(0,i)){
                a(i);
                wordinput2.style.color = "#228B22"; 
            } else{
            wordinput2.style.color = "#ff0000";
            }
        if(go==words[x]||i==words[x].length){
            changePosition(x,go,tasuNow);
            back(x);
            if(words[x+1]!=undefined)
                wordinput3.focus();
            else{
                let last = setInterval(endPage, 100);
            }last();
        }
    };

    wordinput3.oninput = function() {
        document.addEventListener("keydown",checkKeyPressed, false);
        let go = wordinput3.value;
        y = (go||"").split("");
        i = go.length;
        if(go==words[x].slice(0,i)){
            a(i);
            wordinput3.style.color = "#228B22"; 
        } else{
        wordinput3.style.color = "#ff0000";
        }
        if(go==words[x]||i==words[x].length){
            changePosition(x,go,tasuNow);
            back(x);
          if(words[x+1]!=undefined)
                wordinput4.focus();
            else{
                let last = setInterval(endPage, 100);
                }last();
        }
    };

    wordinput4.oninput = function() {
        document.addEventListener("keydown",checkKeyPressed, false);
        let go = wordinput4.value;
        y = (go||"").split("");
        i = go.length;
        if(go==words[x].slice(0,i)){
            a(i);
            wordinput4.style.color = "#228B22";  
        } else{
        wordinput4.style.color = "#ff0000";
        }
        if(go==words[x]||i==words[x].length){
            changePosition(x,go,tasuNow);
            back(x);
            if(words[x+1]!=undefined)
                wordinput5.focus();
            else{
                let last = setInterval(endPage, 100);
                }last();
        }
    };

    wordinput5.oninput = function() {
        document.addEventListener("keydown",checkKeyPressed, false);
        let go = wordinput5.value;
        y = (go||"").split("");
        i = go.length;
        if(go==words[x].slice(0,i)){
            a(i);
            wordinput5.style.color = "#228B22"; 
        } else{
        wordinput5.style.color = "#ff0000";
        }
        if(go==words[x]||i==words[x].length){
            changePosition(x,go,tasuNow);
            back(x);
            reset();
            if(words[x+1]!=undefined)
                wordinput1.focus();
            else{
                let last = setInterval(endPage, 100);
                }last();
            textChange(x);
        }
        go = wordinput5.value;
    };
    
