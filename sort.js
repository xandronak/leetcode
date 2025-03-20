const fs = require('fs');
const path = require('path');

const fileName = path.join(__dirname, './stat.js');
const parseTaskNumber = task => parseInt(task.replace('// #', ''));

const sortList = (sourceArray, list, startIndex) => {
  const sortedList = list.sort((a, b) => parseTaskNumber(a) - parseTaskNumber(b));
  sourceArray.splice(startIndex, 0, ...sortedList);
}

fs.readFile(fileName, (err, data) => {
  if (err) {
    return console.error(err);
  }

  const fileData = data.toString('utf-8');
  const splittedData = fileData.split('\r\n');

  let startPoint = null;

  for (let i = 0; i < splittedData.length; i++) {
    const taskNumber = parseTaskNumber(splittedData[i]);

    if (taskNumber && !startPoint) {
      startPoint = i;
    }

    if (!taskNumber && startPoint) {
      const list = splittedData.splice(startPoint, i - startPoint)
      sortList(splittedData, list, startPoint);

      startPoint = null;
    }
  }

  fs.writeFile(fileName, splittedData.join('\r\n'), (err) => {
    if (err) console.log(err);
  });
}); 