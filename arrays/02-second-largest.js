// solution the first largest number
function firstLargest(arr) {
    let largest = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i];
        }
    }
    return largest;
}

console.log(firstLargest([2, 5, 6, 3, 5, 99, 555]))

function secondLargest(arr) {
    let largest = 0;
    let secondLarge = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLarge = largest;
            largest = arr[i];
        } else if (arr[i] > secondLarge && arr[i] !== largest) {
            secondLarge = arr[i];
        }
    }
    return secondLarge;

}
console.log(secondLargest([5, 6, 8, 56, 4, 5]))