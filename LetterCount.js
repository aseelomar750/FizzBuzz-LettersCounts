function letterCount(word) {
    const alphabetLetters = "abcdefghijklmnopqrstuvwxyz";

    if (typeof word !== "string") {
        console.log('Error'); // Print error if it's not a letter/word
        return;
    }

    for (const letter of word) {
        if (!alphabetLetters.includes(letter.toLowerCase())) {
            console.error("Error");
            return;
        }
    }
  
    let letterCounts = {};
  
    for (let letter of word) {
        let lowerCaseLetter = letter.toLowerCase();
  
        // If the letter is already in the dictionary, increment its count
        if (letterCounts[lowerCaseLetter] !== undefined) {
            letterCounts[lowerCaseLetter]++;
        } else {
            letterCounts[lowerCaseLetter] = 1;
        }
    }
  
    return letterCounts;
}

letterCount("HelloDevelpers");

// //tests
// console.log(letterCount("Hello"));
// console.log(letterCount("World"));
// console.log(letterCount("123"));
// console.log(letterCount("abc"));
// console.log(letterCount(""));


