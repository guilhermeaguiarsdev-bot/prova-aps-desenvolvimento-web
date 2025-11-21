const produtos = [
    {id: 1, nome: "Mouse Gamer", preco: 129.90, estoque: 15},
    {id: 2, nome: "Teclado Mecânico", preco: 399.90, estoque: 2},
    {id: 3, nome: "Monitor 24''", preco: 690.90, estoque: 0},
    {id: 4, nome: "Headset RGB", preco: 199.90, estoque: 7},
    {id: 5, nome: "Cadeira Gamer", preco: 999.90, estoque: 13},
    {id: 6, nome: "Web Cam", preco: 100.00, estoque: 8},
    {id: 7, nome: "Microfone USB", preco: 159.90, estoque: 4}
];

const produtosDisponiveis = produtos.filter(produto => produto.estoque > 0);

function formatarPreco(valor){
    return valor.toFixed(2).replace('.',',');
}

console.log("Produtos disponíveis para venda:");
produtosDisponiveis.forEach(prod => {
    console.log(`- ${prod.nome} | Preço: R$ ${formatarPreco(prod.preco)} | Estoque: ${prod.estoque} unidades`);
});