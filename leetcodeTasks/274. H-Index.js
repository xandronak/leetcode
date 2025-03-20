/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {
  const sortedCitations = citations.sort((a, b) => b - a);
  let h = 0;

  for (let i = 0; i < sortedCitations.length; i++) {
    if (sortedCitations[i] > h) {
      h++;
    }
  }

  return h;
};