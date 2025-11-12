console.log("👤 - Relatório de Clientes:");

const clientes = [
  { id: 1, nome: "Renan", saldo: 1500 },
  { id: 23, nome: "Lucas", saldo: 235.5 },
  { id: 456, nome: "Maria", saldo: 9876.3 }
];

for (let cliente of clientes) {
    const idFormatado = cliente.id.toString().padStart(4, "0");
    const saldoFormatado = "R$ " + cliente.saldo.toString().replace('.', ',');
    console.log(`Cliente: ${cliente.nome} | ID: ${idFormatado} | Saldo: ${saldoFormatado}`);
}