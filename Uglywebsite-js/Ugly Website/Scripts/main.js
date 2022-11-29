// Add a click event listener that changes styling, or adds something visible to the page
let mybutton = document.getElementById("clickme");
mybutton.addEventListener('click', function(){
    let list = document.getElementById("rainbowlist");
    if(list.style.display !="none"){
        list.style.display = "none";
    }
    else{
        list.style.display = "block";
    }    
});

// Add a scroll event listener that pops up a message to the top of the screen
window.addEventListener("scroll", function() {
    if ((window.innerHeight + Math.ceil(window.pageYOffset)) >= document.body.offsetHeight+40) {
    alert("Skittles");
}
}, { passive: true });

//Add at least one other event listener + interaction of your choice
let mytitle=document.getElementById("title");
let mydiv=document.getElementById("rainbow");
mydiv.addEventListener("mouseenter",function(){
    console.log("working");
    mytitle.innerHTML="";
    mytitle.innerHTML = "Discover the rainbow!";

});
mydiv.addEventListener("mouseout",function(){
    console.log("working");
    mytitle.innerHTML="";
    mytitle.innerHTML = "Taste the rainbow!";

});