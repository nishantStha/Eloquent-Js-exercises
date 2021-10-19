//The range function returns the array of range between 2 arguements start and end. The step arguement determines the steps for increment.
function range(start, end, step = start < end ? 1 : -1)    
// Here  a condition is set in step arguement because, if no arguement is provided the default increment would be by 1 or -1, depending on the condition.

{
    let arr = [];

// Two conditions should be mentioned for positive and negative steps.
    if (step > 0) 
    {
        for (let i = start; i <= end; i += step)
        {
            arr.push(i);    
        }
    }
    else 
    {
        for(let i = start; i >= end; i += step)
        {
            arr.push(i);
        }
    }
    return arr;
}

// The sum function takes the array and returns the sum of all the numbers in the array.
function sum(arr)
{
    let total = 0;

//Takes all the value of the array 'arr' and adds each one of them to the variable 'total' until all the values are summed up.
    for(let value of arr)
    {
        total += value;
    } 

    return total;
}

console.log(sum(range(10,1,2)));
