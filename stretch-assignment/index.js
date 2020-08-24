var blocks = document.querySelector(".blocks");
var block = document.querySelectorAll(".block");

let intervalID;
let pos = 0;


block.forEach(element => element.addEventListener('mousedown', (event) => {
    console.log("mousedown event");
    intervalID = window.setInterval(() => {
        pos++;
        event.target.style.transform = `translate(${pos}px, 0)`;
    }, 10)
}))

document.addEventListener("mouseup", ()=>{
    clearInterval(intervalID)
})

block.forEach(element =>{
    element.addEventListener("click", (event)=>{
        event.target.style.order = "-1";
    })
})