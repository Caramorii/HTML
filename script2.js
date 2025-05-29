function gerarTabuada() {
    const numero = parseInt(document.getElementById("numero").value);
    const resultado = document.getElementById("resultado");

    // Limpa o conteúdo anterior
    resultado.innerHTML = "";

    if (isNaN(numero)) {
        alert("Por favor, digite um número válido.");
        return;
    }

    // Verifica se é verdadeiro
    let i = 1
    while (i <= 10) {
        const item = document.createElement("li")
        item.textContent = `${numero} x ${i} = ${numero * i}`
        resultado.appendChild(item)
        i++
    }
}