// Business Logic

function wordCounter(text) {
    if (text.trim().length === 0) {
      return 0;
    }
    let wordCount = 0;
    const textArray = text.split(" ");
    textArray.forEach(function(element) {
      if (!Number(element)) {
        wordCount++;
      }
    });
    return wordCount;
  }

// wordCounter() function omitted for brevity.

function numberOfOccurrencesInText(word, text) {
    const textArray = text.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }
  

// 1. create a function that will take a prashe
// 2. store its words in a array
// 3.run a loop over the array to check for the bad
//   words
// 4.replace the varibles w the bad words with other  
//   words we decide
// 5.display the new words in its new context


let offensiveWords = ["zoink", "muppeteer", "biffaroni", "loopdaloop"];

let sentense = "I love piclles zoink in my sandwich";

function replaceOffensiveWords() {
    let arraySentense = sentense.split(' ');

    console.log("arraySentanse: " + arraySentense);

    arraySentense.forEach(function(element) {
        if (offensiveWords.includes(element)) {
            // let offensiveWordIndex = offensiveWords.indexOf(element);
            let arrayWordIndex = arraySentense.indexOf(element);
            arraySentense[arrayWordIndex]="flowers";

            console.log('no no no');
          }
    });
    return arraySentense.join(" ");

      
    
        
};
