const pedidos = [
  { id: 101, cliente: "Marcos", status: "entregue", diasAtraso: 0 },
  { id: 102, cliente: "Aline", status: "em transporte", diasAtraso: 0 },
  { id: 103, cliente: "Rafael", status: "pendente", diasAtraso: 3 },
  { id: 104, cliente: "Bruna", status: "pendente", diasAtraso: 0 }
];

function existemPedidosAtrasados(lista) {
  return lista.some(pedido => pedido.diasAtraso > 0);
}

if (existemPedidosAtrasados(pedidos)) {
  console.log("Atenção: Existe pelo menos um pedido atrasado.");
} else {
  console.log("Nenhum pedido atrasado no momento.");
}
