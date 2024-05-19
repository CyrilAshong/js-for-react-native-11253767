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

function createUserProfiles (names, modifiednames) {
    let result = [];
        for (let i = 0; i < names.length; i++) {
            result.push({
                OriginalName: names[i],
                ModifiedName: modifiednames[i],
                id: i + 1
            })
        }
    return result;
}


let nums = [5, 6, 7, 8, 9]
let pnums = processArray(nums);
let names = ['Nii', 'Otu', 'Kwabena', 'Cyril', 'Ashong'];
let pnames = formatArrayStrings(names, pnums);

let UserProfile = createUserProfiles(names, pnames);
console.log(UserProfile);