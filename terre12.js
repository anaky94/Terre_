/* Racine carrée d’un nombre

Créez un programme qui affiche la racine carrée d’un entier positif.
Exemples d’utilisation :
$> node exo.js 9
3

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.

Fonctions interdites: 
-La fonction sqrt
*/
const arguments = process.argv.slice(2);

let puissanceDunNombre = parseFloat(25);

let epsilon            = 0.00001;
let estimation         = puissanceDunNombre/2;

if (isNaN(puissanceDunNombre)) {
  console.log("ereur entrez un nombre valide");
  return;
} else if (puissanceDunNombre < 0) {
  console.log("erreur : la racine carée d'un nombre négatif n'est pas définie");
  return 
} 

while( Math.abs(estimation*estimation-puissanceDunNombre)> epsilon){

    estimation=(estimation+puissanceDunNombre/estimation/2)
  }

console.log(`la racince carée de${puissanceDunNombre} est ${resultat}`);