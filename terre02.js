/*  Créez un programme qui affiche son nom de fichier.

*/

import 'node : process';

console.log(process.argv)

const string = process.argv[1]; // 
const index = string.lastIndexOf('\\') + 1; // bien coler les parenthese à la fonction on peut le faire avec des bloc élémentaire on pourais dire avec une bloucle à chaque tour on pourais concaténé les nom du fichier path filename 
const fileName = string.slice(index);

console.log(string); 
// 
