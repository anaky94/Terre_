/* 12 To 24
Créez un programme qui transforme une heure affichée en format 12h en une heure affichée au format 24h.
*/
const heureDonnee = process.argv[2];
const heureRegex =   /^([1-9]|1[0-2]):[0-5][0-9]$/;// il manque des cas d'usage 

function heureAmEnPm(){
    if (!heureRegex.test(heureDonnee)){
        console.log("erreur : veillez entrez une heure valide du format HH:MM");
        return; 
    }
}
// Extraction des heures et minutes
const [heure, minute] = heureDonnee.split(":");
let heure24 = parseInt(heure, 10);
if (heure ===12){
    heure = 0; // minuit 12 heures en 12h devient 00 heures en 24h
}else {
    heure24 +=12; 
}

// Affichage de l'heure au format de 12heurs
console.log(`il est ${heure24.toString().padStart(2,"0")}:${minute.padStart(2,"0")}`);

heureAmEnPm();