//Takes an array and changes it into a list
function arrayToList(array) 
{
    let list = null;
    for(let i = array.length - 1; i >= 0; i--)
    {
        list = {
            value : array[i],
            rest: list  
        };
    }

    return list;
}
console.log(JSON.stringify(arrayToList([1,2,3])))
