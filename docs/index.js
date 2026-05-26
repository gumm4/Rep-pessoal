const botao = document.getElementById("cortrocar");
const body = document.getElementById("body");

console.log("Botão encontrado:", botao);
console.log("Body encontrado:", body);


botao.addEventListener("click", () => {
    body.classList.toggle("dark_mode");
});

async function carregarDados() {

    const resposta = await fetch("/Portfolio-curso/json/dados.json");
    return await resposta.json();

}

async function enviar() {

    const input = document.getElementById("input");
    const texto = input.value.toLowerCase();

    const dados = await carregarDados();

    let resposta = "Não entendi";

    if (texto.includes("tecnologia")) {
        resposta = dados.tecnologias.join(", ");
    }

    if (texto.includes("quadras")) {
        resposta = dados.projetos.qgituadras;
    }

    if (texto.includes("parking")) {
        resposta = dados.projetos.estacionamento;
    }

    document.getElementById("mensagens").innerHTML += `

        <p><strong>Você:</strong> ${texto}</p>
        <p><strong>Bot:</strong> ${resposta}</p>
    
    `;

}