let scrollcontainer = document.querySelector(".gallery");
let backBtn=document.getElementById("backBtn");
let nextBtn=document.getElementById("nextBtn");

scrollcontainer.addEventListener("wheel" , (evt)=>{
    evt.preventDefault();
    scrollcontainer.scrollLeft +=evt.deltaY;
    scrollcontainer.style.scrollBehavior= "auto";

});

nextBtn.addEventListener("click" , function(){
    scrollcontainer.style.scrollBehavior= "smooth";
    scrollcontainer.scrollLeft +=900;
});
backBtn.addEventListener("click" , function(){
    scrollcontainer.style.scrollBehavior= "smooth";
    scrollcontainer.scrollLeft -=900;
})