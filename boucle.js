/* DANS QUEL CONDITION UTILISER LES BOUCLES ? 
boucle { for} quand on connait le nombre d'itération à effectuer 

boucle { while} quand on ne sais pas a l'avance quand on 
doit itéré (répété)

boucle { do whil} quand inb doit exécuter le bloc d'instruction au moins une fois (quand on rentre directement dans le bloc d'instruction)

*/


// let compteur = 0;
// while (compteur <6){
//     console.log("coupteur "+ compteur);
//     console.log("Instruction de la boucle while");
//     compteur = compteur+1
// }
// console.log("fin")

// do {
//     console.log("compteur : " + compteur);
//     console.log("Instructtion de la boucle do ...while");
//     compteur = compteur + 1;

// }while (compteur <3);

// for (let compteur =0; compteur <3 ; compteur = compteur + 1  ){
//     console.log("compteur : "+ compteur);
//     console.log("Instruction de la boucle for");

// }

// let rirMoqueur ="Mouah"

// while(rirMoqueur !=="Mouahahahah" ){
//     rirMoqueur =rirMoqueur +"ah";
    
// }
// console.log(rirMoqueur);

// let motDePase = "";

// do {
//     console.log("Mot de passe :");
//     motDePase = lireClavier();

// }while (motDePase !== "JS");

// console.log("bienvenue !")


// Boucle Imbriqué 

/* */
// let compteur  = 0 
// while (compteur<2){
//   console.log("bocle while :" + compteur)
//   compteur = compteur + 1;

//   for (let autreCompteur = 0; autreCompteur < 3 ; autreCompteur++ ){
//     console.log("boucle for : "+ autreCompteur);

//   }
//   console.log("dernière instruction du while ");
// }

// Quel est l'intéret d'un boucle imbriqué ?
// for (let ligne = 0; ligne<3; ligne ++){
//   let guirlande = "";
//   for (let colone = 0; colone < 5; colone++){
//     guirlande = guirlande + "*";

//   }
//   console.log(ligne + " : "+ guirlande);

// }

// On peut acceder au variable de boucle extérieur depuis les boucle inférieur  

// for (let ligne = 1; ligne 
//      <11 ; ligne ++){ // <-- boucle dite extérieurs
//   let guirlande = "";
// }  for (let colone = 0; colone < ligne; colone++){ //<-- boucle intérieure 
//     guirlande= guirlande + "*";

// }


let i = 0;

while (i > 3){
    console.log(i)
}



