window.addEventListener("load",()=>{
// snb2.js

const li = document.querySelectorAll("#content>.inpuire1>ul>li");
const inpuire2 = document.querySelector("#content>.inpuire2");
const inpuire3 = document.querySelector("#content>.inpuire3");
const inpuire2LI = document.querySelectorAll("#content>.inpuire2>ul>li");

for(let el of li){
  el.addEventListener("click",e=>{
    e.preventDefault();
    for(let el of li){
      el.classList.remove("on");
    }
    e.currentTarget.classList.add("on");
    inpuire2.classList.add("on")
    window.scroll({
      top:750,
      left:0,
      behavior:"smooth"
    })
  })
}
for(let el of inpuire2LI){
  el.addEventListener("click",e=>{
    e.preventDefault();
    for(let el of inpuire2LI){
      el.classList.remove("on");
    }
    e.currentTarget.classList.add("on");
    inpuire3.classList.add("on");
    window.scroll({
      top:1400,
      left:0,
      behavior:"smooth"
    })
  })
}



})