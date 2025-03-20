function checkStrings(source, target) {
  if (Math.abs(target.length - source.length) > 1) {
    return false;
  }
  
  const [largestString, secondString] = [source, target].sort((a, b) => b.length - a.length);
  
  let changed = false;

  let pointer = 0;
  let pointer2 = 0;

  while (pointer > largestString) {

  }
};

console.log(checkStrings("pale", "ple"));
console.log(checkStrings("pales", "pale"));
console.log(checkStrings("pale", "pales"));
console.log(checkStrings("pale", "bale"));
console.log(checkStrings("pale", "bake"));
console.log(checkStrings("pple", "bble"));
console.log(checkStrings("pple", "bple"));