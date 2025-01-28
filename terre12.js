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


if (arguments.length !==1){
  console.log("erreur : entrer un nombre")
  process.exit(1);
}
const nombre =parseFloat(arguments[0]);

if (isNaN(nombre)) {
  console.log("ereur entrez un nombre valide");
  process.exit(1);
} else if (nombre < 0) {
  console.log("erreur : le nombre doit etre positif");
  process.exit(1);
} else if (!Number.isInteger(nombre)){
  console.log("erreur : le nombre doit etre un entier. ")
  process.exit(1);
} 

const epsilon=0.00001;
const estimation = nombre / 2;

while (Math.abs(estimation*estimation-nombre)> epsilon){

    estimation=(estimation+nombre/estimation/2);
  }

console.log(`la racince carée de${nombre} est ${resultat}`);