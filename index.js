function calcularSaldo(vitorias, derrotas) {
  return vitorias - derrotas;
}

var vitoriasJogador = 40;
var derrotasJogador = 15;
var rank;

var rankVitoriasJogador = calcularSaldo(vitoriasJogador, derrotasJogador);

if (vitoriasJogador < 10) {
  rank = "Ferro";
} else if (vitoriasJogador >= 11 && vitoriasJogador <= 20) {
  rank = "Bronze";
} else if (vitoriasJogador >= 21 && vitoriasJogador <= 50) {
  rank = "Prata";
} else if (vitoriasJogador >= 51 && vitoriasJogador <= 80) {
  rank = "Ouro";
} else if (vitoriasJogador >= 81 && vitoriasJogador <= 90) {
  rank = "Diamante";
} else if (vitoriasJogador >= 91 && vitoriasJogador <= 100) {
  rank = "Lendário";
} else {
  rank = "Imortal";
}
console.log(
  `Vitorias do jogador são ${vitoriasJogador} e ele esta no nível ${rank} `
);
