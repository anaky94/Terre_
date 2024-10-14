






/* crere un progrmme qui affiche de nombre de chaine de caractère passez en agrgument 
Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.


Exemples d’utilisation :
$> python exo.py “Hello world!”
12

$> python exo.py
erreur.
$> python exo.py “Bonjour” “Aurevoir”
erreur.
$> python exo.py 10
erreur.

Fonctions interdites: 
-La fonction length
-La fonction size

*/

const arguments = process.argv.slice(2);
let chaineArguments = arguments.join(""); // combine les argument en une seul chaine 
let compteur = 0;//initialise un compteur 
if (chaineArguments=== ""){ // verification si la chaine est vide 
    console.log("erreur : la chaine est vide");
}else{
for (let element of chaineArguments){
    compteur++;
}
if (isNaN(element)){ // verification si la chaine contien des chiffres 
     console.log("Erreur : la chaine cntien un chiffre")
 }

 }

console.log(compteur); 

