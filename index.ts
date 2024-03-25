const findWords = (inputString: string, dictionary: string[]): string[] => {
  return dictionary.filter((word) => canBeFormed(inputString, word));
};

// Determine whether a single word can be formed using the inputString
const canBeFormed = (inputString: string, targetWord: string): boolean => {
  const inputMap = wordToMap(inputString);
  let result = true;
  for (const char of targetWord) {
    // If inputMap[char] is undefined or 0, return false
    if (!inputMap[char]) {
      result = false;
      break;
    } else {
      inputMap[char] = inputMap[char] - 1;
    }
  }
  return result;
};

// Transform the inputString to an object, for example, "food" to { f: 1, o: 2, d: 1 }
const wordToMap = (inputString: string): { [key: string]: number } => {
  const map: { [key: string]: number } = {};
  for (const char of inputString) {
    if (map[char]) {
      map[char] = map[char] + 1;
    } else {
      map[char] = 1;
    }
  }
  return map;
};

// testing
console.log(
  findWords("ate", [
    "ate",
    "eat",
    "tea",
    "dog",
    "do",
    "god",
    "goo",
    "go",
    "good",
  ])
);

console.log(
  findWords("oogd", [
    "ate",
    "eat",
    "tea",
    "dog",
    "do",
    "god",
    "goo",
    "go",
    "good",
  ])
);

console.log(findWords("ooo", ["oo", "ooo", "good"]));

console.log(findWords("o", ["oo", "ooo", "good"]));
