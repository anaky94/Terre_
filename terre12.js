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
let resultat = puissanceDunNombre * 0.5;
// for (let i= 0 );
if (isNaN(puissanceDunNombre)) {
  console.log("ereur");
} else if (puissanceDunNombre < 0) {
  console.log("erreur: nombre négatif");
} else {
  console.log(`la racince carée de ${puissanceDunNombre} est ${resultat}`);
}
