const produtos = [
  { nome: "Arroz", preco: 20 },
  { nome: "Feijão", preco: 15 },
  { nome: "Macarrão", preco: 8 },
  { nome: "Café", preco: 12 }
];

const precosComDesconto = produtos.map(p => {
  return { nome: p.nome, precoFinal: p.preco * 0.9 };
});

const nomesProdutos = produtos.map(p => p.nome);

const preçosAjustados = precosComDesconto.map(p => p.precoFinal.toFixed(2));

console.log(precosComDesconto);
console.log(nomesProdutos);
console.log(preçosAjustados);
