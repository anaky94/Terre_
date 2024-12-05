/* Racine carrée d’un nombre

Créez un programme qui affiche la racine carrée d’un entier positif.
Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

Fonctions interdites: 
-La fonction sqrt
*/

let puissanceDunNombre = parseFloat(25);
<<<<<<< HEAD
let epsilon ="";
let estimation = puissanceDunNombre/2;
=======
let epsilon            = 0.00001;
let estimation         = puissanceDunNombre/2;

>>>>>>> a66bc50c108572e88f9485525725cde5fdeb92d4
if (Number(puissanceDunNombre)) {
  console.log("ereur entrez un nombre valide");
} else if (puissanceDunNombre < 0) {
  console.log("erreur: nombre négatif");
} else {
  while(estimation*estimation-puissanceDunNombre> epsilon){

    estimation=(estimation+puissanceDunNombre/estimation/2)

  }
}
console.log(`la racince carée de ${puissanceDunNombre} est ${resultat}`);