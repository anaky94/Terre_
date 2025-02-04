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


let dividende = parseFloat(process.argv[2]);// declarer une  constante 

let diviseur =parseFloat(process.argv[3]);//declarer en const



// condition
// for (cosnt argumen of argument){
    // if (isnan(argument){
    //     console.log(erre)
    //     process.exit()
    // }}/* toujours utiliser une bocle pour*/

function division(dividende, diviseur){
    if (diviseur ===0){
        console.log("Erreur.")
        return;
    }
    let resteDelaDivision = dividende % diviseur;
    let resultatDeLaDivision = dividende / diviseur; 

    if (resteDelaDivision===0){
        console.log("reste: "+ resteDelaDivision)
    }else{console.log("la divisiondonne un reste :" + resteDelaDivision)// cela ne sert a rien il faut suprimer 


    }
    console.log("resultat:"+ resultatDeLaDivision)
}

division(dividende, diviseur)
















