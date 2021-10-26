//1.arrayToList function = Takes and array and gives a list
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


//2. listToArray function = takes a list and gives an array
function listToArray(list){
    let array=[];
    for(let node = list; node; node = node.rest){
        array.push(node.value);
    }
    return array;
}
console.log(listToArray({value:1, rest:{value:2, rest: null}}))


//3. prepend function = takes an element and a list and creates a new list with the added element at the front of the list
function prepend(value, list){
    return {value, rest:list};
}

//4. nth function = takes a list and a number and returns the element at the given position in the list
function nth (list, n) {
    if(!list) { return undefined; }
    else if (n == 0) {
        return list.value;
    }
    else {
        return nth(list.rest, n-1);
    }
}