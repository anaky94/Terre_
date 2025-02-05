/* Créez un programme qui affiche le résultat et le reste d’une division entre deux nombres.

Exemples d’utilisation :
$> python exo.py 5 2
résultat: 2
reste: 1
$> python exo.py 10 0
erreur.

$> python exo.py 3 5
erreur.
 */
const arguments = process.argv.slice(2);
const dividende = parseFloat(arguments[0]);
const diviseur = parseFloat(arguments[1]);


if (arguments.length !== 2){
    console.error("erreur entrez deux argument seulement");
    process.exit();
}
for (const argument of arguments){
    if (isNaN(argument)){
        console.error("ecrivez un nombre")
        process.exit();
    }   
}
if (dividende===0){
    console.error("la division par zero est impossible");
    process.exit();
}
if(diviseur===1){
    console.log("diviser un nombre par 1 est" , dividende);
    process.exit();
}
if (diviseur ===dividende){
    console.log(1);
    process.exit();
}
if(diviseur < dividende){
    console.error("erreur.");
    process.exit();
}
const quotient = dividende / diviseur;
console.log("resultat",Math.round(quotient)); 
const reste = dividende % diviseur;
console.log("reste",reste);















