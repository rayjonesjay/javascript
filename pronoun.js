function pronoun(str) {
    // Replace all newline characters with empty spaces and then split by whitespace
    str = str.toLowerCase();


     str = str.replace(/\n/g, ' ');

     str = str.replace(/,/g, ' ');

     console.log(">>>>>>>",str);
     const slice =  str.split(' ')
    const wordCount = countWordOccurrence(slice);
    const result = {};

    for (let i = 0; i < slice.length; i++) {
        if (isPronoun(slice[i])) {
            const nextWord = findNext(slice, i); // find the next word after the pronoun that is not a pronoun

            // If the pronoun does not exist as a key in the result, create an entry
            if (!result.hasOwnProperty(slice[i])) {
                result[slice[i]] = { word: [], count: wordCount.get(slice[i]) };
            }

            // If nextWord has been found, push it into the result array
            if (nextWord) {
                result[slice[i]].word.push(nextWord);
            }
        }
    }

    return result;
}

// Count the number of times each pronoun occurs in the string
function countWordOccurrence(slice) {
    const mappy = new Map();
    for (let word of slice) {
        if (isPronoun(word)) {
            let count = mappy.get(word) || 0; // Set count to 0 if word hasn't been seen
            mappy.set(word, count + 1); // Increment for each occurrence
        }
    }
    return mappy;
}

// Find the next word that is not a pronoun
function findNext(slice, startIndex) {
    if (startIndex + 1 < slice.length && !isPronoun(slice[startIndex + 1])) {
        return slice[startIndex + 1]; // Return the next word if it's not a pronoun
    }
    return null; // Return null if no valid next word is found
}

// Helper function to check if a word is a pronoun
function isPronoun(word) {
    const pronouns = ['i', 'you', 'it', 'they', 'she', 'he', 'we'];
    return pronouns.includes(word.toLowerCase());
}

// Test case
const ex = 'I buy,\ni to,\nYOU buy,\nit have,\nIt buys,\nit is,\nyou go';
const res = pronoun(ex);
console.log(res);
