
const arguments = process.argv.slice(2);

if (!/^([0-9] {1}[0-9] {1}| 2[0-3]) : [0-5][0-9]/)


function longesString(){

    let longest=" " ;
    for (let i =0; i <arguments.length; i++){
        if (arguments[i]>longest.length){
            console.log(longest=arguments[i]);
        }
    }
    console.log(longest)
}

longesString();

