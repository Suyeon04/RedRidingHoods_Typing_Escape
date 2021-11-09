const wordinput1 = document.querySelector('.word-input1');
const wordDisplay1 = document.querySelector('.word-display1');
const wordinput2 = document.querySelector('.word-input2');
const wordDisplay2 = document.querySelector('.word-display2');
const wordinput3 = document.querySelector('.word-input3');
const wordDisplay3 = document.querySelector('.word-display3');
const wordinput4 = document.querySelector('.word-input4');
const wordDisplay4 = document.querySelector('.word-display4');

const scoreDisplay=document.querySelector('.score');
const timeDisplay=document.querySelector('.time');
const howDisplay=document.querySelector('.how');



let score = 0;
let words = ["안녕하세요.", 
"가까운 무당보다 먼 데 무당이 용하다.", 
"가나다라도 모른다.", 
"사공 배 둘러대듯", 
"사기전에 종짓굽 맞추듯", 
"칼끝의 원쑤", 
"차 치고 포 친다.", 
"차돌에 바람 들면 석돌보다 못하다.", 
"바늘 가는 데 실 간다.", 
"바늘구멍으로 황소바람 들어온다.", 
"다 된 농사에 낫 들고 덤빈다.", 
"다 된 죽에 코 빠졌다.", 
"가난도 비단 가난", 
"가래장부는 본고을 좌수도 몰라본다.", 
"가랑잎이 솔잎더러 바스락거린다고 한다.", 
"고기 새끼 하나 보고 가마솥 부신다.", 
"그 아버지에 그 아들", 
"급하면 바늘허리에 실 매어 쓸까", 
"나 많은 말이 콩 마다할까", 
"나는 새에게 여기 앉아라 저기 앉아라 할 수 없다.", 
"누구네 제사날 기다리다가 사흘 굶은 거지 굶어 죽었다.", 
"눈을 떠도 코 베어 간다.", 
"눈이 아무리 밝아도 제 코는 안 보인다.", 
"달기는 엿집 할머니 손가락이라", 
"달아나는 노루 보고 얻은 토끼를 놓았다.", 
"두 손뼉이 맞아야 소리가 난다.", 
"뒷집 짓고 앞집 뜯어 내란다.", 
"아가리 마구 난 창구멍인가", 
"아는 걸 보니 소강절의 똥구멍에 움막 짓고 살았겠다.", 
"아직 이도 나기 전에 갈비를 뜯는다.", 
"자기 늙은 것은 몰라도 남 자라는 것은 안다.", 
"자식을 낳기보다 부모 되기가 더 어렵다.", 
"자식을 보기엔 아비만 한 눈이 없고 제자를 보기엔 스승만 한 눈이 없다.", 
"잔치는 잘 먹은 놈 잘 차렸다 하고 못 먹은 놈 못 차렸다 한다.", 
"잘 싸우는 장수에게는 내버릴 병사가 없고 글 잘 쓰는 사람에게는 내버릴 글자가 없다.", 
"칼치가 제 꼬리 베 먹는다.", "추어주면 엉뎅이 나가는 줄 모른다.", 
"자식 과년하면 부모가 반중매쟁이 된다.", 
"잔치 보러 왔다가 초상 본다."];

let start=Date.now(), end = Date.now();
let i = 0;


for(let j = 0; j< words.length/4; j++){
    wordDisplay1.innerText = words[i];
    
    wordDisplay2.innerText = words[i+1];
    
    wordDisplay3.innerText = words[i+2];
    
    wordDisplay4.innerText = words[i+3];
    

    wordinput1.addEventListener('input', ()=>{
    if(wordinput1.value.toLowerCase() === wordDisplay1.innerText.toLowerCase()) {
        end = Date.now();
        score++;
        scoreDisplay.innerText = score; //점수
        timeDisplay.innerText = Math.round((end-start)/1000); //초
        howDisplay.innerText = 60/(Math.round((end-start)/1000))*words[i].length; //타수 바꾸기
        start = Date.now();
        }
      
    })

    wordinput2.addEventListener('input', ()=>{
     if(wordinput2.value.toLowerCase() === wordDisplay2.innerText.toLowerCase()) {
        end = Date.now();
        score++;
        scoreDisplay.innerText = score; //점수
        timeDisplay.innerText = Math.round((end-start)/1000); //초
        howDisplay.innerText = 60/(Math.round((end-start)/1000))*words[i+1].length; //타수 바꾸기
        start = Date.now();
        }
    })

    wordinput3.addEventListener('input', ()=>{
    if(wordinput3.value.toLowerCase() === wordDisplay3.innerText.toLowerCase()) {
        end = Date.now();
        score++;
        scoreDisplay.innerText = score; //점수
        timeDisplay.innerText = Math.round((end-start)/1000); //초
        howDisplay.innerText = 60/(Math.round((end-start)/1000))*words[i+2].length; //타수 바꾸기
        start = Date.now();
        }  
    })
    wordinput4.addEventListener('input', ()=>{ 
    if(wordinput4.value.toLowerCase() === wordDisplay4.innerText.toLowerCase()) {
        end = Date.now();
        score++;
        scoreDisplay.innerText = score; //점수
        timeDisplay.innerText = Math.round((end-start)/1000); //초
        howDisplay.innerText = 60/(Math.round((end-start)/1000))*words[i+3].length; //타수 바꾸기
        start = Date.now();
    }
      
    })
    i+=4;
    wordinput1.value = "";//초기화
    wordinput2.value = "";//초기화
    wordinput3.value = "";//초기화
    wordinput4.value = "";//초기화
}
