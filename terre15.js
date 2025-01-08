/* 12 To 24
Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.
*/
const heureDonnee = process.argv[2];
const heureRegex =   /^([1-9]|1[0-2]):[0-5][0-9]\s?(AM|PM)$/i;

function heureAmEnPm(){
    
    if (!heureRegex.test(heureDonnee)){
        console.log("erreur : veillez entrez une heure valide du format HH:MM AM/PM. ");
        return; 
    }
}
// Extraction des heures et minutes
const [heure, minute] = heureDonnee.split(":");
const suffixe = heureDonnee.trim().slice(-2).toUpperCase(); //AM ou PM

let heure24 = parseInt(heure, 10);

// Conversion au format  24 heures 
if (suffixe === "AM" && heure24 === 12){
    heure24 = 0; //Minuit(12AM) devient 00
}else if (suffixe === "PM" && heure24 !== 12 ){
    heure24 += 12; // l'après-midi ajoute 12 heures 
}
const sortieSuffice = (heure24>12) ? "PM" : "AM";

// Affichage de l'heure au format de 12heurs
console.log(` il est ${heure24.toString().padStart(2,"0")}:${minute.padStart(2,"0")}`);

heureAmEnPm();