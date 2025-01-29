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
    console.log("veuillez fournir au moin deux argument");
    process.exit();
}

for (const element of arguments){
    if (element !== 'string'){
        console.error("erreur number entrez des chaines de caractère ");
        process.exit();
        console.log("bonjour_boucle");
        
            
        
    }
} // cette condition est pour determiner que les argumen rentré soit que des chaines de caractère on parcour le tableau d'arguments avec une boucle



// for(let i = 0; i < arguments.length; i++ ){

// }

// for (each){

//}

// Je peux créer un boucle qui vas parcourir mes argumment rentré affin de couper chaque argument. Une fois qu'il rencontre un espace m'afficher les un en dessous des autres une boucle itérable est bien ? ou boucle de parcours ? 










