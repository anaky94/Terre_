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

var ChiffrePair = 2;

arguments.forEach((arg) => {
    var afficheEntier = parseInt(arg);

    if (afficheEntier % ChiffrePair === 0) {
        console.log("pair");
    }
    else {
        console.log("impair");
    }
});







