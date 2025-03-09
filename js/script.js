function adicionarItem() {
  let tabela = document.getElementById("tabelaItens");
  let novaLinha = tabela.insertRow();

  let celulaItem = novaLinha.insertCell();
  let celulaQuantidade = novaLinha.insertCell();
  let celulaUnidade = novaLinha.insertCell();
  let celulaDescricao = novaLinha.insertCell();
  let celulaValorUnitario = novaLinha.insertCell();
  let celulaValorTotal = novaLinha.insertCell();
  let celulaRemover = novaLinha.insertCell();

  celulaItem.innerHTML = `<input type="number" placeholder="N°">`;
  celulaQuantidade.innerHTML = `<input type="number" min="1" value="1" oninput="calcularTotal(this)">`;
  celulaUnidade.innerHTML = `
    <select>
      <option value="unidade">Unidade</option>
      <option value="caixa">Caixa</option>
      <option value="litro">Litro</option>
    </select>`;
  celulaDescricao.innerHTML = `<input type="text" placeholder="Descrição">`;
  celulaValorUnitario.innerHTML = `<input type="number" min="0" step="0.01" value="0" oninput="calcularTotal(this)">`;

  celulaValorTotal.classList.add("valorTotal");
  celulaValorTotal.innerText = "0.00";

  celulaRemover.innerHTML = `<button onclick="removerItem(this)">🗑</button>`;
}

function calcularTotal(elemento) {
  let linha = elemento.closest("tr");

  let quantidade = parseFloat(linha.cells[1].querySelector("input").value) || 0;
  let valorUnitario =
    parseFloat(linha.cells[4].querySelector("input").value) || 0;
  let valorTotal = quantidade * valorUnitario;

  linha.cells[5].innerText = valorTotal.toFixed(2);
}

function removerItem(botao) {
  let linha = botao.closest("tr");
  linha.remove();
}
