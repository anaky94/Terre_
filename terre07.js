/* Créez un programme qui affiche l’inverse de la chaîne de caractères donnée en argument.


Exemples d’utilisation :
$> node exo.js “Hello world!”
!dlrow olleH


$> node exo.js “lehciM”
Michel

<<<<<<< HEAD
Attention : je compte sur vous pour gérer les potentielles erreurs d’arguments.


Fonctions interdites: 
-La fonction reverse  */

/* traiter les cas d'erreur 
traiter une seul arguments 
stoceker cela dans une variable 

*/
const arguments = process.argv.slice(2)

function uneFonction(){
    for(const argument of arguments){
        if ((typeof argument !== "string") ){
            console.error("erreur")
        }
    }
}
uneFonction(arguments[2]);



// for (let i=0; arguments.length-1; i--){
//     Console.log(arguments);
// }
