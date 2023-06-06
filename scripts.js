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

    const textArray = word.split(" ");
    let wordCount = 0;
    textArray.forEach(function(element) {
      if (word.toLowerCase() === element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++
      }
    });
    return wordCount;
  }