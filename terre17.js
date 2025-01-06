

/* TERRE : oK 
Créez un programme qui célèbre votre victoire.
Exemples d’utilisation :
$> ruby exo.rb
J’ai terminé l’Épreuve de la Terre et c’était [].
$>

*/


const arguments = process.argv.slice(2)

function finEpreuveTerre (arguments){
    console.log("j'ai terminer l'epreuve de la terre c'etait " + arguments)
}

finEpreuveTerre(arguments)