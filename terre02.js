/*  Créez un programme qui affiche son nom de fichier.

peusdo : 

 1- definir la variable dossier avec le chemin du dossier ou se trouvent les fichiers
 2- définir la variable fichier avec le nom du fichier que tu veux mourir 

 importer les modules  fichier 'fs' opérations de fichier. 
 importer le modules path pour gérer les chemin.

/---------------  ------------------\


*/

const fs = require("fs");
const path = require("path");

const NomFichier = path.basename("/Desktop/TERRE/terre01.js"); // la variable combine l'appelation du dossier > fichier despuis l'emplacement ou il se trouve sur le bureau $
const cheminCompletFicher = path.join("Desktop/TERRE", NomFichier);

fs.access(cheminCompletFicher, fs.constant.F_OK, (err) => {
  if (!err) {
    console.log(NomFichier);
  } else {
    console.log("le fichier n'existe pas");
  }
});

// condition pour gérer  si mon fichier peut etre appeler...
