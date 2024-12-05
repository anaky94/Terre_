// et age = prompt("quel age avez vous?");l
/*
let age = 23;
if (age < 18 ) {
    console.log("vous n'etes pas majeur")
}
else if ( age < 21){
    console.log("vous etes majeur en fance ")
}
else if (age > 21){
    console.log("vous ates majeur partout à vous les casino ! ")
}
*/

// condition switch
/*
let consomable = "carotte";

switch(consomable){
    case 'carotte':
        console.log("ceci est un legumme")
    case"banne":
        console.log("ceci est un fruit")

}
*/
//  condition tenaire 
// let x=5;
// x>5 
// ? console.log("x est supérieur à 5")
// :console.log("x est in férieur à 5")

// if (x>3) {
// console.log("x est supérieur à 3");
// }
// else{
//     console.log("x est inférieur à trois");
// }

// let gareDeDepart = "valencienne";
// let gareDarrivee= prompt("ou souhaité vous aller ? ") || "Gare du nord ";
// let chauffeur= "Louis nicolas";

// if ((gareDeDepart != "" || gareDarrivee != "") && chauffeur !=""){

//     alert("le train vas démarer, à destination de "+ gareDarrivee)
// }
// else {
//     alert("le train ne peut pas demarer. ");
// }

/* 

*/
// var prenom;

// do {
 
//     var prenom = prompt('quel est votre prenom? ');
    
// } while (prenom =="" || prenom == null);
    

// alert("bonjour" + prenom);


// let i =1;

// while (i<5)
// {
//     console.log('ligne '+ 1);
//     i++;
// }

// try {
//     // erreur ?
//     let recompense = prompt("choisissez une recompense : épée, arc , haches");
//     let degats;
//         switch (recompense){
//             case 'épée':
//                 degats = 40;
//                 break;
//             case 'arc':
//                 degats=30
//                 break;
//             case 'haches':
//                 degats=20;
//                 break;
//             default:
//                 throw new Error("vous ne pouvez pas tricher");
//         }
//         alert("vous avez choisir : "+ recompense + "(" + degats + "dégats). ");
// }

// catch(error){
//    alert(error);
// }
// ==================Limites d'age ============================
// let limiteAge= 18;
// let limitePoids = 120;

// function exercice0(ageDuclient,poidsDuclient){
//     if( ageDuclient >= limiteAge && poidsDuclient < limitePoids){

//         console.log("vous pouvez monter dans ce manège");

//     }else{

//         console.log("vous ne pouvez pas monter dans le manège ");
//     }

// }
// exercice0(12,200);
// =============================================limites d'ages=====================


/* 
   Valider un rendez-vous 

    Debut du RDV : 15h40
    Fin Journée  : 16h30
    Durée du RDV (min) : variable
    sortis attendue : 
        -Si la fin du RDV est avant 16h30, afficher "RDV ok"
        -Si la fin du RDV est après 16h30, afficher "RDV imposible"
        -Afficher "le RDV se terminera à HHhMM"

    2)exemple 1 : duree = 15min
    Fin du RDV ? 
    15h40 + 15 mmin = 15h55

    1)comparer 15h55 à 16h30
        si 15h55 est avant 16h30 alors afficher "RDV ok"
        si 15h55 est aprest 16h30 alors afficher "RDV impossible"
    
    3) "Le RDV se terminera à 15h55"

    Algorithme 1 

    comment gérer un horaire ?
    15h55 =>
        let finRdvHeures=15;
        Let finRdvMinutes=55;

        le debutRdvHeures = 15;
        let debutRdvMinutes = 15;

        fin de journée : 16h30

        let finJourneeHeures = 16;
        let finJorneeMinutes = 30;
    
    calcule de la fin du RDV ? pour un durée de 15min 
        15h40 + 15min = 15h55
        
        finRdHeures = debutRdvHeures; **calcule des heures du RDV**
        finRdvMinutes = debutRdvMinutes + duree; ** calcule des minutes du RDV **
        
        15h40 + 25min = 16h05 
        finRdvHeures :15 = debutRdvheures :15
        finRdvMinutes :65 = debutRdvMinutes :40 + duree :25
        si  (finRdvMinutes >= 60){
            finRdvHeures = finRdvHeures + 1;
            finRdvMinutes = finRdvMinutes - 60;    
        }

    Comparer 15h55 à 16h30
        15h55 avant ou après 16h30
        15h00 <16h00 vrai, avant "RDV OK"
        si (finRdHeures < finJourneeHeures){
            afficher("RDV OK");
        }sinon {
            afficher ("RDV Impossible");
        }
        afficher ("Le RDV se terminera à " + finRdvHeures + "h" + finRdv Minutes)


    1er Etape ) 
        Determiner il ya combien de minute dans 1 heure 
        1h = 60minutes
        faire en sorte pour que 15h65 face 

*/

// fin de jounée  : 16h30

let finJourneeHeures        = 16;
let finJourneeMinutes       = 30;

//  Durée du RDV : 15 minutes;
 for (let duree = 1; duree <= 120; duree= duree+ 1){
    // Debut du RDV : 15h40
    let debutRdvHeures      = 15;
    let debutRdvMinutes     = 40;
    
    // ETAPE 1 : calcule de la fin du RDV;
    let finRdvHeures  = debutRdvHeures;
    let finRdvMinutes = debutRdvMinutes + duree; 
    //  Etape 1.1  ;Gestion du cas particulier ou les minutes       sont >= 60 
    while (finRdvMinutes >= 60 ){
        finRdvHeures = finRdvHeures + 1;
        finRdvMinutes = finRdvMinutes - 60;
    }

    // ETAPE 2 : Est ce que la fin du RDV est avant la fin de la joournée ?si (finRdHeures < finJourneeHeures){
    let rdvOk = (finRdvHeures<finJourneeHeures || 
        (finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes));

        // if (finRdvHeures < debutRdvHeures
        //     ||(finRdvHeures === finJourneeHeures && finRdvMinutes < finJourneeMinutes)){
        //     console.log("RDV OK");
        //     } else {
        //     console.log("RDV Impossible");        
        //         }
        // Etape 3 : Affichage de l'heure de fin du RDV
    if (finRdvMinutes < 10){
        if(rdvOk){
            console.log(duree + " min, RDV  ok  le RDV se terminera à " + finRdvHeures + "h0" + finRdvMinutes);
        }else {
            console.log(duree + " min, RDV Impossible, Le RDV se terminera à " + finRdvHeures + "h0" + finJourneeMinutes );
        }
        
    }else{
        if (rdvOk){
            console.log(duree + " min, Le RDV  ok le RDV se terminera à " + finRdvHeures+"h"+ finRdvMinutes)
        } else{
            console.log(duree + " min, RDV Impossible le RDV  se terminera à " + finRdvHeures + "h" + finRdvMinutes)
        }
    }

}
