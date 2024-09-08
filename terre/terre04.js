/*  Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.


Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>


Attention : votre programme devra utiliser une boucle.
*/

const premiervaleurAscii = 122;
const dernierValeurAscii = 97;

let lettres = [];
for (let i = premiervaleurAscii; i >= dernierValeurAscii; i--) {
  lettres.push(String.fromCharCode(i));
}

console.log(lettres.join(""));











