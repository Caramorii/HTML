function gerarTabuada() {
  const numero = parseInt(document.getElementById("numero").value);
  const resultado = document.getElementById("resultado");

  // Limpa o conteúdo anterior
  resultado.innerHTML = "";

  if (isNaN(numero)) {
    alert("Por favor, digite um número válido.");
    return;
  }

  // Laço de repetição for
  for (let i = 1; i <= 100; i = i + 2) {
    const item = document.createElement("li");
    item.textContent = `${numero} x ${i} = ${numero * i}`;
    resultado.appendChild(item);
  }
}
