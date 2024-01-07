var openBtn = document.getElementById("menu-btn");
var closeBtn = document.getElementById("close-menu-btn");
var sidemenu = document.getElementById("sidebar");

openBtn.addEventListener("click", function(){
    sidemenu.classList.add("active");
});

closeBtn.addEventListener("click", function(){
    sidemenu.classList.remove("active");
});