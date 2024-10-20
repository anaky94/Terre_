/* Generer un code qui appel l'alphabet AScii suivis d'un retour à la ligne */

const arguments = process.argv.slice(2)
const premiervaleurAscii = 97;
const dernierValeurAscii = 122;

let lettres = [];
for (let i = premiervaleurAscii; i <= dernierValeurAscii; i++) {
  lettres.push(String.fromCharCode(i));
  return
} 
console.log(lettres.join(""));

