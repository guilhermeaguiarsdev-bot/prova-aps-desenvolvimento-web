const pedidos = [
  { id: 1, cliente: "Ana", itens: 3, pago: true },
  { id: 2, cliente: "Bruno", itens: 5, pago: true },
  { id: 3, cliente: "Caio", itens: 2, pago: true }
];

function todosPagos(lista) {
  return lista.every(p => p.pago === true);
}

const resultado = todosPagos(pedidos);
console.log(resultado);