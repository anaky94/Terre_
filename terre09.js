/* Créez un programme qui affiche le résultat d’une puissance.
L’exposant ne pourra pas être négatif.
Exemples d’utilisation :
$> node exo.js 2 3
8
Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/ 

const arguments = process.argv.slice(2);

let base = parseFloat(arguments[0]);
let exposant = parseFloat(arguments[1]);


if (isNaN(base) || isNaN(exposant)){
    console.log("erreur: veuillez entrz des nombre")
}else{
    let resultat = base ** exposant;
    console.log(resultat);
}



