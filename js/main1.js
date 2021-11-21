let div2 = document.getElementsByClassName("div2");

let value = 0;
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

init();