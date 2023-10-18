const fs = require("fs").promises;

function score(arr) {
  const sum = arr.reduce((acc, obj) => {
    if (obj.opponent === "A") {
      if (obj.me === "X") acc = acc + 1 + 3;
      if (obj.me === "Y") acc = acc + 2 + 6;
      if (obj.me === "Z") acc = acc + 3 + 0;
    } else if (obj.opponent === "B") {
      if (obj.me === "X") acc = acc + 1 + 0;
      if (obj.me === "Y") acc = acc + 2 + 3;
      if (obj.me === "Z") acc = acc + 3 + 6;
    } else if (obj.opponent === "C") {
      if (obj.me === "X") acc = acc + 1 + 6;
      if (obj.me === "Y") acc = acc + 2 + 0;
      if (obj.me === "Z") acc = acc + 3 + 3;
    }
    return acc;
  }, 0);
  return sum;
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

    const dataLines = data.split("\n");

    const result = dataLines.reduce((acc, line) => {
      const [opponent, me] = line.split(" ");
      acc.push({ opponent, me });
      return acc;
    }, []);

    const scr = score(result)

    // console.log("File contents:");
    console.log(scr);
  } catch (err) {
    console.error(`Error reading the file: ${err}`);
  }
})();
