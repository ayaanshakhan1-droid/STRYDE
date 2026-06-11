// Loader

window.onload=()=>{
document.getElementById("loader").style.display="none";
};

// Counter Animation

document.querySelectorAll(".counter").forEach(counter=>{

let update=()=>{

let target=+counter.dataset.target;
let count=+counter.innerText;

let speed=target/100;

if(count<target){
counter.innerText=Math.ceil(count+speed);
setTimeout(update,20);
}else{
counter.innerText=target;
}

};

update();

});

// Navbar Scroll

window.addEventListener("scroll",()=>{

document.querySelector(".navbar")
.classList.toggle(
"sticky",
window.scrollY>100
);

});

// Reveal Animation

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document
.querySelectorAll("section")
.forEach(sec=>observer.observe(sec));