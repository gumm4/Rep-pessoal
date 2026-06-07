const butao = document.getElementById("info");
const  tec = document.querySelector(".tecnologias");

butao.addEventListener("click", () => {

    if (tec.style.display === "block") {
        tec.style.display = "none";

    } else {
        tec.style.display = "block";
        tec.style.opacity = "1";
    };

});