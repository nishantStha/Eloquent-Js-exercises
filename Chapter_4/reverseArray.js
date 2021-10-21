//The function takes an array as an arguement and returns a new array with the values inverted.

function reverseArr(arr) {
    let newArr = [];

    for (let i = arr.length; i > -1; i--) {
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr(['xab','yab','zab']));
// => ['zab','yab','xab']