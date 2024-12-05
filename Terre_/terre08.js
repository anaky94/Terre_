
/*Créez un programme qui affiche le nombre de caractères d’une chaîne de caractères passée en argument.
>>>>>>> c0d47d18b97937ed21158962315c5f507a1bed55


Exemples d’utilisation :
$> python exo.py “Hello world!”
12
<<<<<<< HEAD
=======

<<<<<<< HEAD
>>>>>>> 2af543a04bbf696aa1c4166e7c4f738dc0026220
$> python exo.py
erreur.
$> python exo.py “Bonjour” “Aurevoir”
erreur.
$> python exo.py 10
erreur.

Fonctions interdites: 
-La fonction length
<<<<<<< HEAD
-La fonction size */


const arguments = process.argv.slice(2);
let chaineArguments = arguments.join(""); // combine les argument en une seul chaine 
let compteur = 0;//initialise un compteur 
if (Number(chaineArguments) === arguments<0){ // verification si la chaine est vide 
    console.log("entré un arguments");
}else{
for (let element of chaineArguments){
    compteur++;
}
if (Number(element)){ // verification si la chaine contien des chiffres 
     console.log("Erreur : la chaine cntien un chiffre")
 }

 }

console.log(compteur); 
