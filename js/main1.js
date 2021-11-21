const div2 = document.getElementsByClassName("div2");
const goal = document.querySelector('.goal');

let value = 0;
let goal_1 = 0;
function handleClick(event) {
  console.log(event.target);
  // console.log(this);
  // 콘솔창을 보면 둘다 동일한 값이 나온다
  

  console.log(event.target.classList);

  if (event.target.classList[1] === "clicked") {
    event.target.classList.remove("clicked");
    
  } else {
    for (var i = 0; i < div2.length; i++) {
      div2[i].classList.remove("clicked");
      
    }
    value = event.target.id;
    event.target.classList.add("clicked");
  }
}

function init() {
  for (var i = 0; i < div2.length; i++) {
    div2[i].addEventListener("click", handleClick);
  }
}
goal.oninput = function() {
  goal_1 = goal.value;
};


function start()  {
  if(value == 0){
    alert("코드를 선택해주세요")
  }
  else if(goal_1 == 0){
    alert("목표 타수를 설정해주세요")
  }
  else{
    localStorage.setItem("goal",goal_1);
    location.href = "../html/main2.html"
  }
    
}
init();