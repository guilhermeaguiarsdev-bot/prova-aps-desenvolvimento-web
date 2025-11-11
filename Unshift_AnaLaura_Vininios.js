
let bancaDeFrutas = ["Maçã", "Banana", "Abacaxi"];


function mostrarBanca() {
  console.log("\n🍊 Frutas disponíveis na banca (do topo para o fim):");

  for (let i = 0; i < bancaDeFrutas.length; i++) {
    console.log(`${i + 1}. ${bancaDeFrutas[i]}`);
  }

  console.log("----------------------------------\n");
}


function adicionarFruta(fruta) {
  bancaDeFrutas.unshift(fruta);
  console.log(`🆕 Nova fruta colocada na frente da banca: ${fruta}`);
}


mostrarBanca();


adicionarFruta("Melancia");
adicionarFruta("Manga");
adicionarFruta("Uva");


mostrarBanca();
