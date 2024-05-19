function processArray(array) {
    let result = [];

    for (let i = 0; i < array.length; i++) {
        let element = array[i];
        if (element % 2 === 0) {
            result.push(element * 2)
        }else{
            result.push(element * 3)
        }
    }

    return result;
}

// Testing the function.
let nums = [1, 2, 3, 4, 5];

let answer = processArray(nums);

console.log("Task 1:", answer);

// TASK TWO (2)

function formatArrayStrings(word, processedNumbers ) {
    let result = []

    for (let i = 0; i < word.length; i++) {
        if (processedNumbers[i] % 2 === 0) {
            result.push(word[i].toUpperCase());
        }else{
            result.push(word[i].toLowerCase());
        }
    }

    return result;
}
// Testing the function 
let nums2 = [3, 4, 5, 6, 7];
let pnums = processArray(nums2);
let words = ['Chair', 'Continent', 'Parents', 'Domestic', 'Family'];

let answer2 = formatArrayStrings(words, pnums);
console.log("Task 2:", answer2);