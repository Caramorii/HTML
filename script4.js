function somarIntervalo() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const resultado = document.getElementById("resultado");
    let soma = 0;
    resultado.innerHTML = "";

    if (isNaN(inicio) || isNaN(fim) || inicio > fim) {
        alert("Por favor digite um número válido.")
        return;
    }

    for (let i = inicio; i <= fim; ++i) {
        soma += i;
    }
    const item = document.createElement("li");
    item.textContent = `Soma: ${soma}`
    resultado.appendChild(item);
}