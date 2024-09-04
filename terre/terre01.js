/* Genererun code qui appel l'alphabet AScii suivis d'un retour à la ligne */

const premiervaleurAscii = 97;
const dernierValeurAscii = 122;

let lettres = [];
for (let i = premiervaleurAscii; i <= dernierValeurAscii; i++) {
  lettres.push(String.fromCharCode(i));
}
console.log(lettres.join(""));

