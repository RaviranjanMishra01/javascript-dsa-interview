// solution the first largest number
/**
 * Problem: Find the Largest Element in an Array
 * Topic: Arrays
 * Time Complexity: O(n)
 * Space Complexity: O(1)
*/
// Solution

console.log(firstLargest([2, 5, 6, 3, 5, 99, 555]));
function firstLargest(arr) {
    let largest = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

/**
 * Problem: Find the Second Largest Element in an Array
 * Topic: Arrays
 * Time Complexity: O(n)
 * Space Complexity: O(1)
*/
// Solution
console.log(secondLargest([5, 6, 8, 56, 4, 5]));
function secondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }
    return secondLargest;
}