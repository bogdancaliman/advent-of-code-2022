const fs = require("fs").promises;

function sumGroups(arr) {
  const result = [];
  let currentGroup = [];
  let groupNumber = 1;

  for (const num of arr) {
    if (num === 0) {
      if (currentGroup.length > 0) {
        const sum = currentGroup.reduce((acc, n) => acc + n, 0);
        result.push({ groupNumber, sum });
        groupNumber++;
        currentGroup = [];
      }
    } else {
      currentGroup.push(num);
    }
  }

  // Calculate and store the last group (if not ending with 0)
  if (currentGroup.length > 0) {
    const sum = currentGroup.reduce((acc, n) => acc + n, 0);
    result.push({ groupNumber, sum });
  }

  return result;
}

async function readFileAndReturnContent(filePath) {
  return fs.readFile(filePath, "utf8");
}

function maxCalories(arr) {
  let maxSum = -1;

  for (const item of arr) {
    if (item.sum > maxSum) {
      maxSum = item.sum;
    }
  }
  return maxSum;
}

const filePath = "input.txt";
let data;

(async () => {
  try {
    data = await readFileAndReturnContent(filePath);

    const numbers = data.split("\n").map(Number);

    elves = sumGroups(numbers);

    console.log("There is an elve with:", maxCalories(elves), "calories");

    // console.log('File contents:');
    // console.log(data);
  } catch (err) {
    console.error(`Error reading the file: ${err}`);
  }
})();
