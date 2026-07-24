/**
 * Problem: Reverse an Array
 *
 * Difficulty: Easy
 * Topic: Arrays
 *
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 */

// Solution with same array
console.log(reverseArray([1,2,3,4,5]),"original array");

function reverseArray(arr){
    let start = 0;
    let end = arr.length - 1;
    while(start < end)
    {
        [arr[end],arr[start]] = [arr[start],arr[end]];
        start++;
        end--;
    }
    return arr;
}

// solution with copy array
function reverseArraycopy(arr){
    let copy = [...arr];
    let start = 0;
    let end = copy.length - 1;
    while(start < end)
    {
        [copy[end],copy[start]] = [copy[start],copy[end]];
        start++;
        end--;
    }
    return copy;
}
console.log(reverseArraycopy([1,2,3,4,5]),"copy arrays")