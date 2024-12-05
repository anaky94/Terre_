/* Generer un code qui appel l'alphabet AScii suivis d'un retour à la ligne */

const arguments = process.argv.slice(0)
const premiervaleurAscii = 97;
const dernierValeurAscii = 122;

let lettres = "";
for (let i = premiervaleurAscii; i <= dernierValeurAscii; i++) {
<<<<<<< HEAD
  i+= lettres +(String.fromCharCode(i));
  console.log()
  
} 
console.log(i);
=======

  
  lettres += String.fromCharCode(i);
  
} 
console.log(lettres);
>>>>>>> a66bc50c108572e88f9485525725cde5fdeb92d4

