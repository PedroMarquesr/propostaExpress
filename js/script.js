function adicionarItem() {
  let tabela = document.getElementById("tabelaItens");
  let novaLinha = tabela.insertRow();

  novaLinha.innerHTML = `
    <td><input type="text" placeholder="Nome do Item"></td>
    <td><input type="number" min="1" value="1" oninput="calcularTotal(this)"></td>
    <td>
      <select>
        <option value="unidade">Unidade</option>
        <option value="caixa">Caixa</option>
        <option value="litro">Litro</option>
      </select>
    </td>
    <td><input type="text" placeholder="Descrição"></td>
    <td><input type="number" min="0" step="0.01" value="0" oninput="calcularTotal(this)"></td>
    <td class="valorTotal">0,00</td>
    <td><button onclick="removerItem(this)">🗑</button></td>
  `;
}
function calcularTotal(elemento) {
  let linha = elemento.parentElement.parentElement;
  let quantidade = linha.cells[1].querySelector("input").value;
  let valorUnitario = linha.cells[4].querySelector("input").value;
  let valorTotal = quantidade * valorUnitario;

  linha.cells[5].innerText = valorTotal.toFixed(2);
}

function removerItem(botao) {
  let linha = botao.parentElement.parentElement;
  linha.remove();
}
