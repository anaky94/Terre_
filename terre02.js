/*  Créez un programme qui affiche son nom de fichier.

*/

import 'node : process';

console.log(process.argv)

const string   = process.argv[1]; // 
const index    = string.lastIndexOf ('\\') + 1 ;
const fileName = string.slice(index);

console.log(string); 
