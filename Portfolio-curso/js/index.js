const botao = document.getElementById("cortrocar");
const body = document.getElementById("body");

console.log("Botão encontrado:", botao);
console.log("Body encontrado:", body);


botao.addEventListener("click", () => {
    body.classList.toggle("dark_mode");
});