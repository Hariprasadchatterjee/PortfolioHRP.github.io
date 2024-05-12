 const w_btn=document.querySelector(".work_btns")
 const work_btns=document.querySelectorAll(".work_btn")
 const img_overlay=document.querySelectorAll(".img_overlay")
 const sec_hero=document.querySelector(".hero_section")
 const Footer_Elem=document.querySelector(".footer_sec")
 const scTop=document.querySelector(".scrollTop")
 const counter_numbers=document.querySelectorAll(".counter_numbers")
 const head=document.querySelector("header")
 const mobile_nav_btnFrToggle=document.querySelector(".mobile_nav_btn")

console.log(work_btns.length);
work_btns.forEach(element => {
   element.addEventListener("click", (e)=>{
     
      
       let targetDiv=e.target;
   
       work_btns.forEach(element => {
            element.classList.remove("active")
         });
   
         targetDiv.classList.add("active")
      
        let value= targetDiv.dataset.btnNum;
     
        let matchingValue=document.querySelectorAll(`.work_btn__${value}`)
   
        img_overlay.forEach(curentElem =>{
         curentElem.classList.add("hit")
        })
        matchingValue.forEach(curentElem =>{
         curentElem.classList.remove("hit")
        })
   
      
   
    });
   
    
});
 new Swiper(".mySwiper", {
    slidesPerView: 2,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });

 const widthSize= window.matchMedia("(max-width: 780px)")

 const myjsMedia=(widthSize)=>{
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
      autoplay:{
          delay:2500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
      autoplay:{
          delay:2500
      },
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });
  }
 }

 myjsMedia(widthSize)

 widthSize.addEventListener("change",myjsMedia)

const ScrollElem= document.createElement("div");
 ScrollElem.classList.add("scrollTop");
 ScrollElem.classList.add("hide");
 
 ScrollElem.innerHTML=`<ion-icon class="sc_icons" name="arrow-up-outline"></ion-icon>`;
 Footer_Elem.after(ScrollElem)

 const TopView=()=>{
  sec_hero.scrollIntoView({behavior:"smooth"})
 }

 ScrollElem.addEventListener("click",TopView)

 var speed=200;

 counter_numbers.forEach( (curElem)=>{
  
    const updatesNumber=()=>{
      let initialVal=parseInt(curElem.innerText);
    
      let targetVal=parseInt(curElem.dataset.count);
     
  
     let incrementVal=Math.trunc(targetVal/speed);
    

     if(initialVal<targetVal){
      curElem.innerText=`${initialVal+incrementVal}+`
        setTimeout( updatesNumber ,10)
     }
     
    }

   
   updatesNumber()
   
 })



 function myfun(){
  head.classList.toggle("activeNavbar")
 }

 const observer=new IntersectionObserver( (entries)=>{
  const ent=entries[0]
  console.log(ent);
  ent.isIntersecting==false ? document.body.classList.add("sticky") : document.body.classList.remove("sticky")
  ent.isIntersecting==false ? scTop.classList.remove("hide") : scTop.classList.add("hide")
},{
    root:null,
    rootMargin:"-80px",
    threshold:0,
 });

 observer.observe(sec_hero);

 const observerForScroll=new IntersectionObserver( (entries)=>
 {
  const ent=entries[0]
  ent.isIntersecting==false ? scTop.classList.remove("hide") : scTop.classList.add("hide")
 },
 {
    root:null,
    threshold:0
 });
 observerForScroll.observe(sec_hero)