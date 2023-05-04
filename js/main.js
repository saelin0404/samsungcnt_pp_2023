window.addEventListener("load",()=>{
// main.js

//배너
const autobanner = document.querySelector(".auto_banner>ul");
const autobannerList = document.querySelectorAll(".auto_banner>ul>li");
const bannerPrev = document.querySelector(".auto_banner .btn_prev");
const bannerNext = document.querySelector(".auto_banner .btn_next");
const bannerRoll = document.querySelectorAll("div.auto_banner>.slide>.slide_roll>li");
console.log(bannerRoll);

let autoidx = autobannerList.length-1;
let lastidx = 0;

bannerNext.addEventListener("click",e=>{
  e.preventDefault();
  lastidx++;
  if(autoidx<lastidx)lastidx= 0;
  console.log(lastidx);
  autobannerList[lastidx].querySelector("video").play();
  autobanner.style.transitionDuration = "0.5s"
  autobanner.style.left = `-${(100*lastidx)}%`;

  autobannerList[0].classList.add("last");
  for(let el of bannerRoll){
    el.classList.remove("on")
  }
  bannerRoll[lastidx].classList.add("on")
})


bannerPrev.addEventListener("click",e=>{
  e.preventDefault();
  lastidx--;
  if(0>lastidx)lastidx= autoidx;
  console.log(lastidx);
  autobanner.style.transitionDuration = "0.5s"
  autobanner.style.left = `-${100*lastidx}%`;
  for(let el of bannerRoll){
    el.classList.remove("on")
  }
  bannerRoll[lastidx].classList.add("on")
})

function autoBanner(){
  lastidx++;
  if(autoidx<lastidx)lastidx= 0;
  autobanner.style.transitionDuration = "0.5s"
  autobanner.style.left = `-${100*lastidx}%`;
  for(let el of bannerRoll){
    el.classList.remove("on")
  }
  bannerRoll[lastidx].classList.add("on")
  autoBnn = setTimeout(autoBanner,5000);
}
let autoBnn = setTimeout(autoBanner,5000);


// switch(lastidx){
//   case 0:
//     autobannerList[0].classList.add("banner_last");
//   break;
//   default:
//     autobannerList[0].classList.remove("banner_last");
// }

// setTimeout(() => {
//   switch(autobannerList[0].classList.contains("banner_last")){
//     case true :
//       autobanner.style.transitionDuration = "0s"
//       autobanner.style.left = "-400%";
//       lastidx = 4;
//   }
// }, 3000)

  // switch(lastidx){
  //   case 5:
  //     autobannerList[5].classList.add("banner_first");
  //   break;
  //   default:
  //     autobannerList[5].classList.remove("banner_first");
  // }

  // setTimeout(() => {
  //   switch(autobannerList[5].classList.contains("banner_first")){
  //     case true :
  //       autobanner.style.transitionDuration = "0s"
  //       autobanner.style.left = "-100%";
  //       lastidx = 1;
  //   }
  // }, 3000)

//동영상재생
const business = document.querySelectorAll(".business>ul>li");
const video = document.querySelectorAll(".business>ul>li video");
const pause = document.querySelectorAll(".active .btn_pause");
const play = document.querySelectorAll(".active .btn_play");

for(let el of pause){
  el.addEventListener("click",e=>{
    e.preventDefault();
    e.currentTarget.classList.remove("on");
    e.currentTarget.nextElementSibling.classList.add("on");
    el.closest("li").querySelector("video").pause();
  })
}

for(let el of play){
  el.addEventListener("click",e=>{
    e.preventDefault();
    e.currentTarget.classList.remove("on");
    e.currentTarget.previousElementSibling.classList.add("on");
    el.closest("li").querySelector("video").play();
  }
)}

for(let el of business){
  el.addEventListener("mouseover",e=>{
    el.querySelector("video").play();
    if(el.querySelector(".btn_play").classList.contains("on")){
      el.querySelector("video").pause();
    }
    else{
    }
  })
  el.addEventListener("mouseleave",e=>{
    el.querySelector("video").load();
    el.querySelector("video").pause();
    el.querySelector(".btn_play").classList.remove("on")
    el.querySelector(".btn_pause").classList.add("on")
  })
}


const newsList = document.querySelectorAll(".newsroom_list li");
const newsPrev = document.querySelector(".news_arr .btn_prev")
const newsNext = document.querySelector(".news_arr .btn_next")
console.log(newsList);

for(let el of newsList){
  el.addEventListener("click",e=>{
    e.preventDefault();
    for(let el of newsList){
      el.classList.remove("on");
    }
    el.classList.add("on");
  })
}

const newsInner = document.querySelector(".newsroom_inner ul");
const newsMain = document.querySelectorAll(".newsroom_inner>div>ul>li");


const style = window.getComputedStyle(newsMain[0]);
let width = style.getPropertyValue('width');
let newsWidth = parseInt(width);

let newsidx = 0;
let newsLastIdx = newsMain.length-3

newsNext.addEventListener("click",e=>{
  console.log(newsWidth);
  e.preventDefault();
  if(newsidx<-newsLastIdx){newsidx = -newsLastIdx;}
    newsidx--;
    console.log(newsidx);
    newsInner.style.transform =`translateX(${newsidx*(newsWidth)}px)`;

})

newsPrev.addEventListener("click",e=>{
  e.preventDefault();
  if(newsidx>-1){newsidx = -1;}
  newsidx++;
  newsInner.style.transform =`translateX(${(newsidx)*newsWidth}px)`;
})

const global1 = document.querySelectorAll(".global_inner>ul:nth-of-type(1)>li");
const global2 = document.querySelector(".global_inner>ul:nth-of-type(2)>li>ul")
const global2LI = document.querySelectorAll(".global_inner>ul:nth-of-type(2)>li>ul>li")
console.log(global1);

for(let g=0; g<global1.length; g++){
  global1[g].addEventListener("click",e=>{
    e.preventDefault();
    for(let el of global1){
      el.classList.remove("on");
    }
    global1[g].classList.add("on");
    global2.style.left = `-${100*g}%`;
  })
}

const esgbaaner = document.querySelector(".esg_banner>ul");
const esgPage = document.querySelector(".esg_banner .slide_page");
const esglist = document.querySelectorAll(".esg_banner>ul>li");
const esgPrev = document.querySelector(".esg_banner .btn_prev");
const esgNext = document.querySelector(".esg_banner .btn_next");
console.log(esglist);

let esgidx = esglist.length-1;
let last = 0;

esgNext.addEventListener("click",e=>{
  last++;
  if(esgidx<last)last=0;
  e.preventDefault();
  esgbaaner.style.left = `-${last*100}%`

  for(i=0; i<esglist.length; i++){
    esgPage.innerText = `${last+1}/${esgidx+1}`;
  }
})

esgPrev.addEventListener("click",e=>{
  last--;
  if(0>last)last=esgidx;
  e.preventDefault();
  esgbaaner.style.left = `-${last*100}%`

  for(i=0; i<esglist.length; i++){
    esgPage.innerText = `${last+1}/${esgidx+1}`;
  }
})


})