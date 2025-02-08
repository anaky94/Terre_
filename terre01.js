/* Generer un code qui appel l'alphabet AScii suivis d'un retour à la ligne */

const arguments = process.argv.slice(0)// enlever cette rubrique 
const premiervaleurAscii = 97;// metre le code en anglais ex codeFistlattrer
const dernierValeurAscii = 122;

let lettres = "";


for (let i = premiervaleurAscii; i <= dernierValeurAscii; i++) {

  lettres += (String.fromCharCode(i));
} 
console.log(lettres);

// console.log(String.fromCharCode(i));
  
  




