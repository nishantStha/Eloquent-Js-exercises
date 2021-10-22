//Counts B's
function countBs(string){
    let counter = 0;
    for(let i = string.length; i > -1; i--){
        if(string[i] == "B"){
             counter ++; 
            }
    }
// value of counter should be returned outside of the loop because, after returning the value the code ends.    
return counter;
}

console.log(countBs("BoB"));


//Counts given characters
function countChar(string, char = prompt("Lets count:")){
    let counter = 0;
    for(let i = string.length; i > -1; i--){
        if(string[i] == char){
             counter ++; 
            }
    }   
return counter;
}
console.log(countChar("BooBaaaBooBeeyy"));