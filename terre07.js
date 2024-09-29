/* Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.*/

// 1er j'ecrit ma chaine souhaiter je peux crer une boucle qui parcourt l'ensemble de ma lettre
// j'ecrit une liqne quand elle parcourt en retour elle affiche le contraire de ce qu'elle a parcourut j epeut mettre des condition

// const arguments = process.argvslice(2)
// var chaine = chaineDecaractere.split("").reverse("").join("")
// console.log()

/*
const arguments = process.argv


let aficherArgument=[];

for (let i=0; i < affiArgument.length; i++ ){
console.log(affiArgument[i]);

}

*/
// const arguments = process.agrv.slice(2);

let chaineArgumentsRevers = "je suis konan";

for (let i = chaineArgumentsRevers.length - 1; i >= 0; i--) {
    //i est initialisé à chaineArgumentsRevers.length -1 pour commencer à la fin de la chaine 
    // la boucle continue tant que i est supérieur ou egale à 0 ( i>= 0 )
    // i-  décrémentee i à chaque itération parcourir la chaine de la fin vers le debut   

  console.log(chaineArgumentsRevers[i]);
}
