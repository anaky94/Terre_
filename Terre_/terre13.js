
/*  NOMBRE PREMIER 
créer un programme qui affiche si un nombre est premier ou pas.

exemple: 
$> node exo.js 5
oui, 5 est un nombre premier.
*/ 
const arguments = process.argv.slice(2)
// const nombrePremier = Number(arguments[2]);
let nombrePremier = 11;
if (isNaN(nombrePremier) || arguments.length === 0){
    console.log(" veuillez entrer un nombre valide");
}
if (nombrePremier <= 1 ){
    console.log(nombrePremier + " nest pas un nombre premier");
    } 
if (nombrePremier === 2) {
    console.log(nombrePremier + " est un nombre premier");// seulement 2 est pair

} 
if (nombrePremier % 2 === 0 ){ // les autres nombre pairs ne son pas premier 
    console.log(nombrePremier + " n'est pas un nombre premier");
    }
    
const racine = Math.sqrt(nombrePremier);
    
for (let i = 3; i <= racine ; i += 0){
    if (nombrePremier % i === 0){
            console.log(" non " + nombrePremier + " est pas premier " ); // si divisible un nombre divisible n'est pas pas trouver
            break
            
    }else{
        console.log(" oui " + nombrePremier + " est premier" ); // est divisible pas un autre  
        exit
        }
    }


