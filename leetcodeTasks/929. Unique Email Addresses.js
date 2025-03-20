/**
 * @param {string[]} emails
 * @return {number}
 */

function formatEmail(email) {
  const [result] = email.split("+");
  return result.replaceAll(".", "");
}

var numUniqueEmails = function(emails) {
  let map = {};
  let count = 0;
  
  for (const email of emails) {
      const [name, domain] = email.split("@");
      const formattedEmail = `${formatEmail(name)}@${domain}`;
      
      if (!map[formattedEmail]) {
          map[formattedEmail] = true;
          count += 1;
      }
  }
  
  return count;
};