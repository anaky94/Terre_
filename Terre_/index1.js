const arguments = process.argv.slice(2)
 
if (arguments.length===2){
    if (!isNaN(arguments[0]) && !isNaN(arguments[1])){
        
        const firstNumber = parseInt(arguments[0])
        const secondtNumber = parseInt(arguments[1])
        console.log(addition(firstNumber+secondtNumber))
        
    }else{
        console.log ("uniquement des nombre")
    }

}else {
    console;log("veuillez renseigner uniquement 2 arguments")
}



const addition =(firstNumber, secondtNumber) => {
    const result= firstNumber + secondtNumber
    
    return result
}
console.log(arguments)