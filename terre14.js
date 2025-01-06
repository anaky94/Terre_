
/* 24 to 12
Créez un programme qui transforme une heure affichée en format 24h en une heure affichée en format 12h.
*/
const heureDonnee = process.argv[2];
const heureRegex =  /^([0-9]{1}[0-9] {1}|2[0-3]):[0-5][0-9]$/;

function heurePmenAm(){
    
    if (!heureRegex.test(heureDonnee)){
        console.log("erreur : veillez entrez une heure valide du format HH:MM. ");
        return; 
    }
}
// Extraction des heures et minutes
const heure24 = parseInt(heureDonnee.split(":")[0], 10);
const minute = heureDonnee.split (":")[1];

// Conversion au format  des heures 
const heure12 = (heure24 % 12  === 0) ? 12 : heure24 % 12; 
const suffixe = (heure24 >= 12) ? "AM" : "PM"; 

// affichage de l'heure au format de 12heurs
console.log(`il est ${heure12}:${minute.padStart(2,"0")} ${suffixe}`);
heurePmenAm();
