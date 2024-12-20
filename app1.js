gsap.registerPlugin(Flip);

let container = document.querySelector(".container");
let box=document.querySelector(".box");
let box1=document.querySelector(".box1");
let box2=document.querySelector(".box2");
let box3=document.querySelector(".box3");

box.addEventListener("click",()=>{
    let state=Flip.getState(".box");
     container.appendChild(box);
    Flip.from(state,{duration:2, ease:"power1.out"});
    
});

box1.addEventListener("click",()=>{
 let state1 = Flip.getState(".box1");
 container.appendChild(box1);
 Flip.from(state1, { duration: 2, ease: "power1.out" });
});

box2.addEventListener("click",()=>{
 let state2 = Flip.getState(".box2");
 container.appendChild(box2);
 Flip.from(state2, { duration: 2, ease: "power1.out" });
});

box3.addEventListener("click",()=>{
 let state3 = Flip.getState(".box3");
 container.appendChild(box3);
 Flip.from(state3, { duration: 2, ease: "power1.out" });
});