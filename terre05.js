/* Créez un programme qui permet de déterminer si l’argument donné est un entier pair ou impair..

Exemples d’utilisation :
$> ruby exo.rb 2
pair
$> ruby exo.rb 5
impair
$> ruby exo.rb Bonjour
Tu ne me la mettras pas à l’envers.
$> ruby exo.rb
Tu ne me la mettras pas à l’envers.
Attention : gérez aussi les entiers négatifs.
*/

const arguments = process.argv.slice(2);

const chiffrePair = 2;

arguments.forEach((arg) => { // le premier truc je ne gere pas le cas d'erreur le 2 em 1er avoir une condition sir argumment est !== de 0 arret le script si l'argument est un nombre faut ajouter les condition et sortire de la boucle 
    var afficheEntier = parseInt(arg);

    if (afficheEntier % chiffrePair === 0) {
        console.log("pair");
    }
    else {
        console.log("impair");
    }
});







