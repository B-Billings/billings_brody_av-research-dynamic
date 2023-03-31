const togglebtn = document.getElementById("toggle-buttons");
const btnarea = document.querySelector(".buttons-area");
const btnarea2 = document.querySelector(".buttons-area2");

togglebtn.addEventListener("click", function(){
    btnarea.classList.toggle("hide");
    btnarea2.classList.toggle("hide");
});
