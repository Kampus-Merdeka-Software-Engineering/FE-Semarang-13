const descriptionButton = document.getElementById("description");
const teacherButton = document.getElementById("teacher");
const indoDesc = document.querySelector(".indo-desc");
const teacherInfo = document.querySelector(".teacher");

descriptionButton.addEventListener("click", function () {
    indoDesc.style.display = "block";
    teacherInfo.style.display = "none";
});

teacherButton.addEventListener("click", function () {
    indoDesc.style.display = "none";
    teacherInfo.style.display = "block";
});