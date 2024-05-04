let container=document.querySelector(".container")
let color1=document.querySelector(".color-1")
let color2=document.querySelector(".color-2")
console.log(color2);
color2.addEventListener("click",()=>{
container.classList.add("alter")
})
color1.addEventListener("click",()=>{
container.classList.remove("alter")
})