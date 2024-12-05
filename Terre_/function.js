

/*  les function  */ 
/* 

//  Déclarer un fonction 
    function maFonction(prenom) { // parametre
    // let prenom = "tome";
    console.log("Binvenue " + prenom+ " !");
    }
    // appel de la fonction 
    // maFonction("tom")  // arguments
    let monPrenom = "jeremi" 
    maFonction(monPrenom);
    console.log('fin de code ici <==')

    */ 

   /*  
   * je doit faire une boucle qui affiche en ficntion du client de 0 à 9999
   * Qui afficle CL au debut puit le numero du client à la fin 
   * exmple si client 0 afficher CL0000
   si client 1 afficher CL0001
   * prendre en compte que l'ennoncer nous dit que   "à cause de certaines règles de gestion client obscures, le format doit toujours être sur 6 caractères et doit toujour commencer par CL
   * 
   * avec quel Boucle nous allons coder ceci ?

*/

// console.log("recomencer")

// function afficherNumeroClient(numero) {
//   if (numero < 10) {
//     console.log("N° de client : CL000" + numero);
//   } else {
//     if (numero < 100) {
//       console.log("N° de client : CL00" + numero);
//     } else {
//       if (numero < 1000) {
//         console.log("N° de client : CL0" + numero);
//       } else {
//         console.log("N° de client : CL" + numero);
//       }
//     }
//   }
// }

// afficherNumeroClient(0);
// afficherNumeroClient(1);
// afficherNumeroClient(9);
// afficherNumeroClient(10);
// afficherNumeroClient(99);
// afficherNumeroClient(100);
// afficherNumeroClient(999);
// afficherNumeroClient(1000);
// afficherNumeroClient(9999);



// function afficherPlusieursEtoiles(nombre){
//  let ligne = "";
//  for (let position = 0; position<= nombre; position = position +1){
//   ligne = ligne + "*"
// }
//   console.log(ligne);

// }

// afficherPlusieursEtoiles()
/* Exercice 1 : créez un finction qui prend deux nombres comme arguments et retiurne leur somme
// function affichertriangleEtoile (longueMax){
//   for( let position)

// }

// function nombre1(nombreUn,nombreDeux){
//   console.log(nombreUn+nombreDeux/2)
// }

// nombre1(20,25);


// function(nombre1, nombre2) {
  

// }

// function addition(nombreUn, nombreDeux){
//   if  (typeof nombreUn !== "number" || typeof nombreDeux !== "number"){
//     console.log("Erreur: veuillez entrer deux nombres")
//   }
//   console.log( (nombreUn + nombreDeux)/2 );
// }

// addition(150,20)
*/
/* Exercice 2 :  

Ecrivez une Fonction qui prend un nombre entier de minutes et le convertit en secondes.
un nombre en entier quitransforme 1 min à 60 seconde 
si 1 min = 60 secondes 
2 min = 120 secondes

*/
// function affecherPlusieursEtoiles (nombre){

//   let ligne = "";
//   for (let position = 0; position <= nombre; position = position +1 ){
//     ligne = ligne + "*";

//   }
//    console.log(ligne)
// }

// affecherPlusieursEtoiles(8)

// function afficherTriangleEtoile(longeurMax){
//   for (let position = 0; position <= longeurMax; position = position + 2){  
//     afficherPlusieursEtoiles(position);
//   }
  
//   for(let position = longeurMax - 2 ;position > 0; position = position-2 ){
//     afficherPlusieursEtoiles(position)
//   }

// } 
// afficherTriangleEtoile(7)

//utilisation deu mot-clé "return"
// function calculePrixTTC( prixHorsTaxe, TVAEnPourcent){
//   return prixHorsTaxe * (1+TVAEnPourcent/100);
// }

// console.log(calculePrixTTC());

// function calculerPrixTTC(prixHorsTaxe, TVAEnPourcent){
//   let prixTTC = prixHorsTaxe * (1 + TVAEnPourcent/100);
//   return prixTTC;

// }
// console.log(calculerPrixTTC(10,20))
// console.log("fin du code ")


// let nom ="TOM REDOCEMIA";
//   let numeroRue  = 21;
//   let nomRue = "rue du bloc d'instructions";
//   let codePostale = 1337;
//   let ville = "POINT-VIRGULE";

// function afficherTitre (nom, numetoRue, nomRue, codePostal, ville){

//   console.log( nom  + numetoRue + nomRue+ codePostal + ville);       
// }

// afficherTitre("TOM REDOCA",21 +"faubourg reclus"+ 1337+ "POINTVIRGULE" );

// function afficherTitre(titre){
//   console.log("===[" + titre + "]===")

// }

// function presentation (nom ,numeroRue, nomRue, codePostal, ville ){
//   afficherTitre(" Destinataire ");
//   return (nom + numeroRue + nomRue+ codePostal + ville);
// }


// console.log(presentation("TOM REDOCEMIA \n" , 21 ," rue du bloc d'instructions \n", 1337 , " POINT-VIRGULE" ));

// function afficherAdresseClient(nom, numeroRue, nomRue, codePostal, ville) {
//   console.log(nom);
//   console.log(numeroRue + " " + nomRue);
//   console.log(codePostal + " " + ville);
// }

// afficherAdresseClient("TOM REDOCEMIA \n" , 21 ," rue du bloc d'instructions \n", 1337 , " POINT-VIRGULE" );

// exercice 1 : 


// function formaterNumeroClient(numero){
//   for (let numro = 0; numero < 5000; numero++ )
//     numero = numero + 1 
//     console.log(numero);

//     // if (numero >= 5000 && numero > 7000){
//     //   return   "PR" + numero
//     // }

// }
// formaterNumeroClient(4000);

function lectureParamettre( nom, prenom, age){
  console.log(nom + prenom + age);

}

lectureParamettre(" konan \n", " philippe \n ", 12 + " ans");





function ecrireTitre (titre){
  console.log("$$$$__$listes__$$$$$")

}

let i = 0;

while (i<3){
  console.log(i)
  i++
}
