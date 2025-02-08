/*Créez un programme qui détermine si une liste d’entiers est triée ou pas.


Exemples d’utilisation :
$> ruby exo.rb 9 8 3
Pas triée !

$> ruby exo.rb 3 8 9 12
Triée !

$> ruby exo.rb “Salut”
erreur.


Fonctions interdites: 
-La fonction sort

 */
//Nomé les variable correctement  

const arguments = process.argv.slice(2);

if( arguments.length < 2){
    console.error("erreur");
    process.exit();
}

const numbers = [];

for(const argument of arguments){ // verifier si ma condition est un nombre par une boucle
    if(isNaN(argument)){
        console.error("erreur Number ");
        process.exit();
    }
    const number = Number(argument);
    numbers.push(number);
}
let isSorted = true;

for (let i=1; i < numbers.length; i++ ){
    console.log(numbers[i-1]);
    if(numbers[i] < numbers[i-1]){
       isSorted = false;
       break
    }
}

if (isSorted){
    console.log("triée")
}else{
    console.log("pas triée")
}


console.log(numbers);
