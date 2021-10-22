//Exercise 1 =>
//Takes an array as an arguement and returns a new array with the values inverted.

function reverseArr(arr) {
    let newArr = [];

    for (let i = arr.length; i > -1; i--) {
    // the last value of array is pushed as the first value in the new array
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(reverseArr(['xab','yab','zab']));


//Exercise 2 =>
//Takes an array and reverses its values without making a new array.

function reverseArrInPlace(arr) {
    for(let i = 0; Math.floor(arr.length / 2) > i; i++) {
    // value of arr[0] is stored in a new variable 'output'
        output = arr[i];
    // arr[0]'s value is changed with that of arr[4]
        arr[i] = arr[(arr.length - 1) - i];
    // finally arr[4]'s value is replaced with the value stored in output
        arr[(arr.length - 1) - i] = output;
    }
//the process is looped until the mid-point length of the array and its value is returned
    return arr;
    
}

console.log(reverseArrInPlace([1,2,3,4,5]));