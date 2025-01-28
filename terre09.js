/* Créez un programme qui affiche le résultat d’une puissance.
L’exposant ne pourra pas être négatif.
Exemples d’utilisation :
$> node exo.js 2 3
8
Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/ 


/* pseudo code : 
1 declarer la variable pour  
*/
const arguments = process.argv.slice(2);

let base = Number(arguments[0]);
let exposant = Number(arguments[1]);


if (isNaN(base) || isNaN(exposant)){
    console.log("erreur: veuillez entrez des nombres")
}
else{
    let resultat = base ** exposant;
    console.log(resultat); // bonne pratique let resultat = base *resultat 
}



