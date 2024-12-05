
const arguments = process.argv.slice(2);
arguments[0];
arguments[1];
arguments[2];

function longesString(){

    let longest="";
    for (let i =0; i <arguments.length; i++){
        if (arguments[i]>longest.length){
            console.log(longest=arguments[i]);
        }
    }
    console.log(longest)
}

longesString();

