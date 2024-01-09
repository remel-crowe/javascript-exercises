const palindromes = function (subject) {
  const processedString = subject.toLowerCase().replace(/[^a-z0-9]/g, ""); //Remove punctuation, replace with empty space.
  return processedString.split("").reverse().join("") == processedString;
};

// Do not edit below this line
module.exports = palindromes;
