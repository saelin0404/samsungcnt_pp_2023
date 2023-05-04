window.addEventListener("load",()=>{
const btnInfo = document.querySelector(".keyinfo_bar>a");
const info_bar = document.querySelector(".keyinfo_bar");
const info = document.querySelector(".keyinfo_wrap");
const infoInner = document.querySelector(".keyinfo_wrap>.keyinfo_inner");
const closeInfo = document.querySelector(".keyinfo_close")

//info
btnInfo.addEventListener("click",e=>{
  e.preventDefault();
  info_bar.classList.add("off")
  info.classList.add("on")
  wrap.style.overflow = "hidden"
  wrap.style.height = "100vh"
  setTimeout(()=>{
    infoInner.classList.add("scroll");
  },1500)
})

closeInfo.addEventListener("click",e=>{
  e.preventDefault();
  infoInner.classList.remove("scroll");
  info_bar.classList.remove("off")
  info.classList.remove("on")
  wrap.style.overflow = "visible"
  wrap.style.height = "auto"
})

//srch
const btnSrch=document.querySelector(".header_inner .btn_srch");
const srch=document.querySelector(".srch_wrap");
console.log(btnSrch);

btnSrch.addEventListener("click",e=>{
  e.preventDefault();
  srch.classList.toggle("on");
  btnSrch.classList.toggle("on");
})

// 언어
const dd =document.querySelectorAll(".topmenu dd");
console.log(dd);
dd[1].addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on")
})

let lastScrollY = 0;
//스크롤
const header = document.querySelector("#header");
const body = document.querySelector("body")

window.addEventListener("scroll",e=>{
  var scroll = document.querySelector("html").scrollTop;
  if(scroll>=200&&scroll<700){
    header.classList.add("off");
  }
  else if(scroll>=700){
    header.classList.add("none");
    const scrollY = window.scrollY;
    if(scrollY>lastScrollY){
      header.classList.add("none","off");
    }
    else{
      header.classList.remove("none","off");
      header.classList.add("off");
    }
    lastScrollY = scrollY;
  }
  else{
    header.classList.remove("none","off");
  }

})

const footMenu = document.querySelector(".foot_inner>ul>li:nth-of-type(4)");
const footsite = document.querySelector(".foot_inner>.sites");
console.log(footMenu);

footMenu.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  footsite.classList.remove("on")
})
footsite.addEventListener("click",e=>{
  e.preventDefault();
  e.currentTarget.classList.toggle("on");
  footMenu.classList.remove("on")
})


const wrap = document.querySelector("#wrap");
const mobList = document.querySelectorAll(".mob_gnb>ul>li");
const mobDiv = document.querySelectorAll(".mob_gnb>ul>li>div");

for(let el of mobList){
  el.addEventListener("click",e=>{
    e.preventDefault();
    el.classList.toggle("on");
  })
}

const btnMob = document.querySelector(".mob_btn");
const mob = document.querySelector(".mob");

btnMob.addEventListener("click",e=>{
  e.preventDefault();
  btnMob.classList.toggle("on");
  mob.classList.toggle("on");

  if(mob.classList.contains("on")){
  wrap.style.overflow = "hidden"
  wrap.style.height = "100vh"
  }
  else{
    wrap.style.overflow = "visible"
    wrap.style.height = "auto"
  }
})

})