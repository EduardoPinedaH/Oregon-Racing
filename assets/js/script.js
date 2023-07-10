const espEl = document.querySelector(".esp");
const porEl = document.querySelector(".por");
const espIdiomaBtn = document.querySelector(".esp-idioma");
const porIdiomaBtn = document.querySelector(".por-idioma")

porIdiomaBtn.addEventListener("click", function() {
    document.querySelector(".esp").classList.remove("esp-show");
    document.querySelector(".esp").classList.add("esp-hide");
    document.querySelector(".por").classList.remove("por-hide");
    document.querySelector(".por").classList.add("por-show");
})

espIdiomaBtn.addEventListener("click", function() {
    window.location.reload();
})
