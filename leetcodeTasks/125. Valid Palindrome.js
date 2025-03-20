var isPalindrome = function(s) {
  const formattedString = s.toLowerCase().replace(/[^a-z0-9]/g, '');

  let pointer1 = 0;
  let pointer2 = formattedString.length - 1;

  while (pointer1 < pointer2) {
    if (formattedString[pointer1] !== formattedString[pointer2]) {
      return false;
    }

    pointer1++;
    pointer2--;
  }

  return true;
};