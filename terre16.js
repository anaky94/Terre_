/* ***TROUVER LA SUISSE ***

Créez un programme qui prend en paramètre trois entiers et affiche la valeur du milieu.
Exemples d’utilisation :
$> ruby exo.rb 11 40 34
34
$> ruby exo.rb 2 1 3
2
$> ruby exo.rb 2 2 2
erreur.
Fonctions interdites: 
-La fonction sort
*/

const arguments = process.argv.slice(2)
function regrouper (a,b,c){

  let mini = Math.min(a,b,c)
  let maxi = Math.max(a,b,c)


  if (a === b && b === c){
    console.log("erreur")
  }
  else if (b !== maxi && b !== mini){
    console.log(b)

  } else if (a !==maxi && a !== mini){
    console.log(a)
  }else if (c !== maxi && c !== mini){
      console.log(c)
    }
  }
regrouper(arguments[0],arguments[1],arguments[2])

// a > b et a > c et a < b et a < c
 // b < a et 
//  if (a < b && a > c ){
//   console.log(true)
// }else {
//   console.log(false)
// }
// if (a===b && b===c){
//   console.log("erreur")
// }
//declarer les cconditions
// function suisse(nombreUn,nombreDeux,nombreTrois){

//   console.log(Math.min(nombreUn, nombreDeux, nombreTrois)); 
//   if ( nombreUn > nombreDeux && nombreUn < nombreTrois ) {
//     console.log(nombreDeux)
//   }
//   if (nombreUn===nombreDeux && nombreDeux === nombreTrois){
//     console.log("erreur")
//   }
// }
// pour i de 1 a tableau.longeur
