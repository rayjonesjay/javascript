function generateLetters() {
    for (let i = 0; i < 120; i++) {
        let letter = document.createElement("div");

        letter.style.fontSize = `${11 + i}px`;

        letter.textContent = String.fromCharCode(65 + Math.floor(Math.random() * 26));

        if (i < 40) {
            letter.style.fontWeight = "300"; // First third
        } else if (i < 80) {
            letter.style.fontWeight = "400"; // Second third
        } else {
            letter.style.fontWeight = "600"; // Last third
        }

        document.getElementsByTagName("body")[0].appendChild(letter); // Append the letter div to the body
    }
}
export { generateLetters };
