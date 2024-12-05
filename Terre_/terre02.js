/*  Créez un programme qui affiche son nom de fichier.

peusdo : 
<<<<<<< HEAD
>importer le chemin d'acces des ensembles des fichiers
>faire appel au fichier en fesant en sorte que le mon fichier s'affiche  
=======
 1- definir la variable dossier avec le chemin du dossier ou se trouvent les fichiers
 2- définir la variable fichier avec le nom du fichier que tu veux mourir 
 importer les modules  fichier 'fs' opérations de fichier. 
 importer le modules path pour gérer les chemin.
 en tant que etre humain pour faire appel a quelqu'un faut je connaisse son nom 
 import 
constante 



*/

import 'node : process';

console.log(process.argv)

const string   = process.argv[1]; // je declare 
const index    = string.lastIndexOf ('\\') + 1 ;
const fileName = string.slice(index);

console.log(string); 
// console.log(index); 
// console.log(fileName);

// import 'node:process';

// let {argv} = require("process");
// let argument = argv.splice(5)
// console.log(arguments)