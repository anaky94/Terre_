/* 24 to 12
Créez un programme qui transforme une heur affché 24h en un heur affichée en format 12h

exemple d'utilisation : 
$> rudy exo.rb 23:40
11:40 PM  
lorsque j'ecrit 12:40 en sorti je doit avoir 

Attention : midi et minuit 12:00 = 00 : 00
 */
//determiné les variable d'heures et de munite 

const arguments = process.argv.slice(2)
const DeclarationHeures = arguments [0];
const DeuxPoint = arguments[1];
const DeclarationMinutes = arguments[2];


// if (heures && time.includes(':')){
//     let [heures, minutes] = time.split(":");// séparer heure et minutes
//     console.log(` heure: ${heures}, Minutes : ${minutes}`);
// } else {
//     console.log("veuillez entrez une heure au bon format ")
// }
// heures = heure - 12 // ici je declare que si l'utilisateur rentre l'heure de type 23:23 en sortis j'aurais 11:23 donc 23:23 == 11:23

DeclarationHeures = DeclarationHeures-12
DeclarationMinutes = DeclarationMinutes + DeclarationMinutes


if (arguments >4){
   console.log("erreur")
}
 if (heures > 12){
    console.log(+heures-12)

 } else if (heures === "24:24"){
    console.log("00:00")
 }

 
 console.log("0")
 console.log(DeclarationHeures);
 console.log(DeuxPoint);
 console.log(DeclarationMinutes);