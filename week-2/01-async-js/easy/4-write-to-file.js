const fs = require("fs");

const data = "Data written using fs library";

fs.writeFile("4-test.txt", data, "utf-8", (err) => {
  if (err) console.log(err);
  else console.log("Data written in file");
});
