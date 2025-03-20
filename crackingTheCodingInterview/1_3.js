function replaceSpaces(s) {
  let result = "";

  for (const symbol of s) {
    if (symbol === " ") {
      result += "%20";
    } else {
      result += symbol;
    }
  }

  return result;
}

console.log(replaceSpaces("Mr John Smith"));