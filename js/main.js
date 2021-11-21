


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

let score = 0;
let words = ["int a = 10", 
"int b = 20", 
"int c = 30", 
"hi"];

let x = 0;
testChange(x);
let nana = words.length;

function testChange(x){
    if(words[x]!=undefined)
        wordDisplay1.innerText = words[x];
    if(words[x+1]!=undefined)
        wordDisplay2.innerText = words[x+1];
    if(words[x+2]!=undefined)
        wordDisplay3.innerText = words[x+2];
    if(words[x+3]!=undefined)
        wordDisplay4.innerText = words[x+3];
    if(words[x+4]!=undefined)
        wordDisplay5.innerText = words[x+4];
}


let i = 0;
let y = "";
let total = 0;
let start=Date.now(), end = Date.now();
let hey_1 = 100;
let go = ""
let tasu= 0;
function a(){
    i++;
    end = Date.now(); //시간 끝
    howDisplay.innerText = parseInt(60/(((end-start)/++tasu)/1000)); //타수 바꾸기
}


wordinput1.oninput = function() {
    let go = wordinput1.value;
    y = (go||"").split("");
if(y[i] == words[x][i]){
    a(i);
}else{
    if(y[i]!='Backspace'){
        hey.innerText = --hey_1;
    }
}
if(i==words[x].length){
    if(words[x+1]!=undefined)
                wordinput2.focus();
            else{
                alert("끝")
                }
            y.splice(0); //초기화
            i = 0;
}
};


    wordinput2.oninput = function() {
            let go = wordinput2.value;
            y = go.split("");
        if(y[i] == words[x+1][i]){
            a(i);
        }else{
            hey.innerText = --hey_1;
        }
        if(i==words[x+1].length){
            if(words[x+2]!=undefined)
                wordinput3.focus();
            else{
                alert("끝")
                }
            y.splice(0); //초기화
            i = 0;
        }
    };

    wordinput3.oninput = function() {
        //start = Date.now();
            let go = wordinput3.value;
            y = go.split("");
        if(y[i] == words[x+2][i]){
           a(i);
        }else{
            hey.innerText = --hey_1;
        }
        if(i==words[x+2].length){
            if(words[x+3]!=undefined)
                wordinput4.focus();
            else{
                alert("끝")
                }
            y.splice(0); //초기화
            i = 0;
        }
    };

    wordinput4.oninput = function() {
            let go = wordinput4.value;
            y = go.split("");
        if(y[i] == words[x+3][i]){
            a(i);
        }else{
            hey.innerText = --hey_1;
        }
        if(i==words[x+3].length){
            if(words[x+4]!=undefined)
                wordinput5.focus();
            else{
                alert("끝")
                }
            y.splice(0); //초기화
            i = 0;
        }
    };
    wordinput5.oninput = function() {
            let go = wordinput5.value;
            y = go.split("");
        if(y[i] == words[x+4][i]){
            a(i);
        }else{
            hey.innerText = --hey_1;
        }
        if(i==words[x+4].length){
            wordinput1.value = "";//초기화
            wordinput2.value = "";//초기화
            wordinput3.value = "";//초기화
            wordinput4.value = "";//초기화
            x+=5;
            if(words[x]!=undefined)
                wordinput1.focus();
            else{
                alert("끝")
                }
            y.splice(0); //초기화
            i = 0;
            testChange(x);
        }
        go = wordinput5.value;
    };

