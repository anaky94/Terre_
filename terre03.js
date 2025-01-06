/*

Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!
}*/

const arguments = process.argv.slice(2);

if (arguments.length < 2){
    console.log("veuillez fournir au moin deux argument"); // si aucun 

}else {
    for (let i=0; i < arguments.length; i++){
        console.log(arguments[i]);// 
    }
}








