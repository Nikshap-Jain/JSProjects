// //CREATION OF TODO USING DOM MANIPULATION
// let input = document.querySelector("input");
// let ul = document.querySelector("ul");
// let add = document.querySelector("#add");

// add.addEventListener("click", () => {
//     let li = document.createElement("li");
//     let deleteTodo = document.createElement("button");
//     deleteTodo.innerText = "Delete Task";
//     deleteTodo.setAttribute("class", "deleteButton");
//     li.innerText = input.value;
//     ul.append(li);
//     li.appendChild(deleteTodo);
//     input.value = "";
// })

// //THIS WILL NOT WORK ON NEWLY ADDED TODO
// // let deleteTodo = document.querySelectorAll(".deleteButton");
// // for ( del of deleteTodo){
// //     del.addEventListener("click", function() {
// //         let parent = this.parentElement;
// //         parent.remove();
// //     })
// // }

// //OLD EVENT LISTNERS DON'T APPLY ON NEWLY ADDED OBJ SO WE USE REVERSE BUBBLING

// ul.addEventListener("click" , (event) => {
//     if (event.target.nodeName == "BUTTON"){
//         event.target.parentElement.remove();
//     }
// })

//SIMON GAME

let box1 = document.querySelector("#first");
let box2 = document.querySelector("#second");
let box3 = document.querySelector("#third");
let box4 = document.querySelector("#fourth");
let heading = document.querySelector("h3");
let boxes = document.querySelectorAll(".box");

let arr = [];
let user = [];
let started = false;
let level = 0;
let highest = 0;

window.addEventListener("keydown", () => {
  if (started == false) {
    levelUp();
    started = true;
  }
});

function levelUp() {
  user = [];
  level++;
  heading.innerText = `Level ${level} \n Your heighest score is ${highest}`;
  random();
}

for (box of boxes) {
  box.addEventListener("click", userClick);
}

function userClick() {
  user.push(this.id);
  userBlinking(this);
  check(user.length - 1);
}

function check(index) {
  if (arr[index] === user[index]) {
    console.log(arr);
    if (arr.length == user.length) {
      setTimeout(levelUp, 1000);
    }
  } else {
    high();
    heading.innerText = `Game over!! your score is ${level} \n Your heighest score is ${highest} Press Any key to restart the game`;
    docBlinking();
    reset();
  }
}

function blinking(box) {
  let temp = box.style.backgroundColor;
  box.style.backgroundColor = "white";

  setTimeout(() => {
    box.style.backgroundColor = temp;
  }, 300);
}

function userBlinking(box) {
  let temp = box.style.backgroundColor;
  box.style.backgroundColor = "green";

  setTimeout(() => {
    box.style.backgroundColor = temp;
  }, 300);
}
function docBlinking() {
  let body = document.querySelector("body");
  body.style.backgroundColor = "red";
  setTimeout(() => {
    body.style.backgroundColor = "white";
  }, 300);
}

function random() {
  let whichbox = Math.floor(Math.random() * 4) + 1;
  if (whichbox == 1) {
    blinking(box1);
    arr.push(box1.id);
  } else if (whichbox == 2) {
    blinking(box2);
    arr.push(box2.id);
  } else if (whichbox == 3) {
    blinking(box3);
    arr.push(box3.id);
  } else {
    blinking(box4);
    arr.push(box4.id);
  }
}

function reset() {
  started = false;
  user = [];
  arr = [];
  level = 0;
}

function high() {
  if (highest < level) {
    highest = level;
  }
}
