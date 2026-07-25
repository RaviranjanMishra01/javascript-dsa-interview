const arr = [1, 2, 2, 3, 4, 4];

for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j]) {
            console.log("Duplicate:", arr[j]);
        }
    }
}

const arr1 = [1, 2, 2, 3, 4, 4];
const unique = [];

for (let i = 0; i < arr1.length; i++) {
    let found = false;
    for (let j = 0; j < unique.length; j++) {
        if (arr1[i] === unique[j]) {
            found = true;
            break;
        }
    }
    if (!found) {
        unique.push(arr1[i]);
    }
}

console.log(unique);