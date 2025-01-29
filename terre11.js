/* LA PUISSANCE D'UN NOMBRE 
Créez un programme qui affiche le résultat d’une puissance.


L’exposant ne pourra pas être négatif.


Exemples d’utilisation :
$> node exo.js 2 3
8

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction pow
*/
const arguments = process.argv.slice(2);
let puissance = Number(arguments[0]);
let exposant = Number(arguments[1]);

// calcule de la puissance
let resultat = puissance ** exposant;

for (let i = 0; i < exposant; i++) {
  resultat *= puissance; // multiplier le resultat par la puissance à chaque itération par la boucle
  if (exposant & (puissance >= 0)) {
    console.log("erreur");
  }else if (exposant && (puissance ===0)){
    console.log("erreur")
  }else if (exposant & (puissance === 1)) {
    console.log(resultat);
  } else console.log(resultat);

}
console.log(resultat);
// l'exercise est a suprimer 