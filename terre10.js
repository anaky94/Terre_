/* Racine Carré d'un nombre 
Créez un programme qui affiche la racine carrée d’un entier positif.


Exemples d’utilisation :
$> node exo.js 9
3
Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.
Fonctions interdites: 
-La fonction sqrt
 */

const arguments = process.argv.slice(2);
// verifier si la longuer des argument est == a 1 
let nombre = parseFloat(arguments[0]);
let mutilplerenombre  = parseFloat(arguments[1]);

if (isNaN(nombre) || isNaN(mutilplerenombre)){
    console.log("erreur: veuillez entrez des nombres")
}else{
    let resultat= (nombre*mutilplerenombre);
}

// l'exercice entier est à refaire c'est un élément qui peut etre multiplier par lui meme 










