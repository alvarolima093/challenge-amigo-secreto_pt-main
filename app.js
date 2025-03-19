function adicionarAmigo() {
    const campoInput = document.getElementById("amigo");
    const nome = campoInput.value;

    if (nome.trim() !== "") { 
        const lista = document.getElementById("listaAmigos");
        const item = document.createElement("li");
        item.textContent = nome;
        lista.appendChild(item);
        campoInput.value = "";
    } else {
        alert("Por favor, insira um nome!");
    }
}

document.getElementById("amigo").addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        adicionarAmigo();
    }
});

function sortearAmigo() {
    const lista = document.getElementById("listaAmigos");
    const itens = lista.getElementsByTagName("li");

    if (itens.length === 0) {
        alert("Adicione amigos antes de sortear!");
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * itens.length);
    const amigoSorteado = itens[indiceSorteado].textContent;
    const resultado = document.getElementById("resultado");
    const item = document.createElement("li");
    item.textContent = `Amigo Sorteado: ${amigoSorteado}`;
    resultado.appendChild(item);
}

function sortearPares() {
    const lista = document.getElementById("listaAmigos");
    const itens = Array.from(lista.getElementsByTagName("li"));

    if (itens.length < 2) {
        alert("Adicione pelo menos dois amigos para sortear pares!");
        return;
    }

    const nomes = itens.map(item => item.textContent);
    const nomesEmbaralhados = nomes.sort(() => Math.random() - 0.5);
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";

    for (let i = 0; i < nomesEmbaralhados.length - 1; i += 2) {
        const amigo1 = nomesEmbaralhados[i];
        const amigo2 = nomesEmbaralhados[i + 1];
        const item = document.createElement("li");
        item.textContent = `${amigo1} → ${amigo2}`;
        resultado.appendChild(item);
    }

    if (nomesEmbaralhados.length % 2 !== 0) {
        const ultimoAmigo = nomesEmbaralhados[nomesEmbaralhados.length - 1];
        const item = document.createElement("li");
        item.textContent = `${ultimoAmigo} não tem par.`;
        resultado.appendChild(item);
    }
}