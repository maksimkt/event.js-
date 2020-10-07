let taskOneDiv = document.getElementById('task-1');

let taskOneSpan = document.getElementById('task-1-span');
document.addEventListener('keydown',function (event) {
    if (event.altKey && event.code == 'KeyA') {
        taskOneSpan.remove();
        let input = document.createElement('input'); 
        taskOneDiv.appendChild(input);
    } else if (event.code == 'KeyS' && event.shiftKey) {
        let span = document.createElement('span');
        span.innerText = input;
        input.remove();
    }
});



let taskTwo = document.getElementById('task-2');
window.addEventListener('resize',function (event){
  if (innerWidth < 600) {
      taskTwo.innerText ='Mobile Version';
  }
  else {
    taskTwo.innerText ='Desktop Version';
  }
})

let text = document.getElementById('task-3-text');
let taskThree = document.getElementById('task-3-input');
taskThree.addEventListener('keydown',function (event){
    let inputValue = taskThree.value;
    if (event.code == 'Enter') {
       text.innerText = inputValue;
    }
});


let modal = document.getElementById("my_modal");
let btn = document.getElementById("btn_modal_window");
let span = document.getElementsByClassName("close_modal_window")[0];

document.addEventListener('keydown',function (event) {
    if (event.altKey && event.code == 'KeyO') {
        modal.style.display = "block";
    }
});
document.addEventListener('keydown',function (event) {
    if (event.altKey && event.code == 'KeyC') {
        modal.style.display = "none";
    }
});


btn.onclick = function () {
    modal.style.display = "none";
 }
