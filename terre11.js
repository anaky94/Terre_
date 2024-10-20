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

let exposant = 5;
let puissance = 5;
let resultat = 0;
if (isNaN(puissance) || isNaN(exposant)) {
  console.log("erreur: veuillez entrez des nombres");
} else if (resultat == puissance ** exposant) {
  console.log(resultat);
  resultat = resultat ** puissance;
}
for (let resltat=0;puissance==exposant; resltat  ) 