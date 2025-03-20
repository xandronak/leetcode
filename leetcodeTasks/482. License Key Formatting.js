/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  let value = "";
  let counter = 0;
  const formatted = s.replaceAll("-", "");

  for (let i = formatted.length - 1; i >= 0; i--) {
    value = `${formatted[i].toUpperCase()}${value}`;
    counter += 1;

    if (counter % k === 0 && i !== 0) {
      value = `-${value}`;
    }
  }

  return value;
};