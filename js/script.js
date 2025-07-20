// ===========Active navbar ============
let nav = document.querySelector(".navigation-wrap");

window.onscroll = function(){
    if(document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on");
    }
    else{
        nav.classList.remove("scroll-on");
    }
}



// =========== nav hide ===========
let navBar = document.querySelectorAll('.nav-link');
let navCollapse = document.querySelector('.navbar-collapse.collapse');

navBar.forEach(function (a) {
    a.addEventListener("click",function(){
        navCollapse.classList.remove('show')
    })
})



// ===Counter countup=====
let valueDisplays = document.querySelectorAll("#count");
let interval = 5000;

valueDisplays.forEach((valueDisplays)=>{
    
    let startvalue=0;
    let endvalue = parseInt(valueDisplays.getAttribute("data-val"));
    let duration = Math.floor(interval / endvalue)
    let counter = setInterval(function () {
        startvalue += 1;
        valueDisplays.textContent = startvalue + "+";
        if (startvalue == endvalue) {
            clearInterval(counter);
        }
    },duration);
})