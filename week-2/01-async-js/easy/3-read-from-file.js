const fs = require("fs");

fs.readFile("3-test.txt", "utf-8", (err, data) => {
  if (err) console.log(err);
  else console.log(data);
});

let sum = 0;
for (let i = 1; i < 10000000000; i++) {
  sum += i;
}
console.log(sum);
