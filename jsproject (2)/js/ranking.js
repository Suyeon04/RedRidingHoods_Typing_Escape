let tasu_1 = 0;
let score_1 = 0;
let grade_1 =0;
let total = 0;
let nickname_1 = 0;
let names_1 = 0;
let x = 0;

if(localStorage.getItem('tasu')){
    tasu_1 = JSON.parse(localStorage.getItem("tasu"));
}
if(localStorage.getItem('score')){
    score_1 = JSON.parse(localStorage.getItem("score"));
}
if(localStorage.getItem('grade')){
    grade_1 = JSON.parse(localStorage.getItem("grade"));
}else{
    grade_1 = [100,90,80,70,60,50,40,30,20,10];
}if(localStorage.getItem('nickname')){
    nickname_1 = JSON.parse(localStorage.getItem("nickname"));
}if(localStorage.getItem('names')){
    names_1 = JSON.parse(localStorage.getItem("names"));
}else{
    names_1 = ["안녕","나는","박수연","입니다","내 말", "들리냐", "안들려","??","들리면","고개 끄덕"];
}
history.pushState(null, null, location.href);
    window.onpopstate = function () {
        history.go(1);
};
total = +tasu_1+ +score_1;
for(x = 0; x<=9;x++){
    if(nickname_1==names_1[x]){
        if(grade_1[x]<total)
            grade_1[x] = total;
        break;
    }
    if(grade_1[x]<total){
        grade_1.splice(x, 1, total);
        names_1.splice(x,1,nickname_1);
        localStorage.setItem("grade",JSON.stringify(grade_1));
        localStorage.setItem("names",JSON.stringify(names_1));
        break;
    }
}
for(let i = 0; i<=9;i++){
    console.log(grade_1[i])
    console.log(names_1[i])
}

for(let i = 1; i<=10; i++){
    let divi = document.getElementById('num'+i);
    let names_Display = document.getElementById('name'+i);
    divi.innerText = grade_1[i-1];
    names_Display.innerText = names_1[i-1];
}

