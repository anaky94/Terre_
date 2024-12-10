/*  Créez un programme qui affiche l’alphabet à partir de la lettre donnée en argument en lettres minuscules suivi d’un retour à la ligne.

Exemples d’utilisation :
$> python exo.py n
nopqrstuvwxyz
$>

Attention : votre programme devra utiliser une boucle.
*/

const arguments = process.argv.slice(2);
const lettreDeDepart = arguments[0]; //premier lettre passez en argument 
const asciDeDepart = lettreDeDepart.charCodeAt(0);// Convertit cette lettre en valeur ASCII

const dernierValeurAscii = 122;

let lettres = [];
for (let i = asciDepart; i <= dernierValeurAscii; i++) {
  lettres.push(String.fromCharCode(i)); // ajoute les lettres ascii à partir de la lettre saisie 
  if (lettres != str(lettres)){
    console.log("erreur")
  }
}

console.log(lettres.join(",")); // affiche la letre à partire de Z











