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