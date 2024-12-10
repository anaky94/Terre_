/*

Créez un programme qui affiche les arguments qu’il reçoit ligne par ligne, peu importe le nombre d’arguments.


Exemples d’utilisation :
$> ruby exo.rb je suis solide !
je
suis
solide
!
}*/

const arguments = process.argv.slice(2);// recupère les arguments à partir de 3 élémennts 

if (arguments.length < 1){
    console.log("veuillez fournir au moin un argument"); // si aucun argument est afficher message d'erreur s'affiche 

}else {
    for (let i=0; i < arguments.length; i++){
        console.log(arguments[i]);// parcour la boucle en envoyant les argument un par un 
    }
}

    // for( let i of arguments)
// etablire une liste pour les chainne de caractère  
// crer un boucle qui parcour les chaine de caractère 
// lorsque la boucle vas parcourire les chaine de caratère et qu'elle rencontre un ou deux espace elle divise la chaine de caractère 
// afficher les chaine de caractère les un en dessous des autres 

// si la taille de l'argument est 

// const aficherArgument = "bonjour je suis konan";


// for (let i of aficherArgument){
//     if (aficherArgument === 
//    console.log(aficherArgument)
//     //console.log







